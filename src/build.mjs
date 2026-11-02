// Builds dist/index.html, one page per workshop and dist/app.js from data.mjs. Encrypts the email, hashes the inline style and app.js for CSP/SRI.
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as D from './data.mjs';

const here = new URL('.', import.meta.url).pathname;
const out = here + '../dist/';
fs.mkdirSync(out, { recursive: true });

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const place = D.place;
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const word = (n) => WORDS[n] || String(n);
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const lower1 = (t) => t.charAt(0).toLowerCase() + t.slice(1);
const pageOf = (w) => `${w.slug}.html`;

// --- encrypted email (AES-256-GCM, decrypted in the browser only when a visitor asks) ---
const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
const c = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([c.update('racocella46@gmail.com', 'utf8'), c.final(), c.getAuthTag()]);
const lock = { key: key.toString('base64'), iv: iv.toString('base64'), data: enc.toString('base64') };

const counted = D.workshops.filter((w) => w.count);
const seats = counted.reduce((a, w) => a + w.count, 0);

// every city where a talk or a workshop was given, with how many of each
const placeMap = new Map();
for (const w of D.workshops) { const e = placeMap.get(w.city) || { city: w.city, workshops: 0, talks: 0 }; e.workshops++; placeMap.set(w.city, e); }
for (const t of D.talks) { const e = placeMap.get(t.city) || { city: t.city, workshops: 0, talks: 0 }; e.talks++; placeMap.set(t.city, e); }
const online = placeMap.get('online'); placeMap.delete('online');
const places = [...placeMap.values()].map((e) => ({ ...e, n: e.workshops + e.talks })).sort((a, b) => b.n - a.n);
const countries = [...new Set(places.map((p) => D.cities[p.city].country))];
const tally = (e) => [e.workshops && `${e.workshops} workshop${e.workshops > 1 ? 's' : ''}`, e.talks && `${e.talks} talk${e.talks > 1 ? 's' : ''}`].filter(Boolean).join(', ');

const workshopsData = D.workshops.map((w) => ({ id: w.id, slug: w.slug, model: w.model, count: w.count, when: w.when, audience: w.audience, place: place(w.city) }));
const land = JSON.parse(fs.readFileSync(here + 'land.json', 'utf8'));
const data = {
  lock, seats, countedWords: word(counted.length),
  cities: D.cities, workshops: workshopsData,
  places: places.map((p) => ({ city: p.city, n: p.n })), land
};

// self-hosted fonts (src/fetch-fonts.mjs): no request leaves the site
fs.mkdirSync(out + 'fonts', { recursive: true });
for (const f of fs.readdirSync(here + 'fonts')) if (f.endsWith('.woff2')) fs.copyFileSync(here + 'fonts/' + f, out + 'fonts/' + f);
const css = fs.readFileSync(here + 'fonts/fonts.css', 'utf8') + fs.readFileSync(here + 'style.css', 'utf8');
const js = fs.readFileSync(here + 'app.js', 'utf8');
fs.writeFileSync(out + 'app.js', js);
const sri = 'sha384-' + crypto.createHash('sha384').update(js).digest('base64');
const styleHash = "'sha256-" + crypto.createHash('sha256').update(css).digest('base64') + "'";

const csp = [
  "default-src 'none'",
  "script-src 'self'",
  `style-src ${styleHash}`,
  "font-src 'self'",
  "img-src 'self' data:",
  "connect-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "object-src 'none'"
].join('; ');

// --- Rocco's own photographs (optional, see data.mjs) ---
const photoSlot = {};
for (const ph of D.photos || []) {
  const srcFile = here + 'photos/' + ph.file;
  if (!fs.existsSync(srcFile)) { console.warn('photo missing, skipped:', ph.file); continue; }
  fs.mkdirSync(out + 'photos', { recursive: true });
  fs.copyFileSync(srcFile, out + 'photos/' + ph.file);
  (photoSlot[ph.slot] ||= []).push(`<figure class="photo"><img src="photos/${esc(ph.file)}" alt="${esc(ph.alt)}" loading="lazy" decoding="async">${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ''}</figure>`);
}
for (const f of fs.existsSync(here + 'photos') ? fs.readdirSync(here + 'photos') : []) {
  if (/\.(jpe?g|png|webp)$/i.test(f)) { fs.mkdirSync(out + 'photos', { recursive: true }); fs.copyFileSync(here + 'photos/' + f, out + 'photos/' + f); }
}
const figure = (im, cls) => im ? `<figure class="${cls}"><img src="photos/${esc(im.file)}" alt="${esc(im.alt)}" decoding="async"${cls === 'w-pic' ? '' : ' loading="lazy"'}>${im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ''}</figure>` : '';
const photos = (slot) => photoSlot[slot] ? `<div class="photos">${photoSlot[slot].join('')}</div>` : '';

const ext = (href, text) => `<a href="${href}" rel="noopener noreferrer" target="_blank">${text}</a>`;

const roleRows = D.roles.map((r) => `
      <article class="role">
        <p class="role-when">${esc(r.when)}</p>
        <div class="role-head"><h3>${esc(r.role)}</h3><p class="muted">${esc(r.school)}, ${esc(place(r.city))}</p></div>
        <ul class="role-points">${r.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`).join('');

const alchemy = D.alchemy.map(([l, w]) => `<li><span class="al-letter" aria-hidden="true">${l}</span><span class="al-word">${w}</span></li>`).join('');

const projectRows = D.projects.map((p) => `<div class="proj"><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p></div>`).join('');

const names = D.workshops.map((w, i) => `<li><a class="ws-name" data-i="${i}" href="${pageOf(w)}">${esc(w.short)}</a></li>`).join('');

const archive = D.workshops.map((w) => `
      <article class="ws" id="${w.id}">
        <div class="ws-meta"><p class="ws-when">${esc(w.when)}</p><p class="muted">${esc(place(w.city))}</p></div>
        <div class="ws-body">
          <h3>${esc(w.title)}</h3>
          <p class="ws-facts">${esc(w.venue)}. ${esc(w.length)}, ${esc(w.audience.charAt(0).toLowerCase() + w.audience.slice(1))}.</p>
          <p>${esc(w.text)}</p>
          <p><a class="more" href="${pageOf(w)}">See the ${esc(w.short)} model and the full abstract</a></p>
        </div>
      </article>`).join('');

const talkRows = D.talks.map((t) => `
          <li class="row" tabindex="0" data-city="${t.city}">
            <div class="row-top"><span class="row-title">${t.slug ? `<a href="${t.slug}.html">${esc(t.title)}</a>` : esc(t.title)}</span><span class="row-when">${esc(t.when)}</span></div>
            <p class="row-sub">${esc(t.kind)}. ${esc(t.conf)}${t.city === 'online' ? (/online/i.test(t.kind) ? '' : ', online') : ', ' + esc(place(t.city))}</p>
          </li>`).join('');

const confRows = D.conferences.map((t) => `
          <li class="row row-tight" tabindex="0" data-city="${t.city}">
            <div class="row-top"><span class="row-title">${esc(t.title)}</span><span class="row-when">${esc(t.when)}</span></div>
            <p class="row-sub">${t.place ? esc(t.place) + ', ' : ''}${esc(place(t.city))}</p>
          </li>`).join('');

const byCountry = countries.map((co) => {
  const items = places.filter((p) => D.cities[p.city].country === co);
  return `<li class="country"><h3>${esc(co)}</h3><ul>${items.map((p) => `<li tabindex="0" data-place="${p.city}"><span class="pl-city">${esc(D.cities[p.city].name)}</span> <span class="pl-n">${tally(p)}</span></li>`).join('')}</ul></li>`;
}).join('');
const placesLede = `Talks and workshops in ${word(places.length)} cities across ${word(countries.length)} countries${online ? `, and ${word(online.n || online.workshops + online.talks)} more online` : ''}.`;

const nav = (prefix) => `<nav class="bar" aria-label="Main">
  <a class="bar-mark" href="${prefix}#top">Rocco Acocella</a>
  <div class="bar-links"><a class="bar-opt" href="${prefix}#work">Teaching</a><a href="${prefix}#places">Places</a><a href="${prefix}#workshops">Workshops</a><a href="${prefix}#talks">Talks</a><a class="bar-opt" href="${prefix}#training">Training</a><a href="${prefix}#contact">Contact</a></div>
</nav>`;
const footer = (prefix) => `<footer class="foot">
  <p class="foot-name" aria-hidden="true">Rocco Acocella</p>
  <p class="foot-li">${D.linkedin ? ext(esc(D.linkedin), 'LinkedIn') : 'On LinkedIn as Rocco Acocella'}</p>
  <nav aria-label="Footer"><a href="${prefix}#work">Teaching</a><a href="${prefix}#places">Places</a><a href="${prefix}#workshops">Workshops</a><a href="${prefix}#talks">Talks</a><a href="${prefix}#contact">Contact</a></nav>
</footer>`;

const pubs = D.publications.map((p) => `<li><p>${esc(p.cite)}</p>${p.href ? `<p>${ext(p.href, p.link)}</p>` : ''}</li>`).join('');
const edu = D.education.map((e) => `<li><p class="strong">${esc(e.title)}</p><p class="muted">${esc(e.place)}, ${esc(place(e.city))}</p></li>`).join('');
const langs = D.languages.map(([l, v]) => `<li><span class="strong">${l}</span> ${v}</li>`).join('');
const certs = D.certificates.map((c) => `<li>${esc(c)}</li>`).join('');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex">
<title>Rocco Acocella</title>
<meta name="description" content="Rocco Acocella: Italian teacher at the Canadian School of Milan, workshop leader and researcher in creativity and alternating attention.">
<link rel="preload" href="fonts/libre-franklin-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
</head>
<body id="top">
<a class="skip" href="#work">Skip to the CV</a>

<div class="lead">
  <div class="corners">
    <h1 class="name"><span class="c1">Rocco</span> <span class="c2">Acocella</span></h1>
  </div>

  <header class="hero">
    <div class="hero-paper">
      <div class="hero-copy">
        <p class="hero-line">Italian teacher at the Canadian School of Milan, and a workshop leader who trains teachers and students to switch attention on purpose.</p>
        <div class="actions">
          <a class="btn" href="#workshops">See the workshops</a>
          <a class="link" href="#contact">Write to Rocco</a>
        </div>
      </div>
      <nav class="side-nav" aria-label="Sections">
        <a href="#work">Teaching</a>
        <a href="#workshops">Workshops</a>
        <a href="#talks">Talks</a>
        <a href="#training">Training</a>
      </nav>
    </div>
    <figure class="stage">
      <div class="modes" role="group" aria-label="Attention mode">
        <button type="button" class="mode" data-mode="diverge" aria-pressed="false">Diverge</button>
        <button type="button" class="mode" data-mode="converge" aria-pressed="true">Converge</button>
      </div>
      <canvas id="field" tabindex="0" role="img" aria-label="${seats} three-dimensional bricks, one for every seat in ${word(counted.length)} of Rocco's workshops. Drag or use the arrow keys to turn them."></canvas>
      <figcaption id="field-state" aria-live="polite">${seats} bricks, one for every seat in ${word(counted.length)} workshops.</figcaption>
    </figure>
  </header>

  <section class="approach" aria-labelledby="approach-h">
    <div class="approach-paper" data-rise>
      <h2 id="approach-h">Approach</h2>
      <p class="statement">Rocco teaches Italian, and teaches people to move their attention on purpose.</p>
      <p class="approach-text">Language is how ideas move between people. His work joins developmental and cognitive psychology, collaboration and creative process, with ideas borrowed from quantum physics, to make learning personal. In class it runs on one design cycle, The EduDesign Alchemist.</p>
    </div>
    <div class="approach-field">
      <h3 class="al-title">The Alchemy Cycle</h3>
      <ol class="alchemy">${alchemy}</ol>
    </div>
  </section>
</div>

${nav('')}

<main>
  <section id="work" class="work" aria-labelledby="work-h">
    <div class="work-head" data-rise>
      <h2 id="work-h">Teaching</h2>
      <p class="lede">Three years in the IB programmes at the Canadian School of Milan, now in primary.</p>
    </div>
    <div class="roles" data-rise>${roleRows}
    </div>${photos('teaching')}
  </section>

  <section class="projects" aria-labelledby="proj-h">
    <div class="proj-head" data-rise>
      <h2 id="proj-h">Projects and skills</h2>
      <p class="skills">${esc(D.skills.join(', '))}.</p>
    </div>
    <div class="proj-list" data-rise>${projectRows}</div>
  </section>

  <section id="places" class="places" aria-labelledby="places-h">
    <div class="places-head" data-rise>
      <h2 id="places-h">Places</h2>
      <p class="lede">${placesLede}</p>
    </div>
    <figure class="places-map">
      <canvas id="places-map" role="img" aria-label="Map of Europe marking the ${word(places.length)} cities where Rocco has given talks and workshops, sized by how many."></canvas>
    </figure>
    <ul class="places-list">${byCountry}${online ? `<li class="country"><h3>Online</h3><ul><li><span class="pl-n">${tally(online)}</span></li></ul></li>` : ''}</ul>
  </section>

  <section id="workshops" class="workshops" aria-labelledby="ws-h">
    <div class="ws-top">
      <h2 id="ws-h">Workshops</h2>
      <p class="lede">Each name builds its own storey: one brick for every seat that was filled.</p>
    </div>
    <div class="ws-stage">
      <div class="held" aria-hidden="true">
        <div class="held-inner">
          <canvas id="frame-field"></canvas>
          <div class="facts">
            <p class="fact" id="fact-left">${esc(place(D.workshops[0].city))}</p>
            <p class="fact fact-r" id="fact-right">${esc(D.workshops[0].when)}</p>
          </div>
        </div>
      </div>
      <ol class="ws-names">
        ${names}
      </ol>
    </div>
  </section>

  <section class="archive" aria-labelledby="arch-h">
    <div class="arch-head" data-rise>
      <h2 id="arch-h">Every workshop</h2>
      <p class="lede">${cap(word(D.workshops.length))} workshops since 2023, for ${seats} participants: teachers, student teachers and students. Each has its own page.</p>
    </div>
    ${photos('workshops')}<div class="ws-list">${archive}
    </div>
  </section>

  <section id="talks" class="talks" aria-labelledby="talks-h">
    <div class="map-col">
      <figure class="map-wrap">
        <canvas id="map" role="img" aria-label="Map of the cities where Rocco has taught, presented and studied, linked to Milan."></canvas>
        <figcaption id="map-label">Milan</figcaption>
      </figure>
    </div>
    <div class="lists">
      <h2 id="talks-h">Talks</h2>
      <ol class="rows">${talkRows}
      </ol>
      <h2 class="conf-h">Conferences</h2>
      <ol class="rows">${confRows}
      </ol>
    </div>${photos('talks')}
  </section>

  <section id="training" class="training" aria-labelledby="train-h">
    <div class="train-a" data-rise>
      <h2 id="train-h">Publications</h2>
      <ul class="pubs">${pubs}</ul>
    </div>
    <div class="train-b" data-rise>
      <h2>Education</h2>
      <ul class="edu">${edu}</ul>
      <div class="train-pair">
        <div><h3>Languages</h3><ul class="plain">${langs}</ul></div>
        <div><h3>Certificates</h3><ul class="plain">${certs}</ul></div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-h">
    <div class="contact-top">
      <h2 id="contact-h">Write to Rocco</h2>
      <p>For a workshop at your school or conference, a paper, or a conversation about attention and language.</p>
    </div>
    <div id="email" class="email">
      <button type="button" id="reveal" class="reveal">Show email address</button>
      <noscript><p class="nos">Turn on JavaScript to show the address, or find Rocco Acocella on LinkedIn.</p></noscript>
    </div>
    <div class="contact-foot">
      <p>Milan, Italy</p>
      <p>${D.linkedin ? ext(esc(D.linkedin), 'Rocco Acocella on LinkedIn') : 'On LinkedIn as Rocco Acocella'}</p>
    </div>${photos('contact')}
  </section>
</main>

${footer('')}

<script type="application/json" id="cv-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script src="app.js" integrity="${sri}" defer></script>
</body>
</html>
`;
fs.writeFileSync(out + 'index.html', html);

// --- one page per workshop: its brick model, its facts and its full abstract ---
const pageData = JSON.stringify({ cities: D.cities, workshops: workshopsData }).replace(/</g, '\\u003c');
D.workshops.forEach((w, i) => {
  const prev = D.workshops[(i - 1 + D.workshops.length) % D.workshops.length], next = D.workshops[(i + 1) % D.workshops.length];
  const note = D.modelNotes[w.model] ? D.modelNotes[w.model](w.count) : '';
  const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex">
<title>${esc(w.short)}, a workshop by Rocco Acocella</title>
<meta name="description" content="${esc(w.title)}. ${esc(w.when)}, ${esc(place(w.city))}.">
<link rel="preload" href="fonts/libre-franklin-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
</head>
<body id="top" class="wpage">
<a class="skip" href="#abstract">Skip to the abstract</a>
${nav('index.html')}

<header class="w-hero">
  <div class="w-paper">
    <h1 class="w-name">${esc(w.short)}</h1>
    <p class="w-title">${esc(w.title)}</p>
    <dl class="w-facts">
      <div><dt>When</dt><dd>${esc(w.when)}</dd></div>
      <div><dt>Where</dt><dd>${esc(place(w.city))}</dd></div>
      <div><dt>Hosted by</dt><dd>${esc(w.venue)}</dd></div>${w.cohost ? `
      <div><dt>Co-host</dt><dd>${esc(w.cohost)}</dd></div>` : ''}${w.copresenter ? `
      <div><dt>Presented with</dt><dd>${esc(w.copresenter)}</dd></div>` : ''}
      <div><dt>Length</dt><dd>${esc(cap(w.length))}</dd></div>
      <div><dt>Participants</dt><dd>${esc(w.audience)}</dd></div>
    </dl>
    <div class="actions"><a class="btn" href="#abstract">Read the abstract</a><a class="link" href="index.html#workshops">All workshops</a></div>
  </div>
  <figure class="stage w-stage">
    <div class="modes" role="group" aria-label="Attention mode">
      <button type="button" class="mode" data-mode="diverge" aria-pressed="false">Diverge</button>
      <button type="button" class="mode" data-mode="converge" aria-pressed="true">Converge</button>
    </div>
    <canvas id="model" data-i="${i}" tabindex="0" role="img" aria-label="Three-dimensional brick model of the ${esc(w.short)} workshop. ${esc(note)} Drag or use the arrow keys to turn it."></canvas>
    <figcaption>${esc(note)}</figcaption>
  </figure>
</header>

<main>
  ${w.image ? `<div class="w-photo">${figure(w.image, 'w-fig')}</div>` : ''}
  <section id="abstract" class="w-abstract" aria-labelledby="abs-h">
    <div class="w-side">
      <h2 id="abs-h">Abstract</h2>${w.bodymap ? `
      <a class="bodymap" href="${esc(w.bodymap.href)}" target="_blank" rel="noopener noreferrer">
        <img src="photos/${esc(w.bodymap.file)}" alt="${esc(w.bodymap.alt)}" loading="lazy" decoding="async">
        <span>${esc(w.bodymap.label)}</span>
      </a>` : ''}
    </div>
    <div class="w-text" data-rise>
      <p class="w-lead">${esc(w.title)}</p>
      ${(D.abstracts[w.id] || [w.text]).map((t) => `<p>${esc(t)}</p>`).join('\n      ')}
    </div>
  </section>
  <nav class="w-next" aria-label="Other workshops" data-rise>
    <a href="${pageOf(prev)}"><span class="w-dir">Previous workshop</span><span class="w-to">${esc(prev.short)}</span></a>
    <a href="${pageOf(next)}"><span class="w-dir">Next workshop</span><span class="w-to">${esc(next.short)}</span></a>
  </nav>
</main>

${footer('index.html')}

<script type="application/json" id="cv-data">${pageData}</script>
<script src="app.js" integrity="${sri}" defer></script>
</body>
</html>
`;
  fs.writeFileSync(out + pageOf(w), page);
});

// --- a page for a talk that has its own picture ---
for (const t of D.talks.filter((t) => t.slug)) {
  const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex">
<title>${esc(t.title)}, a talk by Rocco Acocella</title>
<meta name="description" content="${esc(t.title)}. ${esc(t.kind)}, ${esc(t.conf)}, ${esc(t.when)}.">
<link rel="preload" href="fonts/libre-franklin-normal-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
</head>
<body id="top" class="wpage">
<a class="skip" href="#talk">Skip to the talk</a>
${nav('index.html')}

<header class="w-hero t-hero" id="talk">
  <div class="w-paper">
    <h1 class="w-name">${esc(t.title)}</h1>
    <p class="w-title">${esc(t.kind)} at ${esc(t.conf)}.</p>
    <dl class="w-facts">
      <div><dt>When</dt><dd>${esc(t.when)}</dd></div>
      <div><dt>Where</dt><dd>${t.city === 'online' ? 'Online' : esc(place(t.city))}</dd></div>
      <div><dt>Format</dt><dd>${esc(t.kind)}</dd></div>
      <div><dt>Event</dt><dd>${esc(t.conf)}</dd></div>
    </dl>
    <div class="actions"><a class="btn" href="index.html#talks">All talks</a><a class="link" href="index.html#contact">Write to Rocco</a></div>
  </div>
  ${figure(t.image, 'w-pic')}
</header>

${footer('index.html')}
</body>
</html>
`;
  fs.writeFileSync(out + t.slug + '.html', page);
}

// Real HTTP headers for hosts that read a _headers file (Netlify, Cloudflare Pages). frame-ancestors only works as a header.
const headers = `/*
  Content-Security-Policy: ${csp}; frame-ancestors 'none'; upgrade-insecure-requests
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: no-referrer
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  X-Robots-Tag: noindex

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
`;
fs.writeFileSync(out + '_headers', headers);
console.log('built', out, 'seats', seats, 'html', html.length, 'bytes');

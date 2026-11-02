// Builds dist/index.html + dist/app.js from data.mjs. Encrypts the email, hashes the inline style and app.js for CSP/SRI.
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as D from './data.mjs';

const here = new URL('.', import.meta.url).pathname;
const out = here + '../dist/';
fs.mkdirSync(out, { recursive: true });

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const venueShort = (v) => { const i = v.lastIndexOf(', '); return i > -1 ? v.slice(i + 2) : v; };

// --- encrypted email (AES-256-GCM, decrypted in the browser only when a visitor asks) ---
const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
const c = crypto.createCipheriv('aes-256-gcm', key, iv);
const enc = Buffer.concat([c.update('racocella46@gmail.com', 'utf8'), c.final(), c.getAuthTag()]);
const lock = { key: key.toString('base64'), iv: iv.toString('base64'), data: enc.toString('base64') };

const counted = D.workshops.filter((w) => w.count);
const seats = counted.reduce((a, w) => a + w.count, 0);

const data = {
  lock,
  cities: D.cities,
  workshops: D.workshops.map((w) => ({ id: w.id, count: w.count, when: w.when, audience: w.audience, venueShort: venueShort(w.venue) }))
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
const photos = (slot) => photoSlot[slot] ? `<div class="photos">${photoSlot[slot].join('')}</div>` : '';

const ext = (href, text) => `<a href="${href}" rel="noopener noreferrer" target="_blank">${text}</a>`;

const roleRows = D.roles.map((r) => `
      <article class="role">
        <p class="role-when">${esc(r.when)}</p>
        <div class="role-head"><h3>${esc(r.role)}</h3><p class="muted">${esc(r.school)}</p></div>
        <ul class="role-points">${r.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`).join('');

const alchemy = D.alchemy.map(([l, w]) => `<li><span class="al-letter" aria-hidden="true">${l}</span><span class="al-word">${w}</span></li>`).join('');

const projectRows = D.projects.map((p) => `<div class="proj"><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p></div>`).join('');

const names = D.workshops.map((w, i) => `<li><a class="ws-name" data-i="${i}" href="#${w.id}">${esc(w.short)}</a></li>`).join('');

const archive = D.workshops.map((w) => `
      <article class="ws" id="${w.id}">
        <div class="ws-meta"><p class="ws-when">${esc(w.when)}</p><p class="muted">${esc(D.cities[w.city].name)}</p></div>
        <div class="ws-body">
          <h3>${esc(w.title)}</h3>
          <p class="ws-facts">${esc(w.venue)}. ${esc(w.length)}, ${esc(w.audience.charAt(0).toLowerCase() + w.audience.slice(1))}.</p>
          <p>${esc(w.text)}</p>
        </div>
      </article>`).join('');

const talkRows = D.talks.map((t) => `
          <li class="row" tabindex="0" data-city="${t.city}">
            <div class="row-top"><span class="row-title">${esc(t.title)}</span><span class="row-when">${esc(t.when)}</span></div>
            <p class="row-sub">${esc(t.kind)}. ${esc(t.conf)}, ${esc(D.cities[t.city].name)}</p>
          </li>`).join('');

const confRows = D.conferences.map((t) => `
          <li class="row row-tight" tabindex="0" data-city="${t.city}">
            <div class="row-top"><span class="row-title">${esc(t.title)}</span><span class="row-when">${esc(t.when)}</span></div>
            <p class="row-sub">${esc(t.place)}${t.place.includes(D.cities[t.city].name) ? '' : ', ' + esc(D.cities[t.city].name)}</p>
          </li>`).join('');

const pubs = D.publications.map((p) => `<li><p>${esc(p.cite)}</p>${p.href ? `<p>${ext(p.href, p.link)}</p>` : ''}</li>`).join('');
const edu = D.education.map((e) => `<li><p class="strong">${esc(e.title)}</p><p class="muted">${esc(e.place)}</p></li>`).join('');
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
<body>
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
      <canvas id="field" tabindex="0" role="img" aria-label="${seats} three-dimensional bricks, one for every seat in eleven of Rocco's workshops. Drag or use the arrow keys to turn them."></canvas>
      <figcaption id="field-state" aria-live="polite">${seats} bricks, one for every seat in eleven workshops.</figcaption>
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
            <p class="fact" id="fact-left">${esc(venueShort(D.workshops[0].venue))}</p>
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
      <p class="lede">Thirteen workshops since 2023, for ${seats} counted participants: teachers, student teachers and students.</p>
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

<footer class="foot">
  <p class="foot-name" aria-hidden="true">Rocco Acocella</p>
  <p>Curriculum vitae, ${new Date().getFullYear()}</p>
  <nav aria-label="Footer"><a href="#work">Teaching</a><a href="#workshops">Workshops</a><a href="#talks">Talks</a><a href="#contact">Contact</a></nav>
  <p class="foot-r">No cookies, no tracking; the email address is stored encrypted.</p>
</footer>

<script type="application/json" id="cv-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script src="app.js" integrity="${sri}" defer></script>
</body>
</html>
`;
fs.writeFileSync(out + 'index.html', html);

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

// Builds dist/index.html, one page per workshop and dist/app.js from data.mjs. Encrypts the email, hashes the inline style and app.js for CSP/SRI.
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as D from './data.mjs';

const here = new URL('.', import.meta.url).pathname;
const out = here + '../dist/';
fs.mkdirSync(out, { recursive: true });

// Shrink the trade mark sign in visible text (not in <title>, attributes or scripts).
const tm = (h) => h.replace(/(<script[\s\S]*?<\/script>|<title>[\s\S]*?<\/title>|<[^>]*>)|™/g, (m, keep) => keep || '<span class="tm">™</span>');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const place = D.place;
const hubFact = (k) => `${D.hubs[k].name}, ${D.hubs[k].org}, ${D.hubs[k].region}`;
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

// --- the Alchemy Cycle infographic: shipped only encrypted, decrypted in the browser and painted to a canvas,
// so the site holds no image file of it (a deterrent against saving and copying, not secrecy: the key ships too)
const alKey = crypto.randomBytes(32), alIv = crypto.randomBytes(12);
const alC = crypto.createCipheriv('aes-256-gcm', alKey, alIv);
const alEnc = Buffer.concat([alC.update(fs.readFileSync(here + 'protected/alchemy-cycle.jpg')), alC.final(), alC.getAuthTag()]);
const alchemyJs = `window.CV_ALCHEMY=${JSON.stringify({ iv: alIv.toString('base64'), data: alEnc.toString('base64'), w: 1048, h: 1424 })};\n`;

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

// who took part: teachers, pre-service teachers, students (attendees and participants of open events stay uncounted)
// attendees and participants of open events (PSN conferences) are counted as educators
const whoOf = (a) => (/pre-service/i.test(a) ? 1 : /student/i.test(a) ? 2 : /teacher/i.test(a) ? 0 : 3);
const who = ['Teachers', 'Pre-service teachers', 'Students', 'Educators'].map((label, i) => ({ label, n: D.workshops.filter((w) => whoOf(w.audience) === i).reduce((a, w) => a + w.count, 0) }));
const workshopsData = D.workshops.map((w) => ({ id: w.id, slug: w.slug, model: w.model, count: w.count, when: w.when, audience: w.audience, place: place(w.city) }));
const land = JSON.parse(fs.readFileSync(here + 'land.json', 'utf8'));
const landCa = JSON.parse(fs.readFileSync(here + 'land-ca.json', 'utf8'));
// online events with a hub at home in a city outside Europe: counted per hub city for the California inset
const hubEvents = [...D.workshops, ...D.talks].filter((e) => e.hub);
const hubPlaces = [...new Set(hubEvents.map((e) => D.hubs[e.hub].city))].map((city) => {
  const own = hubEvents.filter((e) => D.hubs[e.hub].city === city);
  return { city, n: own.length, workshops: own.filter((e) => D.workshops.includes(e)).length, talks: own.filter((e) => D.talks.includes(e)).length, hub: own[0].hub };
});
const data = {
  lock, alchemyKey: alKey.toString('base64'), seats, countedWords: word(counted.length), who,
  cities: D.cities, workshops: workshopsData,
  places: places.map((p) => ({ city: p.city, n: p.n })), land,
  hubPlaces: hubPlaces.map((p) => ({ city: p.city, n: p.n, name: D.hubs[p.hub].name })), landCa
};

// self-hosted fonts (src/fetch-fonts.mjs): no request leaves the site
fs.mkdirSync(out + 'fonts', { recursive: true });
for (const f of fs.readdirSync(here + 'fonts')) if (f.endsWith('.woff2')) fs.copyFileSync(here + 'fonts/' + f, out + 'fonts/' + f);
// the colours offered for in-person and online talks (the swatches are styled here: no inline style attributes)
const SWATCH = { inperson: ['#1537C7', '#0F8A5F', '#7A3FD1', '#0B1B4D'], online: ['#C2410C', '#C2255C', '#9A6700', '#0E7C86'] };
const swatchCss = Object.entries(SWATCH).flatMap(([m, list]) => list.map((c, i) => `.sw-${m}-${i}{background:${c}}`)).join('');
const css = fs.readFileSync(here + 'fonts/fonts.css', 'utf8') + fs.readFileSync(here + 'style.css', 'utf8') + swatchCss;
const js = fs.readFileSync(here + 'app.js', 'utf8');
fs.writeFileSync(out + 'app.js', js);
fs.writeFileSync(out + 'alchemy.js', alchemyJs);
// the three.js figures (bundled by src/bundle-figures.mjs)
const figuresJs = fs.readFileSync(here + 'vendor/figures.js');
fs.writeFileSync(out + 'figures.js', figuresJs);
const figSri = 'sha384-' + crypto.createHash('sha384').update(figuresJs).digest('base64');
const alSri = 'sha384-' + crypto.createHash('sha384').update(alchemyJs).digest('base64');
const sri = 'sha384-' + crypto.createHash('sha384').update(js).digest('base64');
const styleHash = "'sha256-" + crypto.createHash('sha256').update(css).digest('base64') + "'";

const csp = [
  "default-src 'none'",
  "script-src 'self'",
  `style-src ${styleHash}`,
  "font-src 'self'",
  "img-src 'self' data:",
  "connect-src 'none'",
  "frame-src https://www.youtube-nocookie.com",
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
          <p class="ws-facts">${esc(w.venue)}${w.hub ? ', with ' + esc(D.hubLine(w.hub)) : ''}. ${esc(w.length)}, ${esc(w.audience.charAt(0).toLowerCase() + w.audience.slice(1))}.</p>
          <p>${esc(w.text)}</p>
          <p><a class="more" href="${pageOf(w)}">See the ${esc(w.short)} model and the full abstract</a></p>
        </div>
      </article>`).join('');

const modeOf = (t) => (t.city === 'online' || /online/i.test(t.kind) ? 'online' : 'inperson');
const nTalks = { inperson: D.talks.filter((t) => modeOf(t) === 'inperson').length, online: D.talks.filter((t) => modeOf(t) === 'online').length };
const swatches = (m) => SWATCH[m].map((c, i) => `<button type="button" class="tf-sw" data-for="${m}" data-colour="${c}" aria-label="${m === 'online' ? 'Online' : 'In person'}: colour ${i + 1}" aria-pressed="false"><span class="sw-${m}-${i}"></span></button>`).join('');
const talkFilter = `
      <div class="tf" role="group" aria-label="Show talks">
        <button type="button" class="tf-btn" data-show="all" aria-pressed="true">All <span class="tf-n">${D.talks.length}</span></button>
        <button type="button" class="tf-btn" data-show="inperson" aria-pressed="false"><span class="mode-dot is-inperson" aria-hidden="true"></span>In person <span class="tf-n">${nTalks.inperson}</span></button>
        <button type="button" class="tf-btn" data-show="online" aria-pressed="false"><span class="mode-dot is-online" aria-hidden="true"></span>Online <span class="tf-n">${nTalks.online}</span></button>
      </div>
      <details class="tf-colours">
        <summary>Choose the colours</summary>
        <div class="tf-pick"><span class="tf-name">In person</span>${swatches('inperson')}<label class="tf-custom"><input type="color" data-for="inperson" value="${SWATCH.inperson[0]}"><span>Your own</span></label></div>
        <div class="tf-pick"><span class="tf-name">Online</span>${swatches('online')}<label class="tf-custom"><input type="color" data-for="online" value="${SWATCH.online[0]}"><span>Your own</span></label></div>
        <button type="button" class="tf-reset">Back to the defaults</button>
      </details>
      <p class="tf-status sr-only" aria-live="polite"></p>`;
// ---- the timeline: every date on the site, newest first, grouped by year ----
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const dateKey = (txt) => { // the first date in "29 Jun – 2 Jul 2026", "Aug 2024 – Jun 2025", "January to February 2025" …
  const y = (txt.match(/\b(19|20)\d{2}\b/) || [''])[0];
  const m = txt.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/);
  const mi = m ? MONTHS.indexOf(m[1]) + 1 : 0;
  const d = m ? (txt.slice(0, m.index).match(/(\d{1,2})\D*$/) || [])[1] : '';
  return `${y}-${String(mi).padStart(2, '0')}-${String(+d || 0).padStart(2, '0')}`;
};
const TL_KINDS = { workshop: 'Workshops', talk: 'Talks', conference: 'Conferences', role: 'Teaching', publication: 'Publications', video: 'Appearances' };
const timeline = [
  ...D.workshops.map((w) => ({ kind: 'workshop', key: w.sortDate, when: w.when, title: w.title, sub: `${w.venue}, ${place(w.city)}`, href: pageOf(w) })),
  ...D.talks.map((t) => ({ kind: 'talk', key: dateKey(t.when), when: t.when, title: t.title, sub: `${t.kind}, ${t.conf}`, href: t.slug ? `${t.slug}.html` : '#talks' })),
  ...D.conferences.map((c) => ({ kind: 'conference', key: dateKey(c.when), when: c.when, title: c.title, sub: [c.place, place(c.city)].filter(Boolean).join(', '), href: '#talks' })),
  ...D.roles.map((r) => ({ kind: 'role', key: dateKey(r.when), when: r.when, title: r.role, sub: `${r.school}, ${place(r.city)}`, href: '#work' })),
  ...D.publications.map((p) => ({ kind: 'publication', key: dateKey(p.cite), when: (p.cite.match(/\((\d{4})\)/) || [])[1], title: p.cite.replace(/^.*?\(\d{4}\)\.\s*/, '').split('. ')[0], sub: p.cite.split(' (')[0], href: '#training' })),
  ...D.appearances.filter((a) => a.when).map((a) => ({ kind: 'video', key: dateKey(a.when), when: a.when, title: a.title, sub: 'Video', href: '#appearances' }))
].sort((a, b) => (a.key < b.key ? 1 : a.key > b.key ? -1 : 0));
const tlYears = [...new Set(timeline.map((e) => e.key.slice(0, 4)))];
const tlCount = (k) => timeline.filter((e) => e.kind === k).length;
const timelinePanel = `
<div class="tl" id="timeline" role="dialog" aria-modal="true" aria-labelledby="tl-h" hidden>
  <div class="tl-panel">
    <div class="tl-top">
      <h2 id="tl-h">Timeline</h2>
      <p class="tl-sum">${timeline.length} dates, ${tlYears[tlYears.length - 1]} to ${tlYears[0]}</p>
      <button type="button" class="tl-close" id="tl-close">Close</button>
    </div>
    <div class="tl-filters" role="group" aria-label="Show in the timeline">${Object.entries(TL_KINDS).map(([k, label]) => `<button type="button" class="tl-f tl-k-${k}" data-kind="${k}" aria-pressed="true"><span class="tl-dot" aria-hidden="true"></span>${label} <span class="tl-n">${tlCount(k)}</span></button>`).join('')}</div>
    <nav class="tl-years" aria-label="Years">${tlYears.map((y) => `<a href="#tl-${y}" data-year="${y}">${y}</a>`).join('')}</nav>
    <div class="tl-scroll" id="tl-scroll">
      <div class="tl-rail" aria-hidden="true"><span class="tl-fill" id="tl-fill"></span></div>
      ${tlYears.map((y) => `<section class="tl-year" id="tl-${y}" aria-labelledby="tl-y-${y}"><h3 id="tl-y-${y}" class="tl-y">${y}</h3><ol class="tl-list">${timeline.filter((e) => e.key.startsWith(y)).map((e) => `
        <li class="tl-item tl-k-${e.kind}" data-kind="${e.kind}"><a href="${e.href}"><span class="tl-dot" aria-hidden="true"></span><span class="tl-when">${esc(e.when)}</span><span class="tl-kind">${TL_KINDS[e.kind].replace(/s$/, '')}</span><span class="tl-title">${esc(e.title)}</span><span class="tl-sub">${esc(e.sub)}</span></a></li>`).join('')}</ol></section>`).join('')}
    </div>
  </div>
</div>`;
// ---- the galaxy: every section and page of the site as a star, opened by the floating clicker ----
const galaxyStops = [
  ...[['top', 'Home'], ['work', 'Teaching'], ['places', 'Places'], ['workshops', 'Workshops'], ['talks', 'Talks'], ['appearances', 'Appearances'], ['training', 'Training'], ['contact', 'Contact']].map(([id, label]) => ({ kind: 'section', label, href: '#' + id })),
  ...D.workshops.map((w) => ({ kind: 'workshop', label: w.short, href: pageOf(w) })),
  ...D.talks.filter((t) => t.slug).map((t) => ({ kind: 'talk', label: t.title.split(': ')[0], href: `${t.slug}.html` }))
];
const galaxyPanel = `
<button type="button" class="gx-clicker" id="gx-clicker" hidden aria-haspopup="dialog" aria-controls="galaxy"><span class="gx-orbit" aria-hidden="true"><i></i><i></i><i></i></span><span class="gx-cl">Galaxy</span></button>
<div class="gx" id="galaxy" role="dialog" aria-modal="true" aria-labelledby="gx-h" hidden>
  <canvas id="gx-canvas" aria-hidden="true"></canvas>
  <div class="gx-top">
    <h2 id="gx-h">Galaxy</h2>
    <p class="gx-state" id="gx-state" aria-live="polite">Every page of the site is a star. Drag to turn it any way, scroll or pinch to zoom, pick a star to go there.</p>
    <button type="button" class="gx-close" id="gx-close">Close</button>
  </div>
  <div class="gx-nodes" id="gx-nodes" role="group" aria-label="Stars: the pages and sections of the site">${galaxyStops.map((g, i) => `<button type="button" class="gx-node gx-${g.kind}" data-i="${i}" data-kind="${g.kind}" data-href="${g.href}">${esc(g.label)}</button>`).join('')}</div>
  <div class="gx-panel">
    <button type="button" class="gx-converge" id="gx-converge" aria-pressed="false">Converge</button>
    <details class="gx-adjust" id="gx-adjust">
      <summary>Adjust</summary>
      <div class="gx-body">
        <label class="gx-row"><span>Spin</span><input type="range" id="gx-spin" min="0" max="100" value="30"></label>
        <label class="gx-row"><span>Spread</span><input type="range" id="gx-spread" min="60" max="160" value="100"></label>
        <label class="gx-row"><span>Brick size</span><input type="range" id="gx-size" min="50" max="200" value="100"></label>
        <fieldset class="gx-show"><legend>Stars</legend>
          <label><input type="checkbox" data-show="section" checked> Sections</label>
          <label><input type="checkbox" data-show="workshop" checked> Workshops</label>
          <label><input type="checkbox" data-show="talk" checked> Talks</label>
        </fieldset>
        <div class="gx-hues" role="group" aria-label="Colour of the bricks">${[['Mixed', 'mix'], ['Sun', '48'], ['Sky', '220'], ['Coral', '12'], ['Mint', '150'], ['Violet', '265']].map(([n, h]) => `<button type="button" class="gx-hue gx-h-${h}" data-hue="${h}" aria-label="${n}" aria-pressed="${h === 'mix'}"></button>`).join('')}</div>
        <button type="button" class="gx-reset" id="gx-reset">Back to the defaults</button>
      </div>
    </details>
  </div>
</div>`;
const talkRows = D.talks.map((t) => `
          <li class="row" tabindex="0" data-city="${t.hub ? D.hubs[t.hub].city : t.city}" data-mode="${modeOf(t)}">
            <div class="row-top"><span class="row-title"><span class="mode-dot" aria-hidden="true"></span>${t.slug ? `<a href="${t.slug}.html">${esc(t.title)}</a>` : esc(t.title)}</span><span class="row-when">${esc(t.when)}</span></div>
            <p class="row-sub">${esc(t.kind)}. ${esc(t.conf)}${t.hub ? ', ' + esc(t.conf.startsWith(D.hubs[t.hub].name) ? `a hub of ${D.hubs[t.hub].org}, ${D.hubs[t.hub].region}` : D.hubLine(t.hub)) : ''}${t.city === 'online' ? (/online/i.test(t.kind) ? '' : ', online') : ', ' + esc(place(t.city))}</p>
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
  <div class="bar-links"><a class="bar-opt" href="${prefix}#work">Teaching</a><a href="${prefix}#places">Places</a><a href="${prefix}#workshops">Workshops</a><a href="${prefix}#talks">Talks</a><a class="bar-opt" href="${prefix}#appearances">Appearances</a><a class="bar-opt" href="${prefix}#training">Training</a><a href="${prefix}#contact">Contact</a></div>
</nav>`;
const footer = (prefix) => `<footer class="foot">
  <p class="foot-name" aria-hidden="true">Rocco Acocella</p>
  <p class="foot-li">${D.linkedin ? ext(esc(D.linkedin), 'LinkedIn') : 'On LinkedIn as Rocco Acocella'}</p>
  <nav aria-label="Footer"><a href="${prefix}#work">Teaching</a><a href="${prefix}#places">Places</a><a href="${prefix}#workshops">Workshops</a><a href="${prefix}#talks">Talks</a><a href="${prefix}#contact">Contact</a></nav>
</footer>`;

const pubs = D.publications.map((p) => `<li><p>${esc(p.cite)}</p>${p.href ? `<p>${ext(p.href, p.link)}</p>` : ''}${p.abstract ? `<details class="pub-abs"><summary>Read the abstract</summary><p>${esc(p.abstract)}</p></details>` : ''}</li>`).join('');
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
        <p class="hero-line">An international educator who designs learning experiences that harmoniously blend attention, play, and collaboration, catering to schools, teams, and individuals with a thirst for innovative thinking.</p>
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
      <div class="al-body">
        <ol class="alchemy">${alchemy}</ol>
        <button type="button" class="al-open" id="al-open" aria-haspopup="dialog" hidden>
          <canvas class="guarded" id="al-thumb" role="img" aria-label="The A·L·C·H·E·M·Y Cycle, a transformative course design framework: seven phases from Attunement to Yield, each with its outcome."></canvas>
          <span>Open the full cycle</span>
        </button>
      </div>
    </div>
  </section>
</div>

${nav('')}

<main>
  <section id="work" class="work" aria-labelledby="work-h">
    <div class="work-head" data-rise>
      <h2 id="work-h">Teaching</h2>
      <p class="lede">After 2 years in the IB programs (MYP &amp; DP) at the Canadian School of Milan, moved last year and currently holding the position of Italian Primary Teacher.</p>
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
      <canvas id="places-map" role="img" aria-label="Map of Europe marking the ${word(places.length)} cities where Rocco has given talks and workshops, sized by how many, with an inset of California marking Saybrook University, home of the C.R.E.A.T.E. hub."></canvas>
    </figure>
    <ul class="places-list">${byCountry}${online ? `<li class="country"><h3>Online</h3><ul><li><span class="pl-n">${tally(online)}</span></li>${hubPlaces.map((p) => `<li tabindex="0" data-place="${p.city}"><span class="pl-city">${esc(D.hubs[p.hub].name)}</span> <span class="pl-n">${tally(p)}, with ${esc(D.hubs[p.hub].org)}, ${esc(place(p.city))}</span></li>`).join('')}</ul></li>` : ''}</ul>
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
      <p class="lede">Each workshop has its own page, with its model and the full abstract.</p>
    </div>
    <div class="figures" id="figures">
      <p class="sr-only">${cap(word(D.workshops.length))} workshops since 2023, for ${seats} participants: teachers, pre-service teachers, students and educators.</p>
      <canvas id="fig-canvas" aria-hidden="true"></canvas>
      <div class="fig-row" aria-hidden="true">
        <div class="fig"><span class="fig-n">+${D.workshops.length}</span><span class="fig-l">Workshops</span></div>
        <div class="fig"><span class="fig-n">${seats}</span><span class="fig-l">Participants</span></div>
        <div class="fig fig-who"><span class="fig-ws">${who.map((w) => `<span class="fig-w">${esc(w.label)}</span>`).join('')}</span><span class="fig-l">Who took part</span></div>
      </div>
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
      <button type="button" class="tl-open" id="tl-open" aria-haspopup="dialog" aria-controls="timeline"><span class="tl-open-l">Timeline</span><span class="tl-open-s">${timeline.length} dates, ${tlYears[tlYears.length - 1]}–${tlYears[0]}</span></button>
    </div>
    <div class="lists">
      <h2 id="talks-h">Talks</h2>${talkFilter}
      <ol class="rows talk-rows">${talkRows}
      </ol>
      <h2 class="conf-h">Conferences</h2>
      <ol class="rows">${confRows}
      </ol>
    </div>${photos('talks')}
  </section>

  <section id="appearances" class="appearances" aria-labelledby="app-h">
    <div class="app-head" data-rise>
      <h2 id="app-h">Appearances</h2>
      <p class="lede">On screen: talks and conference moments, to watch here.</p>
    </div>
    <div class="app-list">${D.appearances.map((a, i) => `
      <figure class="app app-${i + 1}">
        <div class="app-frame"><iframe src="https://www.youtube-nocookie.com/embed/${a.id}?rel=0" title="${esc(a.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        <figcaption><span class="app-title">${esc(a.title)}</span>${a.note ? `<span class="app-note">${esc(a.note)}</span>` : ''}${ext(`https://www.youtube.com/watch?v=${a.id}`, 'Watch on YouTube')}</figcaption>
      </figure>`).join('')}
    </div>
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
      <h2 id="contact-h">Connect. Collaborate.<br> <span class="nowrap">Cross-pollinate.</span></h2>
      <div class="say" id="say">
        <p class="sr-only">Book a workshop, have a conversation, pose a question or ask for information. Curious?</p>
        <canvas id="say-canvas" aria-hidden="true"></canvas>
        <p class="say-ws" aria-hidden="true"><span class="say-w">Book a workshop</span><span class="say-w">Have a conversation</span><span class="say-w">Curious?</span><span class="say-w">Pose a question</span><span class="say-w">Ask for information</span></p>
      </div>
    </div>
    <div id="email" class="email">
      <button type="button" id="reveal" class="reveal">Show email address</button>
      <noscript><p class="nos">Turn on JavaScript to show the address, or find Rocco Acocella on LinkedIn.</p></noscript>
    </div>
    <div class="contact-foot">
      <p class="where">Physically in Milan, mentally everywhere.</p>
      <div class="unalome-wrap">
        <button type="button" class="unalome" id="unalome" aria-expanded="false" aria-controls="hue-bubble" aria-label="Unalome, a path from confusion to clarity. Choose its colour"><canvas id="unalome-canvas" aria-hidden="true"></canvas></button>
        <div class="hue-bubble" id="hue-bubble" hidden>
          <p class="hue-h">Colour of the unalome</p>
          <input type="range" class="hue-range" id="hue-range" min="0" max="359" step="1" value="50" aria-label="Hue">
          <div class="hue-dots">${[['White', 'w'], ['Sun', '48'], ['Coral', '12'], ['Rose', '330'], ['Violet', '265'], ['Sky', '200'], ['Mint', '150']].map(([n, h]) => `<button type="button" class="hue-dot hue-${h}" data-hue="${h}" aria-label="${n}" aria-pressed="false"></button>`).join('')}</div>
        </div>
      </div>
    </div>${photos('contact')}
  </section>
</main>

${footer('')}

${timelinePanel}
${galaxyPanel}

<dialog class="al-dialog" id="al-dialog" aria-label="The Alchemy Cycle">
  <button type="button" class="al-close" id="al-close">Close</button>
  <canvas class="guarded" id="al-full" role="img" aria-label="The A·L·C·H·E·M·Y Cycle, a transformative course design framework. Attunement: enter with curiosity and intention. Listen: listen deeply to people, ideas and the context. Cultivate: generate possibilities and explore widely. Humanize: center human values, voices and impact. Envision: design and shape the future you want to create. Metacognize: reflect on thinking, process and growth. Yield: share, contribute and make an impact."></canvas>
</dialog>

<script type="application/json" id="cv-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script src="alchemy.js" integrity="${alSri}" defer></script>
<script src="figures.js" integrity="${figSri}" defer></script>
<script src="app.js" integrity="${sri}" defer></script>
</body>
</html>
`;
fs.writeFileSync(out + 'index.html', tm(html));

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
      <div><dt>Hosted by</dt><dd>${esc(w.venue)}</dd></div>${w.hub ? `
      <div><dt>Hub</dt><dd>${esc(hubFact(w.hub))}</dd></div>` : ''}${w.cohost ? `
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
  fs.writeFileSync(out + pageOf(w), tm(page));
});

// --- a page for a talk that has its own picture ---
for (const t of D.talks.filter((t) => t.slug)) {
  // a long title is split at its colon: the main title as the heading, the rest under it
  const [tMain, tSub] = t.title.includes(': ') ? [t.title.slice(0, t.title.indexOf(': ')), t.title.slice(t.title.indexOf(': ') + 2)] : [t.title, ''];
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
    <h1 class="w-name${tMain.length > 24 ? ' is-long' : ''}">${esc(tMain)}</h1>${tSub ? `
    <p class="w-sub">${esc(tSub)}</p>` : ''}
    <p class="w-title">${esc(t.kind)} at ${esc(t.conf)}.</p>
    <dl class="w-facts">
      <div><dt>When</dt><dd>${esc(t.when)}</dd></div>
      <div><dt>Where</dt><dd>${t.city === 'online' ? 'Online' : esc(place(t.city))}</dd></div>
      <div><dt>Format</dt><dd>${esc(t.kind)}</dd></div>
      <div><dt>Event</dt><dd>${esc(t.conf)}</dd></div>${t.hub ? `
      <div><dt>Hub</dt><dd>${esc(hubFact(t.hub))}</dd></div>` : ''}
    </dl>
    <div class="actions"><a class="btn" href="index.html#talks">All talks</a><a class="link" href="index.html#contact">Write to Rocco</a></div>
  </div>
  ${figure(t.image, 'w-pic')}
</header>

${footer('index.html')}
</body>
</html>
`;
  fs.writeFileSync(out + t.slug + '.html', tm(page));
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

// Static site generator for rocco-acocella website. No dependencies.
// Usage: node website/src/build.mjs   → writes website/dist/
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, cpSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = dirname(fileURLToPath(import.meta.url));
const ROOT = join(SRC, '..');
const DIST = join(ROOT, 'dist');
const ASSETS = join(ROOT, 'assets');

const json = (p) => JSON.parse(readFileSync(join(SRC, p), 'utf8'));
const site = json('data/site.json');
const workshops = json('data/workshops.json');
const logos = json('data/logos.json');
const gpts = json('data/gpts.json');
const T = { en: json('content/en.json'), it: json('content/it.json') };
const LANGS = ['en', 'it'];

// Route of each page relative to the language root.
const PAGES = {
  home: '',
  about: 'about/',
  vision: 'vision/',
  workshops: 'workshops/',
  gpts: 'chatgpts/'
};
const NAV_ORDER = ['about', 'vision', 'workshops', 'gpts'];
const PAGE_COLOR = { about: '#FFE3A9', vision: '#C9E7D2', workshops: '#FFD0C2', gpts: '#CFDCF7' };
const EYEBROW = { about: ['01', 'gold'], workshops: ['02', 'coral'], vision: ['03', 'green'], gpts: ['04', 'blue'] };

const langPrefix = (lang) => (lang === 'en' ? '' : `${lang}/`);
const pagePath = (lang, page) => langPrefix(lang) + PAGES[page];

// ---------- helpers ----------
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Mini markup: [[color|text]] → highlighted serif italic word.
const rich = (s) => esc(s).replace(/\[\[(\w+)\|([^\]]+)\]\]/g, (_, c, t) => `<em class="hl hl--${c}">${t}</em>`);
const plain = (s) => String(s).replace(/\[\[\w+\|([^\]]+)\]\]/g, '$1');

const isExternal = (href) => /^https?:/.test(href);
const ext = (href) => (isExternal(href) ? ' target="_blank" rel="noopener"' : '');
const srNewTab = (href, t) => (isExternal(href) ? `<span class="sr-only"> ${esc(t.newTab)}</span>` : '');

const mailto = (subject) => `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

const hasAsset = (rel) => existsSync(join(ASSETS, rel));

function portrait(alt, cls, eager) {
  if (hasAsset('portrait.jpg')) {
    return `<img class="${cls}" src="{{base}}assets/portrait.jpg" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  }
  // Placeholder until assets/portrait.jpg is added.
  return `<div class="${cls} portrait-placeholder" role="img" aria-label="${esc(alt)}"><span>RA</span></div>`;
}

// ---------- shared chrome ----------
function nav(lang, page) {
  const t = T[lang];
  const base = '{{base}}';
  const pills = NAV_ORDER.map((p) => {
    const active = p === page;
    return `<a class="nav-pill${active ? ' is-active' : ''}" style="--pc:${PAGE_COLOR[p]}" href="${base}${pagePath(lang, p)}"${active ? ' aria-current="page"' : ''}>${esc(t.nav[p])}</a>`;
  }).join('');
  const toggle = LANGS.map((l) => {
    const active = l === lang;
    return `<a class="lang-btn${active ? ' is-active' : ''}" href="${base}${pagePath(l, page)}" hreflang="${l}" lang="${l}" data-lang="${l}"${active ? ' aria-current="true"' : ''} aria-label="${esc(T[l].langName)}">${l.toUpperCase()}</a>`;
  }).join('');
  return `
<header class="site-header">
  <nav class="nav" aria-label="Main">
    <a class="wordmark" href="${base}${pagePath(lang, 'home')}">${esc(t.brand)}<span class="dot">.</span></a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav-menu" data-open="${esc(t.menu)}" data-close="${esc(t.close)}">${esc(t.menu)}</button>
    <div class="nav-menu" id="nav-menu">
      <div class="nav-links">${pills}</div>
      <a class="btn-contact" href="${mailto()}">${esc(t.nav.contact)}</a>
      <div class="lang-toggle" role="group" aria-label="${esc(t.nav.langLabel)}">${toggle}</div>
    </div>
  </nav>
</header>`;
}

function footer(lang) {
  const t = T[lang];
  const links = NAV_ORDER.map((p) => `<a href="{{base}}${pagePath(lang, p)}">${esc(t.nav[p])}</a>`).join('');
  const social = (href, label) => {
    const external = isExternal(href);
    return `<a class="pill pill--ghost" href="${esc(href)}"${ext(href)}>${esc(label)} ↗${external ? srNewTab(href, t) : ''}</a>`;
  };
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <p class="footer-headline">${rich(t.footer.headline)}</p>
    <div class="footer-buttons">
      <a class="pill pill--light" href="${mailto()}">${esc(site.email)}</a>
      ${social(site.linkedin, t.footer.linkedin)}
      ${social(site.instagram, t.footer.instagram)}
    </div>
    <div class="footer-bottom">
      <span>${esc(t.footer.copyright.replace('{year}', site.year))}</span>
      <nav class="footer-links" aria-label="Footer">${links}</nav>
    </div>
  </div>
</footer>`;
}

function eyebrow(lang, page) {
  const [num, color] = EYEBROW[page];
  return `<p class="eyebrow"><span class="eyebrow-num c-${color}">${num}</span><span class="eyebrow-label">${esc(T[lang][page].eyebrow)}</span></p>`;
}

function layout(lang, page, body) {
  const t = T[lang];
  const meta = t.meta[page];
  const depth = pagePath(lang, page).split('/').filter(Boolean).length;
  const base = depth ? '../'.repeat(depth) : './';
  const abs = (l) => (site.siteUrl ? `${site.siteUrl.replace(/\/$/, '')}/${pagePath(l, page)}` : `${base}${pagePath(l, page)}`);
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(l)}">`).join('\n  ')
    + `\n  <link rel="alternate" hreflang="x-default" href="${abs('en')}">`;
  const html = `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${lang === 'it' ? 'it_IT' : 'en_GB'}">
  <meta name="theme-color" content="#FDF9F0">
  ${site.siteUrl ? `<link rel="canonical" href="${abs(lang)}">` : ''}
  ${alternates}
  <link rel="icon" href="{{base}}assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=Karla:wght@400..700&display=swap">
  <link rel="stylesheet" href="{{base}}styles.css">
  <script src="{{base}}main.js" defer></script>
</head>
<body class="page-${page}" data-lang="${lang}">
<a class="skip-link" href="#main">${esc(t.skip)}</a>
${nav(lang, page)}
<main id="main">
${body}
</main>
${footer(lang)}
</body>
</html>
`;
  return html.replaceAll('{{base}}', base);
}

// ---------- pages ----------
function homePage(lang) {
  const t = T[lang], h = t.home;
  const rows = h.index.map((r, i) => `
      <a class="index-row" style="--tint:${['#FFF6E2', '#FFEFE9', '#EBF5EE', '#EDF2FB'][i]}" href="{{base}}${pagePath(lang, r.page)}">
        <span class="index-num c-${['gold', 'coral', 'green', 'blue'][i]}">${r.num}</span>
        <span class="index-title">${esc(r.title)}</span>
        <span class="index-desc">${esc(r.desc)}</span>
        <span class="index-arrow" aria-hidden="true">→</span>
      </a>`).join('');
  return `
<section class="container home-hero">
  <div class="home-hero-text">
    <p class="eyebrow-label">${esc(h.eyebrow)}</p>
    <h1 class="h1-home">${rich(h.h1)}</h1>
    <p class="home-lead">${esc(h.lead)}</p>
    <div class="btn-row">
      <a class="btn btn--coral" href="{{base}}${pagePath(lang, 'workshops')}">${esc(h.ctaBook)}</a>
      <a class="btn btn--outline" href="{{base}}${pagePath(lang, 'vision')}">${esc(h.ctaVision)}</a>
    </div>
  </div>
  <div class="home-hero-art">
    <div class="portrait-frame">${portrait(h.portraitAlt, 'portrait-img', true)}</div>
    <span class="shape shape--circle" aria-hidden="true"></span>
    <span class="shape shape--square" aria-hidden="true"></span>
    <span class="shape shape--diamond" aria-hidden="true"></span>
  </div>
</section>
<section class="container index-rows" aria-label="${esc(t.nav.home)}">${rows}
</section>`;
}

function aboutPage(lang) {
  const t = T[lang], a = t.about;
  const roles = a.roles.map(([art, role], i) => `<span class="role${i === 0 ? ' is-active' : ''}${i === a.staticRole ? ' is-static' : ''}">${esc(art)} <em class="hl hl--gold">${esc(role)}</em></span>`).join('');
  const chips = a.chips.map((c) => `<li class="chip">${esc(c)}</li>`).join('');
  const bio = a.bio
    ? `<p class="about-body">${esc(a.bio)}</p>`
    : `<!-- BIO PLACEHOLDER: add Rocco's bio to "about.bio" in src/content/${lang}.json -->\n      <p class="about-body bio-placeholder">${esc(a.bioPlaceholder)}</p>`;
  return `
<section class="container about-hero">
  ${eyebrow(lang, 'about')}
  <h1 class="h1-about">
    <span class="sr-only">${esc(a.rolesSr)} ${esc(plain(a.line2))}</span>
    <span aria-hidden="true"><span class="role-rotator" data-rotate>${roles}</span><br>${rich(a.line2)}</span>
  </h1>
</section>
<section class="container about-body-grid">
  <div class="about-side">
    <div class="about-portrait">
      ${portrait(a.portraitAlt, 'portrait-img', false)}
      <span class="about-dot" aria-hidden="true"></span>
    </div>
    <ul class="chips" role="list">${chips}</ul>
  </div>
  <div class="about-text">
    <p class="about-lead">${esc(a.lead)}</p>
    <p class="about-body">${esc(a.body)}</p>
    ${bio}
    <div class="btn-row">
      <a class="btn btn--dark" href="{{base}}${pagePath(lang, 'workshops')}">${esc(a.ctaWorkshops)}</a>
      <a class="btn btn--outline btn--outline-gold" href="${mailto()}">${esc(a.ctaContact)}</a>
    </div>
  </div>
</section>`;
}

function visionPage(lang) {
  const v = T[lang].vision;
  const looks = [['#FFF6E2', 'circle-gold'], ['#FFEFE9', 'square-coral'], ['#EBF5EE', 'diamond-green'], ['#EDF2FB', 'circle-blue']];
  const cards = v.cards.map((c, i) => `
    <article class="principle" style="--tint:${looks[i][0]}">
      <span class="icon icon--${looks[i][1]}" aria-hidden="true"></span>
      <h2 class="principle-title">${esc(c.title)}</h2>
      <p class="principle-text">${esc(c.text)}</p>
    </article>`).join('');
  return `
<section class="vision-hero">
  ${eyebrow(lang, 'vision')}
  <h1 class="h1-vision">${rich(v.h1a)}<br>${rich(v.h1b)}</h1>
  <p class="vision-lead">${esc(v.lead)}</p>
</section>
<section class="container principles">${cards}
</section>`;
}

function workshopsPage(lang) {
  const t = T[lang], w = t.workshops;
  const cards = workshops.map((ws, i) => {
    const c = ws[lang];
    return `
  <article class="workshop" style="--tint:${ws.tint}">
    <span class="workshop-num${ws.numeralLight ? ' is-light' : ''}" style="--circle:${ws.circle}" aria-hidden="true">${i + 1}</span>
    <div class="workshop-body">
      <h2 class="workshop-title">${esc(c.title)}</h2>
      <p class="workshop-text">${esc(c.text)}</p>
      <ul class="tags" role="list">${c.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join('')}</ul>
    </div>
  </article>`;
  }).join('');
  const tile = (l) => {
    const inner = hasAsset(`logos/${l.file}`)
      ? `<img src="{{base}}assets/logos/${l.file}" alt="${esc(l.name)}" loading="lazy" decoding="async">`
      : `<span class="logo-fallback">${esc(l.name)}</span>`;
    return `<li class="logo-tile${l.wide ? ' is-wide' : ''}" data-kind="${l.kind}">${inner}</li>`;
  };
  const sets = [0, 1, 2, 3].map((n) => `<ul class="logo-set" role="list"${n ? ' aria-hidden="true"' : ''}>${logos.map(tile).join('')}</ul>`).join('');
  return `
<section class="container page-hero">
  ${eyebrow(lang, 'workshops')}
  <h1 class="h1-inner">${rich(w.h1)}</h1>
  <p class="page-lead">${esc(w.lead)}</p>
</section>
<section class="container workshops">${cards}
  <div class="hosted">
    <div class="hosted-head">
      <h2 class="hosted-title"><span class="sr-only">${esc(w.hostedSr)}</span><span aria-hidden="true">${esc(w.hostedPrefix)}<span class="swap" data-swap><em class="hl hl--coral swap-word is-active" data-kind="school">${esc(w.hostedSchool)}</em><em class="hl hl--blue swap-word" data-kind="university">${esc(w.hostedUniversity)}</em></span></span></h2>
      <p class="hosted-note">${esc(w.hostedNote)}</p>
    </div>
    <div class="logo-track" data-slider tabindex="0" aria-label="${esc(w.hostedNote)}">
      <div class="logo-strip">${sets}</div>
    </div>
  </div>
  <div class="cta-bar">
    <p class="cta-title">${esc(w.ctaTitle)}</p>
    <a class="btn btn--coral" href="${mailto(w.mailSubject)}">${esc(w.ctaButton)}</a>
  </div>
</section>`;
}

function gptsPage(lang) {
  const t = T[lang], g = t.gpts;
  // Cards are rendered from data; entries without content (e.g. GPT #3) are simply absent.
  const cards = gpts.filter((x) => x.url && x[lang]?.title).map((x, i) => `
  <article class="gpt">
    <span class="gpt-num" style="--tint:${x.tint}" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
    <h2 class="gpt-title">${esc(x[lang].title)}</h2>
    <p class="gpt-text">${esc(x[lang].text)}</p>
    <a class="btn btn--dark btn--small" href="${esc(x.url)}"${ext(x.url)}>${esc(g.open)}${srNewTab(x.url, t)}</a>
  </article>`).join('');
  return `
<section class="container page-hero">
  ${eyebrow(lang, 'gpts')}
  <h1 class="h1-inner">${rich(g.h1)}</h1>
  <p class="page-lead">${esc(g.lead)}</p>
</section>
<section class="container gpts">${cards}
</section>`;
}

const RENDER = { home: homePage, about: aboutPage, vision: visionPage, workshops: workshopsPage, gpts: gptsPage };

// ---------- build ----------
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
for (const lang of LANGS) {
  for (const page of Object.keys(PAGES)) {
    const dir = join(DIST, pagePath(lang, page));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), layout(lang, page, RENDER[page](lang)));
  }
}
cpSync(join(SRC, 'styles.css'), join(DIST, 'styles.css'));
cpSync(join(SRC, 'main.js'), join(DIST, 'main.js'));
cpSync(ASSETS, join(DIST, 'assets'), { recursive: true, filter: (p) => !p.endsWith('.md') });
writeFileSync(join(DIST, '.nojekyll'), '');

const missing = ['portrait.jpg', ...logos.map((l) => `logos/${l.file}`)].filter((a) => !hasAsset(a));
console.log(`Built ${LANGS.length * Object.keys(PAGES).length} pages → ${DIST}`);
if (missing.length) console.log(`Missing assets (placeholders used): ${missing.join(', ')}`);

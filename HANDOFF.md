# Rocco Acocella — 3D CV site: handoff for Claude Code

## Paste this into the new Claude Code chat
> Continue building my 3D CV website from this folder. Read HANDOFF.md first, then run `node src/build.mjs`, serve `dist/`, and work through "Still to do". Use the taste-skill in `taste-skill/` (its SKILL.md) for design checks.

## What it is
A single-page CV built from `Copy_of_CV_Rocco_Acocella-2.pdf`. No frameworks, no third-party scripts.

- `src/data.mjs` — all CV content (duplicates in the PDF merged). Edit content here.
- `src/style.css` — styles. `src/app.js` — behaviour.
- `src/build.mjs` — generates `dist/index.html`, `dist/app.js`, `dist/fonts/`, `dist/_headers` (and `dist/photos/` when photos are listed). Run `node src/build.mjs` after every change.
- `src/fonts/` — self-hosted Latin subsets of Libre Franklin and Source Serif 4. Re-download with `node src/fetch-fonts.mjs`.
- `netlify.toml` — Netlify build settings (command `node src/build.mjs`, publish `dist`).
- `taste-skill/` — the Leonxlnx/taste-skill package (cloned from GitHub; `npx skills add` couldn't reach npm here).
- `.taste-skill/direction.json` — the dealt design direction: "The pinned poster", seed 1165767103, palette kept from the CV.

## Design idea
Rocco's own method (moving between divergent and convergent attention, LEGOciation) becomes the page's live 3D object: **382 bricks, one per seat across all thirteen workshops**, that scatter (Diverge) and assemble into a tower with one storey per workshop (Converge). Drag or use arrow keys to rotate. Hand-written canvas 3D renderer, no Three.js.

Sections: pinned name hero with brick field → Approach + Alchemy Cycle (A-L-C-H-E-M-Y) → Teaching → Projects and skills → Workshops (huge names on the left pass a held frame on the right that rebuilds each workshop in bricks; on phones the frame is a sticky band at the top) → Every workshop (full details) → Talks + Conferences (sticky travel map from Milan, active row lights its city) → Publications, Education, Languages, Certificates → Contact → footer.

Palette: paper #F3F5FA, navy ink #0B1B4D, cobalt field #1537C7 (CV blue shifted off violet), yellow accent #FFD43B. Type: Libre Franklin + Source Serif 4.

## Security
- Strict Content-Security-Policy meta: `script-src 'self'`, inline style allowed only by SHA-256 hash, no connections, no forms, no objects.
- Subresource Integrity (sha384) on `app.js`; build regenerates hashes.
- Email stored AES-256-GCM encrypted, decrypted in the browser only on "Show email address" (anti-scraper; key ships with the page, so it is obfuscation, not secrecy).
- No cookies, storage, analytics or trackers; `referrer: no-referrer`; `noindex`; external links `noopener noreferrer`.
- No outside requests at all: fonts are self-hosted (`font-src 'self'`).
- `dist/_headers` (Netlify / Cloudflare Pages format) sends the same CSP as a real header plus `frame-ancestors 'none'`, HSTS (2 years, preload), `nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP and `X-Robots-Tag: noindex`. GitHub Pages ignores `_headers`, so prefer Netlify or Cloudflare Pages.

## Done in session 2
- Hero brick field zoom lowered (1.05 → 0.82); the converged tower fits.
- `--s-display` is now `clamp(3.5rem,7vw,7rem)`, so "ACOCELLA" sits inside the cobalt panel at 1440 (11fr/9fr split at tablet).
- Mode buttons: no colour transition (it caused the faded mid-transition look); unpressed state is white on cobalt with a soft hover fill.
- Pinned name and held workshop frame no longer use the `margin-bottom: -100%` sticky trick, which made them stick a full screen past their sections (ACOCELLA ghosted over Teaching; the frame covered "Every workshop"). The h1 itself is now the sticky element, so it has a real box.
- Workshops redesigned so names never collide with the facts or the bricks: names left, frame and facts right; phone uses a sticky top band.
- Five type sizes (16 / 19 / 26 / 36 / display); statement shortened to three lines; Alchemy rows in one face; footer closes with the name at full width.
- Section entrances are CSS scroll-driven animations with no fill, so content is never hidden if the animation does not run (old JS reveal removed).
- Fonts self-hosted; `_headers` + `netlify.toml` added; LinkedIn and photo hooks in `data.mjs`.
- Taste gate: `lint.mjs` 0 FAIL / 0 WARN; `inspect.mjs` 1 FAIL (few-pictures) / 1 WARN (no-footage), see below. Screenshots reviewed at 1440, 768 and 390.

## Done in session 3
- Sticky nav bar after the opening screen (Teaching, Places, Workshops, Talks, Training, Contact); phones show four links.
- "Places": a Natural Earth map of every city with a talk or workshop, sized by count, with a country list that lights its city. Land data in `src/land.json` (made by `src/make-land.mjs`); the Talks map now draws land too.
- Every place reads "City, Country" (`place()` in `data.mjs`), including roles, education and conferences.
- Headcounts: Multilingualism 8 language teachers, Chromasoma 25 attendees (hero now 382 bricks, 13 storeys).
- New talk: C.R.E.A.T.E., online keynote, Layers of Complexity, October 2026.
- One page per workshop (`dist/<slug>.html`): its own 3D brick model built from the workshop's idea (one brick per seat; models in `MODELS` in `app.js`, captions in `modelNotes` in `data.mjs`), facts, abstract, previous/next. The main page's held frame shows the same models.
- Display size bounded so ACOCELLA always fits the cobalt column; inactive workshop names are a solid, readable blue-grey instead of faded.

## Done in session 4
- Talk: "Layers of Complexity" is the title, C.R.E.A.T.E. the event.
- LinkedIn link under the name in the footer (and in Contact); the cookies/map line removed from the footer.
- Full abstracts on each workshop page; Chromasoma lists Barbara Doran as co-host and 1.5 hours.
- The workshop frame is scrubbed by the scroll: the model assembles as its name nears the middle of the screen and scatters as it leaves.

## Done in session 5
- Pictures: Multilingualism (title slide; Bridget Bova as co-presenter), Chromasoma (body maps, plus a small body map linking to https://chromasoma.netlify.app), Productive Friction (title slide), and a page for the Layers of Complexity talk (title frame with the email strip trimmed).
- The Alchemy Cycle infographic sits beside the phases. The source is `src/protected/alchemy-cycle.jpg`; the build ships it only AES-256-GCM encrypted (`dist/alchemy.js`, key in the page data), decrypts it in memory and paints it to a canvas, with no image file or URL, no context menu or dragging, and blanked when printing. This deters saving; it cannot stop screenshots, and the source image is in the repo (keep the repo private).

## Done in session 6
- LEGO™: every "LEGO" in the content carries ™ (also inside LEGO™ciation). The build wraps the sign in `<span class="tm">` (not in titles or attributes) so display headings can shrink it.
- C.R.E.A.T.E. is described as a hub of Saybrook University, California (`hubs` in `data.mjs`; entries with `hub: 'create'`: the Layers of Complexity keynote and Productive Friction). Both stay "Online"; the maps mark the hub in a California inset (bottom left), drawn from `src/land-ca.json` (`node src/make-land.mjs <land-50m.json> ca`). The Places list shows it under Online; the talks map draws Milan's arc into the inset.
- The CV and the user wrote "Saybrooks"; the university's name is Saybrook University (Pasadena). Confirm.

## Done in session 7
- Projects and skills: "PSN hubs" removed. Productive Friction: its title slide removed (file deleted).
- Teaching lede now reads, as Rocco wrote it: "After 2 years in the IB programs (MYP & DP) at the Canadian School of Milan, moved last year and currently holding the position of Italian Primary Teacher."
- **Workshop figures** (under "Every workshop"): a night-blue band with one three.js canvas over three facts: +13 Workshops (13 bricks travelling a trefoil knot), 382 Participants (one brick per participant in a twisting, breathing cloud, coloured by audience), and Who took part (Teachers / Pre-service teachers / Students fading in and out in one place, each with its ring of bricks, one per five people, coming forward in turn). Counts come from the data (`who` in the page data). Source `src/figures.src.js`; bundled with three.js 0.186.1 by `npm install && node src/bundle-figures.mjs` into `src/vendor/figures.js` (committed, so `node src/build.mjs` still needs no npm). It draws only while on screen, holds still for reduced motion, and without WebGL the facts stay and the canvas folds away. The full sentence is kept for screen readers.
- **Talks filter**: All / In person / Online buttons, and "Choose the colours" (four swatches each plus a colour picker, and a reset). The choice is kept in the visitor's own browser (localStorage). Online = `city: 'online'` or a kind containing "Online".
- **Appearances** section (after Talks, also in the top bar): two YouTube videos, embedded from youtube-nocookie.com (CSP `frame-src https://www.youtube-nocookie.com`; the iframes send a referrer because YouTube's player needs one). The first video's title could not be read from this environment (YouTube is blocked here): it is captioned "Rocco Acocella on YouTube" in `appearances` in `data.mjs`; put the real title there. The second is titled "Possibility Studies Conference 2026" with the full highlights line under it (a shorter title keeps it to two lines on phones).

## Done in session 8
- Who took part now cycles four words: Teachers, Pre-service teachers, Students, Educators (attendees and participants of the open PSN events count as educators; a lavender ring).
- Brick scenes keep turning after a click or drag (they hold still only while dragged), and scattered bricks float gently. This is in `BrickField`, so it applies to the hero, the workshop frame and every workshop page.
- Publications: Acocella (2023), Creative self-beliefs (Master's dissertation), with its full abstract behind "Read the abstract".
- Contact: heading "Connect. Collaborate. Cross-pollinate."; the sentence under it is now five phrases (Book a workshop, Have a conversation, Curious?, Pose a question, Ask for information) in extruded white 3D letters that turn in, sway and turn out in one place (`startSay` in `src/figures.src.js`; letters from Libre Franklin ExtraBold via `node src/make-glyphs.mjs`). Reduced motion or no WebGL: the phrases show as text (fading without WebGL).
- "Milan, Italy" in the contact footer is now "Physically in Milan, mentally everywhere."
- The LinkedIn link there is replaced by a thin 3D unalome (spiral, loops, line, three dots) that draws itself and sways, with a light travelling up it. Clicking it opens a small bubble with a hue slider and seven colours; the choice is kept in the visitor's browser. LinkedIn is still linked in the footer.
- Item 5 of that request was left blank by the user; item 8 replaced that sentence, so nothing else changed.
- The unalome was drawn from the classic form: the reference image mentioned in the request did not arrive.

## Done in session 9
- Workshop models: navy bricks get a fine light edge on the blue field; the bridge and path models are larger (checked through a full turn on a phone); audiences keep acronyms (MYP3, IB).
- Older Safari (before 15.4, e.g. on an older Mac): `svh` heights were ignored there, so the hero, the talks map and the phone workshop models collapsed to zero height. Every `svh` now has a `vh` fallback before it, `inset:0` is spelled out, and `app.js` gives boxes with `aspect-ratio` a height from their width when the browser lacks it. Checked with a simulated old-Safari copy (svh and aspect-ratio disabled): before, the canvases were 0px tall; after, all have their size. The three.js parts need WebGL 2 (Safari 15+); without it they fold away and the text stays.

## Still to do
1. **Photos (the one remaining inspector FAIL).** The page has no raster pictures. The open collections (Openverse, Wikimedia, AIC, the Met) are blocked by this environment's network policy, and found pictures could only show Rocco's world, not him. Best fix: Rocco's own photos of his workshops (four or more). Drop them in `src/photos/`, list them in `photos` in `src/data.mjs` with a slot (`teaching`, `workshops`, `talks`, `contact`), alt text and caption, and rebuild. A short muted clip of a workshop would also clear the no-footage warning.
2. **Abstracts**: done in session 4 (`abstracts` in `data.mjs`, verbatim from Rocco's ABSTRACTS document). R(AI)sing Awareness says "ChatGPT 5.0" for Jan–Feb 2025, before GPT-5 existed; confirm.
3. **LinkedIn**: done (footer and contact).
4. **Deploy**: connect the repo to Netlify (it reads `netlify.toml`) or Cloudflare Pages (build `node src/build.mjs`, output `dist`). Then check the headers at securityheaders.com. Remove `noindex` (meta + `X-Robots-Tag`) when Rocco wants the page found.

## CV inconsistencies to confirm with Rocco
- 3rd Possibility Studies Conference (Dublin): talk listed as 2025, attendance as 2023 → used **2023**.
- 4th conference (Cambridge): talk listed 2025, attendance 2024 → used **2024**.
- Italian Summit 2026: workshop dated 8 May 2026, attendance 21 March 2026 → used **May 2026**.
- R(AI)sing Awareness: header says 1 h, text says 4.5 h over three sessions → used **4.5 h**.
- That workshop cites "ChatGPT 5.0" in Jan–Feb 2025, before GPT-5 existed → written as **ChatGPT**.
- 382 participants is the sum of headcounts (Multilingualism 8 and Chromasoma 25 added in session 3); some people may have attended more than once.
- Malta is given as "Msida, Malta" (the University of Malta campus of the Edward de Bono Institute). Confirm.

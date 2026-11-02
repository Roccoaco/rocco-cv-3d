# Rocco Acocella — 3D CV site: handoff for Claude Code

## Paste this into the new Claude Code chat
> Continue building my 3D CV website from this folder. Read HANDOFF.md first, then run `node src/build.mjs`, serve `dist/`, and work through "Still to do". Use the taste-skill in `taste-skill/` (its SKILL.md) for design checks.

## What it is
A single-page CV built from `Copy_of_CV_Rocco_Acocella-2.pdf`. No frameworks, no third-party scripts.

- `src/data.mjs` — all CV content (duplicates in the PDF merged). Edit content here.
- `src/style.css` — styles. `src/app.js` — behaviour.
- `src/build.mjs` — generates `dist/index.html` + `dist/app.js`. Run `node src/build.mjs` after every change.
- `taste-skill/` — the Leonxlnx/taste-skill package (cloned from GitHub; `npx skills add` couldn't reach npm here).
- `.taste-skill/direction.json` — the dealt design direction: "The pinned poster", seed 1165767103, palette kept from the CV.

## Design idea
Rocco's own method (moving between divergent and convergent attention, LEGOciation) becomes the page's live 3D object: **349 bricks, one per counted seat across eleven workshops**, that scatter (Diverge) and assemble into a tower with one storey per workshop (Converge). Drag or use arrow keys to rotate. Hand-written canvas 3D renderer, no Three.js.

Sections: pinned name hero with brick field → Approach + Alchemy Cycle (A-L-C-H-E-M-Y) → Teaching → Projects and skills → Workshops (huge names passing a held frame that rebuilds each workshop in bricks) → Every workshop (full details) → Talks + Conferences (sticky travel map from Milan, active row lights its city) → Publications, Education, Languages, Certificates → Contact → footer.

Palette: paper #F3F5FA, navy ink #0B1B4D, cobalt field #1537C7 (CV blue shifted off violet), yellow accent #FFD43B. Type: Libre Franklin + Source Serif 4.

## Security
- Strict Content-Security-Policy meta: `script-src 'self'`, inline style allowed only by SHA-256 hash, no connections, no forms, no objects.
- Subresource Integrity (sha384) on `app.js`; build regenerates hashes.
- Email stored AES-256-GCM encrypted, decrypted in the browser only on "Show email address" (anti-scraper; key ships with the page, so it is obfuscation, not secrecy).
- No cookies, storage, analytics or trackers; `referrer: no-referrer`; `noindex`; external links `noopener noreferrer`.
- Only outside request: Google Fonts (self-host the fonts to remove it).

## Still to do
1. Hero brick field is too zoomed: lower `zoom` in the hero `BrickField` (app.js) so the converged tower fits.
2. "ACOCELLA" slightly overhangs the cobalt panel at 1440px: reduce `--s-display` or widen the cobalt column.
3. Mode buttons look faded mid-transition in screenshots; check contrast of the unpressed state.
4. Run the taste-skill gate: `node taste-skill/skills/taste-skill/scripts/lint.mjs src` and `node taste-skill/skills/taste-skill/scripts/inspect.mjs dist/index.html`; fix FAILs, review screenshots at 1440/768/390.
5. Check the phone layout and the workshops held frame scrolling.
6. No real photographs yet (open image collections were unreachable from the previous session). Add Rocco's own photos if wanted.
7. Add the LinkedIn URL (not in the PDF).
8. Deploy (e.g. GitHub Pages / Netlify) and add real HTTP security headers there (CSP, frame-ancestors, HSTS).

## CV inconsistencies to confirm with Rocco
- 3rd Possibility Studies Conference (Dublin): talk listed as 2025, attendance as 2023 → used **2023**.
- 4th conference (Cambridge): talk listed 2025, attendance 2024 → used **2024**.
- Italian Summit 2026: workshop dated 8 May 2026, attendance 21 March 2026 → used **May 2026**.
- R(AI)sing Awareness: header says 1 h, text says 4.5 h over three sessions → used **4.5 h**.
- That workshop cites "ChatGPT 5.0" in Jan–Feb 2025, before GPT-5 existed → written as **ChatGPT**.
- 349 participants is the sum of recorded headcounts; some people may have attended more than once.

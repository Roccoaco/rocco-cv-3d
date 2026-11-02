# Rocco Acocella — personal website

A static, bilingual (EN / IT) five-page site: Home, About me, Vision, Workshops, ChatGPTs. It's plain HTML, CSS and JS, produced by a small Node build script with no dependencies.

```bash
node website/src/build.mjs          # writes website/dist/
python3 -m http.server -d website/dist 8000
```

`website/dist/` is a ready-to-deploy static folder. It works on GitHub Pages (including a sub-path), Netlify or Vercel. All links are relative.

## Structure

| Path | What |
|---|---|
| `src/content/en.json`, `src/content/it.json` | All UI copy. `[[coral\|word]]` renders a highlighted serif-italic word (gold / coral / green / blue). |
| `src/data/workshops.json` | Workshop cards (colours plus EN/IT title, text and tags). |
| `src/data/gpts.json` | Custom GPT cards. Add an entry to show a new card. Entries with no title or URL are skipped. |
| `src/data/logos.json` | "Hosted at" slider tiles (`kind`: `school` or `university`, `wide` for 320px tiles). |
| `src/data/site.json` | Email, LinkedIn, year, optional `siteUrl` for absolute hreflang and canonical URLs. |
| `src/styles.css`, `src/main.js` | Styles and behaviour (mobile menu, language memory, role rotator, logo slider). |
| `assets/` | `portrait.jpg`, `logos/*.png`, `favicon.svg`. |

Routes: English at `/`, `/about/`, `/vision/`, `/workshops/`, `/chatgpts/`; Italian under `/it/…`. Every page has `<html lang>` and `hreflang` alternates. The EN | IT toggle links to the same page in the other language. The choice is saved in `localStorage.site_lang`, and returning visitors who picked IT are redirected from the English home page.

## Still to provide
- **Design-reference copy.** The `design/*.dc.html` files were not in the handoff bundle. Copy quoted in the handoff README is used word for word. The rest is drafted from Rocco's CV: hero paragraphs and subtitles, About second paragraph, Vision card texts, workshop descriptions and tags, GPT descriptions, and all Italian strings except the Home eyebrow, Vision H1 and footer headline. Replace it with the text from each file's `T` object.
- **Assets.** Put the portrait at `assets/portrait.jpg` and the logos at `assets/logos/{isb,ist,marymount,csm,asm,hi}.png`, then rebuild. Until then the build uses a styled "RA" placeholder and text wordmark tiles, and it lists any missing files. Also produce responsive or WebP versions of the portrait. `csm.png` needs a higher-resolution source.
- **About bio.** Fill `about.bio` in both content files. While it's empty, a dashed "awaiting text" slot is shown.
- **ChatGPT #3.** Add it to `gpts.json` when ready.

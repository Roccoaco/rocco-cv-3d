// One-off: turns the letters the 3D contact phrases need into a three.js typeface (src/vendor/franklin-800.json),
// from Libre Franklin ExtraBold (SIL Open Font License, the same face the headings use).
// Usage: npm install && node src/make-glyphs.mjs   (then re-bundle: node src/bundle-figures.mjs)
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const opentype = require('opentype.js');

const PHRASES = ['Curious?'];
const chars = [...new Set(PHRASES.join(''))];
const fontFile = new URL('../node_modules/@fontsource/libre-franklin/files/libre-franklin-latin-800-normal.woff', import.meta.url);
const buf = fs.readFileSync(fontFile);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const r = (n) => Math.round(n);
const glyphs = {};
for (const ch of chars) {
  const g = font.charToGlyph(ch);
  const o = [];
  for (const c of g.path.commands) { // font units, y up
    if (c.type === 'M') o.push('m', r(c.x), r(c.y));
    else if (c.type === 'L') o.push('l', r(c.x), r(c.y));
    else if (c.type === 'Q') o.push('q', r(c.x), r(c.y), r(c.x1), r(c.y1));
    else if (c.type === 'C') o.push('b', r(c.x), r(c.y), r(c.x1), r(c.y1), r(c.x2), r(c.y2));
  }
  const bb = g.getBoundingBox();
  glyphs[ch] = { ha: r(g.advanceWidth), x_min: r(bb.x1), x_max: r(bb.x2), o: o.join(' ') };
}
const out = {
  glyphs, familyName: 'Libre Franklin', ascender: font.ascender, descender: font.descender,
  underlinePosition: -100, underlineThickness: 50,
  boundingBox: { xMin: font.tables.head.xMin, yMin: font.tables.head.yMin, xMax: font.tables.head.xMax, yMax: font.tables.head.yMax },
  resolution: font.unitsPerEm, original_font_information: { license: 'SIL Open Font License 1.1, The Libre Franklin Project Authors' },
  phrases: PHRASES
};
fs.writeFileSync(new URL('./vendor/franklin-800.json', import.meta.url), JSON.stringify(out));
console.log('glyphs', chars.length);

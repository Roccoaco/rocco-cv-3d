// One-off: downloads the Latin subsets of the two Google fonts into src/fonts/ so the page makes no outside requests.
// Run: node src/fetch-fonts.mjs   (the build then copies them to dist/fonts/ and inlines fonts.css)
import fs from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const dir = here + 'fonts/';
fs.mkdirSync(dir, { recursive: true });
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const url = 'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap';
const css = await (await fetch(url, { headers: { 'user-agent': UA } })).text();
const blocks = [...css.matchAll(/\/\* ([\w-]+) \*\/\s*(@font-face \{[^}]+\})/g)].filter((m) => m[1] === 'latin' || m[1] === 'latin-ext');
const files = new Map(); let out = '';
for (const [, subset, block] of blocks) {
  const src = block.match(/url\((https:[^)]+)\)/)[1];
  const fam = block.match(/font-family: '([^']+)'/)[1].toLowerCase().replace(/\s+/g, '-');
  const style = block.match(/font-style: (\w+)/)[1];
  const name = `${fam}-${style}-${subset}.woff2`;
  if (!files.has(src)) {
    files.set(src, name);
    fs.writeFileSync(dir + name, Buffer.from(await (await fetch(src)).arrayBuffer()));
  }
  out += `/* ${subset} */\n` + block.replace(src, 'fonts/' + files.get(src)) + '\n';
}
fs.writeFileSync(dir + 'fonts.css', out);
console.log('fonts:', [...files.values()].join(', '));

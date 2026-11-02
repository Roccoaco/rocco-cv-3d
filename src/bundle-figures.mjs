// One-off: bundles src/figures.src.js with the parts of three.js it uses into src/vendor/figures.js,
// a single classic script the build copies to dist (so it can carry SRI and runs under script-src 'self').
// Usage (once, needs npm):  npm install  &&  node src/bundle-figures.mjs
import { build } from 'esbuild';
await build({
  entryPoints: [new URL('./figures.src.js', import.meta.url).pathname],
  outfile: new URL('./vendor/figures.js', import.meta.url).pathname,
  bundle: true, minify: true, format: 'iife', target: ['es2018', 'safari13'],
  legalComments: 'eof'
});
console.log('bundled src/vendor/figures.js');

// One-off: turns Natural Earth land (world-atlas, public domain) into src/land.json, clipped to Europe and the
// Mediterranean and simplified. Usage: node src/make-land.mjs path/to/world-atlas/land-50m.json
// (get it with: npm pack world-atlas && tar xzf world-atlas-*.tgz)
import fs from 'node:fs';
const topo = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const [sx, sy] = topo.transform.scale, [tx, ty] = topo.transform.translate;
const arcs = topo.arcs.map((a) => { let x = 0, y = 0; return a.map(([dx, dy]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty]; }); });
const arc = (i) => (i < 0 ? arcs[~i].slice().reverse() : arcs[i]);
const ring = (ids) => ids.flatMap((i, k) => (k ? arc(i).slice(1) : arc(i)));
const BOX = [-32, 20, 48, 71]; // lon0, lat0, lon1, lat1
const inBox = ([x, y]) => x >= BOX[0] && x <= BOX[2] && y >= BOX[1] && y <= BOX[3];
const rings = [];
for (const g of topo.objects.land.geometries) {
  const polys = g.type === 'Polygon' ? [g.arcs] : g.arcs;
  for (const p of polys) for (const r of p) {
    const pts = ring(r);
    if (!pts.some(inBox)) continue;
    // simplify: drop points closer than 0.12 degrees to the last kept one, clamp to a slightly larger box
    const out = []; let last = null;
    for (const [x, y] of pts) {
      const q = [Math.max(BOX[0] - 4, Math.min(BOX[2] + 4, x)), Math.max(BOX[1] - 4, Math.min(BOX[3] + 4, y))];
      if (!last || Math.hypot(q[0] - last[0], q[1] - last[1]) > 0.12) { out.push(q); last = q; }
    }
    if (out.length >= 4) rings.push(out.flatMap(([x, y]) => [Math.round(x * 10) / 10, Math.round(y * 10) / 10]));
  }
}
fs.writeFileSync(new URL('./land.json', import.meta.url), JSON.stringify(rings));
console.log('rings', rings.length, 'points', rings.reduce((a, r) => a + r.length / 2, 0));

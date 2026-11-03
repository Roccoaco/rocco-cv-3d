// Three.js on the home page, bundled with three.js into src/vendor/figures.js by src/bundle-figures.mjs.
// 1. The workshop figures under "Every workshop": three small scenes in one canvas.
//   left   one brick per workshop, travelling a trefoil knot (a closed, non-linear path)
//   centre one brick per participant, a swirling cloud that twists and breathes
//   right  one ring per audience (teachers, pre-service teachers, students, educators); the ring of the
//          word on show comes forward while the others dim
// 2. The contact phrases: extruded 3D letters (Libre Franklin ExtraBold, src/make-glyphs.mjs) that turn in,
//    sway and turn out, one phrase at a time, in one place.
// 4. The galaxy, opened by the floating clicker: one brick per participant in a spiral galaxy, with every page of
//    the site as a labelled star. Drag to turn it any way (360 degrees, with inertia), zoom, adjust and edit it;
//    Converge builds a different structure each time (tower, bridge, temple, pyramid, dome, lighthouse).
// 3. The unalome by the contact details: a thin 3D line that draws itself and sways; clicking it opens a small
//    bubble to choose its colour (kept in the visitor's browser).
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Group, Color,
  BoxGeometry, CylinderGeometry, InstancedMesh, MeshStandardMaterial, MeshBasicMaterial, Object3D, Vector3, SRGBColorSpace,
  Curve, TubeGeometry, Mesh, OrthographicCamera, ExtrudeGeometry, SphereGeometry, CatmullRomCurve3, Quaternion
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Font } from 'three/addons/loaders/FontLoader.js';
import glyphData from './vendor/franklin-800.json';

const root = document.getElementById('figures');
const canvas = document.getElementById('fig-canvas');
const DATA = JSON.parse(document.getElementById('cv-data').textContent);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- the words: one place, fading in and out (all three stay visible without the script) ----
const words = Array.from(root ? root.querySelectorAll('.fig-w') : []);
let current = 0;
if (words.length && !reduce) {
  root.classList.add('is-cycling');
  words[0].classList.add('is-on');
  setInterval(() => {
    if (document.hidden) return;
    words[current].classList.remove('is-on');
    current = (current + 1) % words.length;
    words[current].classList.add('is-on');
  }, 2800);
}

// ---- the 3D part: skipped quietly without WebGL ----
function brick(studsX, studsZ) {
  const w = studsX, d = studsZ, h = 1.2;
  const parts = [new BoxGeometry(w, h, d)];
  for (let i = 0; i < studsX; i++) for (let k = 0; k < studsZ; k++) {
    const s = new CylinderGeometry(0.3, 0.3, 0.22, 16);
    s.translate(i - (studsX - 1) / 2, h / 2 + 0.11, k - (studsZ - 1) / 2);
    parts.push(s);
  }
  return mergeGeometries(parts);
}

function start() {
  let renderer;
  try { renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' }); }
  catch (e) { root.classList.add('no-3d'); return; }
  if (!renderer || !renderer.getContext()) { root.classList.add('no-3d'); return; }
  renderer.outputColorSpace = SRGBColorSpace;
  root.classList.add('has-3d');

  const scene = new Scene();
  const camera = new PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0, 30);
  scene.add(new HemisphereLight(0xffffff, 0x0b1b4d, 1.9));
  const sun = new DirectionalLight(0xffffff, 2.4); sun.position.set(-6, 10, 8); scene.add(sun);

  const mat = (hex) => new MeshStandardMaterial({ color: new Color(hex), roughness: 0.45, metalness: 0.05, transparent: true });
  const dummy = new Object3D();
  const groups = [new Group(), new Group(), new Group()];
  groups.forEach((g) => scene.add(g));

  // left: one 2x4 brick per workshop
  const nW = DATA.workshops ? DATA.workshops.length : 13;
  const knot = new InstancedMesh(brick(4, 2), mat(0xFFD43B), nW);
  groups[0].add(knot);
  const trefoil = (t, v) => v.set(Math.sin(t) + 2 * Math.sin(2 * t), Math.cos(t) - 2 * Math.cos(2 * t), -Math.sin(3 * t)).multiplyScalar(0.62);
  // the path itself, faint, so the bricks read as travelling it
  class Knot extends Curve { getPoint(u, target = new Vector3()) { return trefoil(u * Math.PI * 2, target); } }
  groups[0].add(new Mesh(new TubeGeometry(new Knot(), 240, 0.025, 6, true), new MeshBasicMaterial({ color: 0x8FA6FF, transparent: true, opacity: 0.45 })));

  // centre: one 1x1 brick per participant, coloured by who they were
  const who = DATA.who || [];
  const seats = DATA.seats || 382;
  const palette = [0xFFFFFF, 0xFFD43B, 0x8FA6FF, 0xC9B8FF];
  const cloud = new InstancedMesh(brick(1, 1), mat(0xffffff), seats);
  const base = [];
  let k = 0;
  const shares = who.map((w) => w.n).concat([Math.max(0, seats - who.reduce((a, w) => a + w.n, 0))]);
  shares.forEach((n, ci) => { for (let i = 0; i < n && k < seats; i++, k++) cloud.setColorAt(k, new Color(palette[ci] || palette[3])); });
  for (; k < seats; k++) cloud.setColorAt(k, new Color(palette[0]));
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < seats; i++) {
    const y = 1 - (i / (seats - 1)) * 2, r = Math.sqrt(1 - y * y), th = golden * i;
    const shell = 1.6 + 0.55 * Math.sin(i * 12.9898) * Math.sin(i * 78.233);
    base.push(new Vector3(Math.cos(th) * r * shell, y * shell, Math.sin(th) * r * shell));
  }
  cloud.instanceColor.needsUpdate = true;
  groups[1].add(cloud);

  // right: one ring per audience, a brick for every five people in it
  const rings = who.map((w, i) => {
    const n = Math.max(6, Math.round(w.n / 5));
    const m = new InstancedMesh(brick(1, 1), mat(palette[i]), n);
    const g = new Group(); g.add(m);
    g.rotation.set(0.5 + i * 0.9, i * 1.1, i * 0.6);
    groups[2].add(g);
    return { mesh: m, g, n, r: 1.0 + i * 0.36, glow: i === 0 ? 1 : 0 };
  });

  const v = new Vector3(), v2 = new Vector3();
  let unit = 1, pointerX = 0, pointerY = 0;

  function layout() {
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, r.width), h = Math.max(1, r.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const visH = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    unit = visH / h; // world units per CSS pixel at z = 0
    const cols = Array.from(root.querySelectorAll('.fig'));
    cols.forEach((c, i) => {
      const b = c.getBoundingClientRect();
      const cx = b.left + b.width / 2 - (r.left + w / 2);
      const size = Math.min(b.width * 0.46, h * 0.44) * unit; // radius of the scene in world units
      groups[i].position.set(cx * unit, 0, 0);
      groups[i].scale.setScalar(size / 2.6);
    });
  }

  function frame(time) {
    const t = time / 1000;
    // left: bricks travel the knot, each facing along it
    for (let i = 0; i < nW; i++) {
      const u = (i / nW) * Math.PI * 2 + t * 0.18;
      trefoil(u, v); trefoil(u + 0.05, v2);
      dummy.position.copy(v); dummy.lookAt(v2); dummy.scale.setScalar(0.15);
      dummy.updateMatrix(); knot.setMatrixAt(i, dummy.matrix);
    }
    knot.instanceMatrix.needsUpdate = true;
    groups[0].rotation.set(0.35 + pointerY * 0.2, t * 0.12 + pointerX * 0.35, 0);

    // centre: the cloud twists by height and breathes unevenly
    for (let i = 0; i < seats; i++) {
      const b = base[i];
      const twist = t * 0.22 + b.y * 0.55 * Math.sin(t * 0.37);
      const breathe = 1 + 0.1 * Math.sin(b.y * 2.7 + t * 1.1) + 0.06 * Math.sin(b.x * 3.1 - t * 0.8);
      const c = Math.cos(twist), s = Math.sin(twist);
      dummy.position.set((b.x * c - b.z * s) * breathe, b.y * breathe, (b.x * s + b.z * c) * breathe);
      dummy.rotation.set(b.x * 2 + t * 0.4, b.y * 3, b.z * 2);
      dummy.scale.setScalar(0.09);
      dummy.updateMatrix(); cloud.setMatrixAt(i, dummy.matrix);
    }
    cloud.instanceMatrix.needsUpdate = true;
    groups[1].rotation.set(pointerY * 0.2, pointerX * 0.35, 0);

    // right: the rings turn at their own speeds; the one on show grows and the others dim
    rings.forEach((ring, ci) => {
      const target = reduce || ci === current ? 1 : 0;
      ring.glow += (target - ring.glow) * 0.06;
      ring.mesh.material.opacity = 0.28 + 0.72 * ring.glow;
      const grow = 1 + 0.12 * ring.glow;
      for (let i = 0; i < ring.n; i++) {
        const a = (i / ring.n) * Math.PI * 2 + t * (0.25 + ci * 0.11) * (ci % 2 ? -1 : 1);
        const wob = 1 + 0.08 * Math.sin(a * 3 + t);
        dummy.position.set(Math.cos(a) * ring.r * grow * wob, 0, Math.sin(a) * ring.r * grow * wob);
        dummy.rotation.set(0, -a, 0); dummy.scale.setScalar(0.13);
        dummy.updateMatrix(); ring.mesh.setMatrixAt(i, dummy.matrix);
      }
      ring.mesh.instanceMatrix.needsUpdate = true;
      ring.g.rotation.z += 0.0015 * (ci + 1);
    });
    groups[2].rotation.set(pointerY * 0.2, t * 0.08 + pointerX * 0.35, 0);

    renderer.render(scene, camera);
  }

  layout();
  window.addEventListener('resize', () => { layout(); if (!running) frame(performance.now()); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  root.addEventListener('pointermove', (e) => {
    const r = root.getBoundingClientRect();
    pointerX = (e.clientX - r.left) / r.width - 0.5; pointerY = (e.clientY - r.top) / r.height - 0.5;
  });

  // draw only while the band is on screen, and once (still) for reduced motion
  let running = false, raf = 0;
  const loop = (time) => { frame(time); raf = requestAnimationFrame(loop); };
  if (reduce) { frame(4000); return; }
  frame(0);
  new IntersectionObserver((en) => {
    const on = en[0].isIntersecting;
    if (on && !running) { running = true; raf = requestAnimationFrame(loop); }
    else if (!on && running) { running = false; cancelAnimationFrame(raf); }
  }).observe(root);
}

if (root && canvas) { try { start(); } catch (e) { root.classList.add('no-3d'); } }

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const easeOutBack = (x) => { const c = 1.6; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
const smooth = (x) => x * x * (3 - 2 * x);
function makeRenderer(cv) {
  try {
    const r = new WebGLRenderer({ canvas: cv, antialias: true, alpha: true, powerPreference: 'low-power' });
    if (!r.getContext()) return null;
    r.outputColorSpace = SRGBColorSpace;
    return r;
  } catch (e) { return null; }
}
function whileVisible(el, frame) {
  let running = false, raf = 0;
  const loop = (time) => { frame(time); raf = requestAnimationFrame(loop); };
  new IntersectionObserver((en) => {
    const on = en[0].isIntersecting;
    if (on && !running) { running = true; raf = requestAnimationFrame(loop); }
    else if (!on && running) { running = false; cancelAnimationFrame(raf); }
  }).observe(el);
}

// ---------- 2. the contact phrases ----------
function startSay() {
  const box = document.getElementById('say'), cv = document.getElementById('say-canvas');
  if (!box || !cv || reduce) return; // reduced motion: the phrases stay as a plain list
  const htmlWords = Array.from(box.querySelectorAll('.say-w'));
  const renderer = makeRenderer(cv);
  if (!renderer) { // no WebGL: the same phrases fade in HTML
    let cur = 0; box.classList.add('is-cycling'); htmlWords[0].classList.add('is-on');
    setInterval(() => { htmlWords[cur].classList.remove('is-on'); cur = (cur + 1) % htmlWords.length; htmlWords[cur].classList.add('is-on'); }, 3400);
    return;
  }
  box.classList.add('has-3d');
  const font = new Font(glyphData), res = glyphData.resolution;
  const scene = new Scene();
  const cam = new OrthographicCamera(0, 1, 1, -1, -100, 100);
  cam.position.z = 10;
  scene.add(new HemisphereLight(0xffffff, 0x3e4a73, 1.5));
  const key = new DirectionalLight(0xffffff, 1.8); key.position.set(-1, 1.6, 2.2); scene.add(key);
  const phrases = glyphData.phrases.map((text) => {
    const mat = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.42, roughness: 0.55, transparent: true, opacity: 0 });
    const g = new Group(); g.visible = false; scene.add(g);
    let pen = 0; const letters = [];
    for (const ch of text) {
      const gl = glyphData.glyphs[ch];
      if (ch !== ' ') {
        const geo = new ExtrudeGeometry(font.generateShapes(ch, 1), { depth: 0.16, curveSegments: 5, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.014, bevelSegments: 2 });
        geo.computeBoundingBox();
        const b = geo.boundingBox, cx = (b.min.x + b.max.x) / 2, cy = (b.min.y + b.max.y) / 2;
        geo.translate(-cx, -cy, -0.08);
        const m = new Mesh(geo, mat);
        m.userData = { x: pen + cx, y: cy, i: letters.length };
        m.position.set(m.userData.x, m.userData.y, 0);
        g.add(m); letters.push(m);
      }
      pen += (gl ? gl.ha : res * 0.3) / res;
    }
    return { g, mat, letters, width: pen };
  });
  const widest = Math.max(...phrases.map((p) => p.width));
  let W = 1, H = 1;
  function layout() {
    const r = cv.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setSize(W, H, false);
    cam.left = 0; cam.right = W; cam.top = H / 2; cam.bottom = -H / 2; cam.updateProjectionMatrix();
    const size = Math.min((W - 4) / widest, H * 0.62, 72);
    phrases.forEach((p) => { p.g.scale.set(size, size, size); p.g.position.set(2, -size * 0.36, 0); });
  }
  layout(); window.addEventListener('resize', layout);
  const IN = 1.1, HOLD = 2.6, OUT = 0.8, CYCLE = IN + HOLD + OUT;
  let start = null;
  whileVisible(box, (time) => {
    const t = time / 1000; if (start === null) start = t;
    const el = t - start, idx = Math.floor(el / CYCLE) % phrases.length, local = el % CYCLE;
    phrases.forEach((p, pi) => { p.g.visible = pi === idx; });
    const p = phrases[idx];
    p.mat.opacity = local < IN ? clamp01(local / 0.5) : local > IN + HOLD ? 1 - clamp01((local - IN - HOLD) / OUT) : 1;
    p.letters.forEach((m) => {
      const i = m.userData.i, d = i * 0.04;
      const kin = clamp01((local - d) / 0.75), kout = clamp01((local - IN - HOLD - d * 0.5) / 0.6);
      const e = easeOutBack(kin), eo = smooth(kout);
      m.rotation.x = (1 - e) * -1.5 + eo * 1.3 + 0.12 * Math.sin(t * 1.3 + i * 0.6);
      m.rotation.y = 0.22 * Math.sin(t * 1.1 + i * 0.45);
      m.position.y = m.userData.y + 0.05 * Math.sin(t * 1.9 + i * 0.7) + eo * 0.25;
      m.position.z = (1 - e) * -0.6;
    });
    renderer.render(scene, cam);
  });
}
try { startSay(); } catch (e) { /* the phrases stay as a list */ }

// ---------- 3. the unalome ----------
function unalomePoints() {
  const pts = [];
  // the spiral at the base, from the centre outwards
  const turns = 3.5 * Math.PI;
  for (let k = 0; k <= 70; k++) { const th = (k / 70) * turns, r = 0.06 + 0.9 * (th / turns); pts.push(new Vector3(r * Math.sin(th), r * Math.cos(th), 0)); }
  // rising loops that tighten, then the straight line
  const N = 2.25, y0 = 0;
  for (let k = 1; k <= 140; k++) {
    const sN = (k / 140) * N, ph = 2 * Math.PI * sN, f = 1 - 0.2 * sN;
    pts.push(new Vector3(-0.96 * f * Math.cos(ph), y0 + 0.36 * ph + 0.95 * f * Math.sin(ph), 0));
  }
  const last = pts[pts.length - 1];
  for (let k = 1; k <= 8; k++) pts.push(new Vector3(last.x * (1 - k / 8), last.y + k * 0.32, 0));
  return pts;
}
function startUnalome() {
  const btn = document.getElementById('unalome'), cv = document.getElementById('unalome-canvas');
  const bubble = document.getElementById('hue-bubble'), wrap = btn && btn.parentNode;
  if (!btn || !cv || !bubble) return;
  const renderer = makeRenderer(cv);
  if (!renderer) { wrap.classList.add('no-3d'); return; }
  wrap.classList.add('has-3d');
  const scene = new Scene(), cam = new PerspectiveCamera(24, 1, 0.1, 100);
  scene.add(new HemisphereLight(0xffffff, 0x0b1b4d, 1.4));
  const key = new DirectionalLight(0xffffff, 1.4); key.position.set(2, 3, 4); scene.add(key);
  const curve = new CatmullRomCurve3(unalomePoints());
  const mat = new MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.55, roughness: 0.4 });
  const tube = new TubeGeometry(curve, 600, 0.075, 10, false);
  const line = new Mesh(tube, mat);
  const dotMat = mat;
  const g = new Group(); g.add(line);
  const top = curve.getPoint(1);
  [0.7, 1.35, 1.9].forEach((dy, i) => { const d = new Mesh(new SphereGeometry(0.16 - i * 0.03, 20, 14), dotMat); d.position.set(top.x, top.y + dy, 0); g.add(d); });
  const spark = new Mesh(new SphereGeometry(0.14, 16, 12), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }));
  g.add(spark);
  scene.add(g);
  const bbTop = top.y + 2.1, bbBottom = -1, midY = (bbTop + bbBottom) / 2;
  g.position.y = -midY;
  function layout() {
    const r = cv.getBoundingClientRect(), w = Math.max(1, r.width), h = Math.max(1, r.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setSize(w, h, false);
    cam.aspect = w / h;
    const span = (bbTop - bbBottom) * 1.06;
    cam.position.set(0, 0, span / 2 / Math.tan((cam.fov * Math.PI) / 360));
    cam.updateProjectionMatrix();
  }
  layout(); window.addEventListener('resize', layout);
  const total = tube.index.count;

  // colour: white, or a hue chosen in the bubble
  const KEY = 'unalome-hue';
  let hue = 'w';
  try { const v = localStorage.getItem(KEY); if (v === 'w' || /^\d{1,3}$/.test(v || '')) hue = v; } catch (e) {}
  const range = document.getElementById('hue-range'), dots = Array.from(bubble.querySelectorAll('.hue-dot'));
  function paint() {
    const c = hue === 'w' ? new Color(0xffffff) : new Color().setHSL(+hue / 360, 0.85, 0.72);
    mat.color.copy(c); mat.emissive.copy(c);
    dots.forEach((d) => d.setAttribute('aria-pressed', String(d.getAttribute('data-hue') === hue)));
    if (hue !== 'w') range.value = hue;
    if (reduce) draw(performance.now());
  }
  function choose(h) { hue = String(h); paint(); try { localStorage.setItem(KEY, hue); } catch (e) {} }
  dots.forEach((d) => d.addEventListener('click', () => choose(d.getAttribute('data-hue'))));
  range.addEventListener('input', () => choose(range.value));

  // the bubble: opens from the unalome, closes on a second click, Escape or a click elsewhere
  function open(on) {
    btn.setAttribute('aria-expanded', String(on));
    if (on) { bubble.hidden = false; requestAnimationFrame(() => bubble.classList.add('is-open')); (dots.find((d) => d.getAttribute('aria-pressed') === 'true') || range).focus(); }
    else { bubble.classList.remove('is-open'); setTimeout(() => { if (btn.getAttribute('aria-expanded') === 'false') bubble.hidden = true; }, 260); }
  }
  btn.addEventListener('click', () => open(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { open(false); btn.focus(); } });
  document.addEventListener('pointerdown', (e) => { if (btn.getAttribute('aria-expanded') === 'true' && !wrap.contains(e.target)) open(false); });

  let born = null;
  function draw(time) {
    const t = time / 1000; if (born === null) born = t;
    const grow = reduce ? 1 : smooth(clamp01((t - born) / 2.6));
    tube.setDrawRange(0, Math.floor(total * grow / 3) * 3);
    g.children.forEach((c) => { if (c !== line && c !== spark) c.visible = grow > 0.98; });
    const u = reduce ? 0.5 : smooth((t * 0.16) % 1);
    spark.visible = !reduce && grow > 0.98;
    spark.position.copy(curve.getPointAt(u));
    g.rotation.y = reduce ? 0.35 : 0.55 * Math.sin(t * 0.45);
    g.rotation.x = reduce ? 0 : 0.08 * Math.sin(t * 0.7);
    renderer.render(scene, cam);
  }
  paint();
  if (reduce) draw(0); else whileVisible(wrap, draw);
}
try { startUnalome(); } catch (e) { const w = document.querySelector('.unalome-wrap'); if (w) w.classList.add('no-3d'); }


// ---------- 4. the galaxy ----------
// Structures in brick cells (x, layer, z); each is resampled to the number of bricks.
const ring = (r, fn) => { const out = []; const n = Math.max(8, Math.round(2 * Math.PI * r)); for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; out.push(fn(Math.round(Math.cos(a) * r * 10) / 10, Math.round(Math.sin(a) * r * 10) / 10)); } return out; };
const square = (side, y) => { const out = [], h = (side - 1) / 2; for (let x = 0; x < side; x++) for (let z = 0; z < side; z++) if (x === 0 || z === 0 || x === side - 1 || z === side - 1) out.push([x - h, y, z - h]); return out; };
const STRUCTURES = [
  { name: 'a tower', build: () => { let o = []; for (let y = 0; y < 16; y++) o = o.concat(square(5, y)); for (let y = 16; y < 20; y++) o = o.concat(square(7, y)); for (let y = 20; y < 26; y++) o.push([0, y, 0]); return o; },
    col: (x, y) => (y >= 16 ? 0xFFD43B : y % 4 === 0 ? 0x9DB1F5 : 0xFFFFFF) },
  { name: 'a bridge', build: () => { const o = []; for (let x = -15; x <= 15; x++) { for (let z = -1; z <= 1; z++) o.push([x, 7, z]); const ay = Math.round(6.5 * (1 - (x / 15) * (x / 15))); o.push([x, ay, -1.5], [x, ay, 1.5]); if (ay > 0) o.push([x, ay - 1, -1.5], [x, ay - 1, 1.5]); if (x % 2 === 0) o.push([x, 8, -1.5], [x, 8, 1.5]); } [-15, -8, 8, 15].forEach((x) => { for (let y = 0; y < 7; y++) for (let z = -1; z <= 1; z++) o.push([x, y, z]); }); return o; },
    col: (x, y) => (y >= 7 ? 0xFFFFFF : y > 3 ? 0x9DB1F5 : 0xFFD43B) },
  { name: 'a temple', build: () => { let o = []; for (let y = 0; y < 3; y++) { const w = 17 - y * 2, d = 11 - y * 2; for (let x = 0; x < w; x++) for (let z = 0; z < d; z++) if (y === 2 || x === 0 || z === 0 || x === w - 1 || z === d - 1) o.push([x - (w - 1) / 2, y, z - (d - 1) / 2]); } for (let c = -5; c <= 5; c += 2) for (const z of [-3, 3]) for (let y = 3; y < 10; y++) o.push([c, y, z]); for (let x = -6; x <= 6; x++) for (const z of [-3.5, 3.5]) o.push([x, 10, z]); for (let r = 0; r < 6; r++) for (let x = -6 + r; x <= 6 - r; x++) for (const z of [-3.5, 3.5]) o.push([x, 11 + r, z]); return o; },
    col: (x, y) => (y < 3 ? 0x9DB1F5 : y >= 10 ? 0xFFD43B : 0xFFFFFF) },
  { name: 'a pyramid', build: () => { let o = []; for (let y = 0; y < 9; y++) { const side = 17 - 2 * y; o = o.concat(side > 1 ? square(side, y) : [[0, y, 0]]); } return o; },
    col: (x, y) => (y > 6 ? 0xFFFFFF : y % 2 ? 0xFFD43B : 0xE0A800) },
  { name: 'a dome', build: () => { let o = []; for (let y = 0; y < 4; y++) o = o.concat(ring(5, (x, z) => [x, y, z])); for (let y = 0; y < 6; y++) { const r = Math.sqrt(Math.max(0, 25 - (y * 1.2) * (y * 1.2))); o = o.concat(r > 0.6 ? ring(r, (x, z) => [x, 4 + y, z]) : [[0, 4 + y, 0]]); } for (let y = 10; y < 13; y++) o = o.concat(ring(0.8, (x, z) => [x, y, z])); return o; },
    col: (x, y) => (y < 4 ? 0xFFFFFF : y >= 10 ? 0xFFD43B : 0x9DB1F5) },
  { name: 'a lighthouse', build: () => { let o = []; for (let y = 0; y < 15; y++) o = o.concat(ring(3.2 - y * 0.08, (x, z) => [x, y, z])); o = o.concat(ring(3.6, (x, z) => [x, 15, z])); for (let y = 16; y < 19; y++) o = o.concat(ring(1.4, (x, z) => [x, y, z])); for (let y = 19; y < 22; y++) o.push([0, y, 0]); return o; },
    col: (x, y) => (y >= 15 ? 0xFFD43B : Math.floor(y / 3) % 2 ? 0xE5484D : 0xFFFFFF) }
];
function resample(list, n) {
  const out = [];
  if (list.length >= n) for (let i = 0; i < n; i++) out.push(list[Math.floor((i * list.length) / n)]);
  else for (let i = 0; i < n; i++) out.push(list[i % list.length]);
  return out;
}

function startGalaxy() {
  const clicker = document.getElementById('gx-clicker'), box = document.getElementById('galaxy'), cv = document.getElementById('gx-canvas');
  if (!clicker || !box || !cv) return;
  let gl2 = false;
  try { gl2 = !!document.createElement('canvas').getContext('webgl2'); } catch (e) {}
  if (!gl2) return; // the clicker stays hidden: every page is still in the top bar
  clicker.hidden = false;

  const stateEl = document.getElementById('gx-state'), convBtn = document.getElementById('gx-converge');
  const nodeBtns = Array.from(box.querySelectorAll('.gx-node'));
  const KEY = 'galaxy-settings';
  const DEF = { spin: 30, spread: 100, size: 100, hue: 'mix', show: { section: true, workshop: true, talk: true } };
  let set = JSON.parse(JSON.stringify(DEF));
  try { const v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v && typeof v === 'object') set = Object.assign(set, v, { show: Object.assign({}, DEF.show, v.show || {}) }); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(set)); } catch (e) {} };

  let renderer = null, scene, cam, group, bricks, stars, N = (DATA.seats || 382), M = nodeBtns.length;
  let galaxyPos = [], galaxyRot = [], nodePos = [], nodeRing = [], target = null, targetCol = null, structIdx = -1;
  let fit = 1, k = 0, kFrom = 0, kTo = 0, kStart = 0, zoom = 26, vx = 0, vy = 0, raf = 0, open = false, last = 0;
  const qFrom = new Quaternion(), qTo = new Quaternion(), q2 = new Quaternion(); let upright = 0;
  const dummy = new Object3D(), q = new Quaternion(), AX = new Vector3(0, 1, 0), AY = new Vector3(1, 0, 0), v3 = new Vector3();
  const easeIO = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const PAL = [0xFFFFFF, 0xFFD43B, 0x9DB1F5, 0xC9D4FF];
  let rnd = 7; const R = () => ((rnd = (rnd * 16807) % 2147483647) / 2147483647);

  function build() {
    renderer = makeRenderer(cv);
    if (!renderer) { clicker.hidden = true; return false; }
    scene = new Scene();
    cam = new PerspectiveCamera(45, 1, 0.1, 200);
    scene.add(new HemisphereLight(0xffffff, 0x0b1b4d, 1.6));
    const key = new DirectionalLight(0xffffff, 2); key.position.set(-5, 9, 7); scene.add(key);
    group = new Group(); scene.add(group);
    group.quaternion.setFromAxisAngle(AY, 0.5);
    bricks = new InstancedMesh(brick(1, 1), new MeshStandardMaterial({ roughness: 0.5, metalness: 0.05 }), N);
    stars = new InstancedMesh(brick(2, 1), new MeshStandardMaterial({ roughness: 0.4, emissive: 0xffffff, emissiveIntensity: 0.25 }), M);
    group.add(bricks); group.add(stars);
    // the galaxy: three arms on a logarithmic spiral, denser towards the core
    for (let i = 0; i < N; i++) {
      const arm = i % 3, t = Math.pow(R(), 0.65), r = 0.6 + t * 9;
      const a = arm * (Math.PI * 2 / 3) + t * 3.6 + (R() - 0.5) * 0.5;
      const y = (R() - 0.5) * (1.6 - t) * 1.1;
      galaxyPos.push(new Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      galaxyRot.push([R() * 6.3, R() * 6.3, R() * 6.3]);
    }
    nodeBtns.forEach((b, i) => {
      const kind = b.getAttribute('data-kind'), arm = i % 3, t = 0.25 + (i / M) * 0.7, r = 1.5 + t * 8.5, a = arm * (Math.PI * 2 / 3) + t * 3.6 + 0.25;
      nodePos.push(new Vector3(Math.cos(a) * r, kind === 'section' ? 0.9 : 0.4, Math.sin(a) * r));
      const ra = (i / M) * Math.PI * 2;
      nodeRing.push(new Vector3(Math.cos(ra) * 11.5, (i % 3 - 1) * 1.3 - 0.5, Math.sin(ra) * 11.5));
      stars.setColorAt(i, new Color(kind === 'section' ? 0xFFFFFF : kind === 'workshop' ? 0xFFD43B : 0x9DB1F5));
    });
    paintBricks();
    // dragging: free 360-degree turning about the screen axes, with inertia
    let drag = null; const pts = new Map(); let pinch = 0;
    cv.addEventListener('pointerdown', (e) => { cv.setPointerCapture(e.pointerId); pts.set(e.pointerId, [e.clientX, e.clientY]); drag = [e.clientX, e.clientY]; vx = vy = 0; });
    cv.addEventListener('pointermove', (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pts.size === 2) { const [p1, p2] = Array.from(pts.values()), d = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]); if (pinch) setZoom(zoom * pinch / d); pinch = d; return; }
      if (!drag) return;
      vx = (e.clientX - drag[0]) * 0.006; vy = (e.clientY - drag[1]) * 0.006; drag = [e.clientX, e.clientY];
      turn(vx, vy);
    });
    const up = (e) => { pts.delete(e.pointerId); if (pts.size < 2) pinch = 0; if (!pts.size) drag = null; };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', (e) => { e.preventDefault(); setZoom(zoom * (1 + Math.sign(e.deltaY) * 0.08)); }, { passive: false });
    window.addEventListener('resize', () => { if (open) layout(); });
    return true;
  }
  let zoomed = false;
  function setZoom(z) { zoomed = true; zoom = Math.max(8, Math.min(80, z)); }
  function turn(dx, dy) {
    q.setFromAxisAngle(AX, dx); group.quaternion.premultiply(q);
    q.setFromAxisAngle(AY, dy); group.quaternion.premultiply(q);
  }
  function paintBricks() {
    const hue = set.hue;
    for (let i = 0; i < N; i++) {
      let c;
      if (target && targetCol && k > 0.5) c = new Color(targetCol[i]);
      else c = new Color(PAL[(i * 7) % PAL.length]);
      if (hue !== 'mix') { const hsl = {}; c.getHSL(hsl); c.setHSL(+hue / 360, 0.75, Math.max(0.45, Math.min(0.8, hsl.l))); }
      bricks.setColorAt(i, c);
    }
    bricks.instanceColor.needsUpdate = true;
  }
  function layout() {
    const r = cv.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setSize(r.width, r.height, false);
    cam.aspect = r.width / Math.max(1, r.height); cam.updateProjectionMatrix();
    if (!zoomed) zoom = cam.aspect < 1 ? Math.min(70, 26 * 0.8 / cam.aspect) : 26; // narrow screens start further out
  }
  function converge() {
    const goingIn = kTo === 0;
    if (goingIn) {
      structIdx = (structIdx + 1) % STRUCTURES.length;
      const S = STRUCTURES[structIdx], cells = resample(S.build(), N);
      let top = 0, ext = 0; cells.forEach((c) => { top = Math.max(top, c[1]); ext = Math.max(ext, Math.abs(c[0]) * 2, Math.abs(c[2]) * 2, c[1] * 1.2); });
      fit = Math.min(1, 12 / ext); // wide structures (the bridge) are scaled down to fit the view
      target = cells.map((c) => new Vector3(c[0] * 1.02 * fit, (c[1] * 1.2 - top * 0.6) * fit, c[2] * 1.02 * fit));
      targetCol = cells.map((c) => S.col(c[0], c[1], c[2]));
    }
    // a structure stands up: turn the galaxy upright (keeping its heading), slightly from above
    if (goingIn) {
      const f = v3.set(0, 0, 1).applyQuaternion(group.quaternion), yaw = Math.atan2(f.x, f.z);
      qFrom.copy(group.quaternion); qTo.setFromAxisAngle(AX, yaw); q2.setFromAxisAngle(AY, 0.32); qTo.premultiply(q2);
      upright = reduce ? 0 : performance.now();
      if (reduce) group.quaternion.copy(qTo);
    }
    kFrom = k; kTo = goingIn ? 1 : 0; kStart = performance.now();
    convBtn.setAttribute('aria-pressed', String(goingIn));
    convBtn.textContent = goingIn ? 'Diverge' : 'Converge';
    stateEl.textContent = goingIn ? `Converged: ${N} bricks build ${STRUCTURES[structIdx].name}. Press Diverge to scatter them, then Converge again for the next one.` : 'Diverged: the galaxy again. Converge builds the next structure.';
    if (reduce) k = kTo;
  }

  function frame(time) {
    const dt = Math.min(0.05, (time - (last || time)) / 1000); last = time;
    if (kStart) {
      const p = clamp01((time - kStart) / (reduce ? 1 : 2400));
      k = kFrom + (kTo - kFrom) * p;
      if (p >= 1) kStart = 0;
      if ((kFrom < 0.5) !== (k < 0.5) || p >= 1) paintBricks();
    }
    if (upright) { const u = clamp01((time - upright) / 1100); group.quaternion.slerpQuaternions(qFrom, qTo, easeIO(u)); if (u >= 1) upright = 0; }
    // inertia, then the slow spin (about the vertical while a structure stands)
    if (!reduce && !upright) { vx *= 0.93; vy *= 0.93; if (Math.abs(vx) + Math.abs(vy) > 0.0005) turn(vx, vy); }
    if (!reduce && set.spin && !upright) { q.setFromAxisAngle(v3.set(0, 1, 0), dt * set.spin * 0.006); if (k > 0.5) group.quaternion.premultiply(q); else group.quaternion.multiply(q); }
    const spread = set.spread / 100, size = 0.16 * set.size / 100;
    for (let i = 0; i < N; i++) {
      const g = galaxyPos[i];
      // each brick leaves at its own moment (lower ones first) and travels a curved path
      let e = 0;
      if (target) { const t = target[i], delay = clamp01((t.y / fit + 9) / 22) * 0.45; e = easeIO(clamp01((k - delay * (kTo ? 1 : 0.5)) / (1 - delay * 0.6))); }
      const sx = g.x * spread, sy = g.y * spread, sz = g.z * spread;
      if (target && e > 0) {
        const t = target[i], lift = Math.sin(e * Math.PI) * 3;
        dummy.position.set(sx + (t.x - sx) * e, sy + (t.y - sy) * e + lift, sz + (t.z - sz) * e);
        const gr = galaxyRot[i];
        dummy.rotation.set(gr[0] * (1 - e), gr[1] * (1 - e), gr[2] * (1 - e));
        dummy.scale.setScalar(size * (1 - e) + 0.97 * fit * e);
      } else {
        const wob = Math.sin(time * 0.0007 + i) * 0.08;
        dummy.position.set(sx, sy + wob, sz);
        const gr = galaxyRot[i]; dummy.rotation.set(gr[0] + time * 0.0003, gr[1], gr[2]);
        dummy.scale.setScalar(size);
      }
      dummy.updateMatrix(); bricks.setMatrixAt(i, dummy.matrix);
    }
    bricks.instanceMatrix.needsUpdate = true;
    // the stars: on the arms in the galaxy, on a ring around the structure when it converges
    const ke = easeIO(clamp01(k));
    const w = cv.clientWidth, h = cv.clientHeight;
    cam.position.set(0, 0, zoom); cam.lookAt(0, 0, 0);
    group.updateMatrixWorld();
    nodeBtns.forEach((b, i) => {
      const on = set.show[b.getAttribute('data-kind')];
      const p = v3.copy(nodePos[i]).multiplyScalar(spread).lerp(nodeRing[i], ke);
      dummy.position.copy(p); dummy.rotation.set(0, time * 0.0006 + i, 0); dummy.scale.setScalar(on ? 0.34 : 0.0001);
      dummy.updateMatrix(); stars.setMatrixAt(i, dummy.matrix);
      if (!on) { b.hidden = true; return; }
      b.hidden = false;
      p.applyMatrix4(group.matrixWorld).project(cam);
      const x = (p.x * 0.5 + 0.5) * w, y = (-p.y * 0.5 + 0.5) * h, behind = p.z > 1;
      b.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px) translate(-50%, -150%)`;
      b.classList.toggle('is-far', behind || x < -40 || x > w + 40 || y < -40 || y > h + 40);
    });
    stars.instanceMatrix.needsUpdate = true;
    renderer.render(scene, cam);
    if (open) raf = requestAnimationFrame(frame);
  }

  // the panel: adjust (spin, spread, brick size), edit (which stars, which colour)
  const spinEl = document.getElementById('gx-spin'), spreadEl = document.getElementById('gx-spread'), sizeEl = document.getElementById('gx-size');
  const showEls = Array.from(box.querySelectorAll('[data-show]')), hueEls = Array.from(box.querySelectorAll('.gx-hue'));
  function syncPanel() {
    spinEl.value = set.spin; spreadEl.value = set.spread; sizeEl.value = set.size;
    showEls.forEach((c) => { c.checked = !!set.show[c.getAttribute('data-show')]; });
    hueEls.forEach((b) => b.setAttribute('aria-pressed', String(b.getAttribute('data-hue') === set.hue)));
  }
  syncPanel();
  spinEl.addEventListener('input', () => { set.spin = +spinEl.value; save(); });
  spreadEl.addEventListener('input', () => { set.spread = +spreadEl.value; save(); });
  sizeEl.addEventListener('input', () => { set.size = +sizeEl.value; save(); });
  showEls.forEach((c) => c.addEventListener('change', () => { set.show[c.getAttribute('data-show')] = c.checked; save(); }));
  hueEls.forEach((b) => b.addEventListener('click', () => { set.hue = b.getAttribute('data-hue'); syncPanel(); save(); if (renderer) paintBricks(); }));
  document.getElementById('gx-reset').addEventListener('click', () => { set = JSON.parse(JSON.stringify(DEF)); syncPanel(); save(); if (renderer) paintBricks(); });
  convBtn.addEventListener('click', () => { if (renderer) converge(); });

  // opening and closing
  let lastFocus = null;
  function show() {
    if (!renderer && !build()) return;
    lastFocus = document.activeElement;
    box.hidden = false; document.documentElement.classList.add('tl-locked');
    layout(); open = true; last = 0;
    requestAnimationFrame(() => box.classList.add('is-open'));
    raf = requestAnimationFrame(frame);
    document.getElementById('gx-close').focus();
  }
  function hide(then) {
    open = false; cancelAnimationFrame(raf);
    box.classList.remove('is-open'); document.documentElement.classList.remove('tl-locked');
    setTimeout(() => { box.hidden = true; if (then) then(); else if (lastFocus) lastFocus.focus(); }, reduce ? 0 : 250);
  }
  clicker.addEventListener('click', show);
  document.getElementById('gx-close').addEventListener('click', () => hide());
  box.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); hide(); return; }
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowLeft') turn(-0.12, 0); else if (e.key === 'ArrowRight') turn(0.12, 0);
    else if (e.key === 'ArrowUp') turn(0, -0.12); else if (e.key === 'ArrowDown') turn(0, 0.12);
    else if (e.key === '+' || e.key === '=') setZoom(zoom * 0.9); else if (e.key === '-') setZoom(zoom * 1.1);
    else return;
    e.preventDefault();
  });
  nodeBtns.forEach((b) => b.addEventListener('click', () => {
    const href = b.getAttribute('data-href');
    hide(() => {
      if (href.charAt(0) === '#') { const a = document.createElement('a'); a.href = href; document.body.appendChild(a); a.click(); a.remove(); }
      else location.href = href;
    });
  }));
  // the clicker steps aside while the contact section (with its unalome) is on screen
  // and moves to the left corner while the big ACOCELLA of the first screen is in view
  const away = new Set();
  if ('IntersectionObserver' in window) {
    const foot = document.querySelector('.contact-foot'), name = document.querySelector('.name .c2');
    const io = new IntersectionObserver((en) => {
      en.forEach((x) => { if (x.isIntersecting) away.add(x.target); else away.delete(x.target); });
      clicker.classList.toggle('is-away', away.has(foot)); // hides at the contact section
      clicker.classList.toggle('is-left', away.has(name)); // moves to the left beside the big name
    });
    [foot, name].forEach((el) => { if (el) io.observe(el); });
  }
}
try { startGalaxy(); } catch (e) { const c = document.getElementById('gx-clicker'); if (c) c.hidden = true; }

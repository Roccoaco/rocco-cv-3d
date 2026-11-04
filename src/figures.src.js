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
//    It sits in a quantum universe: a deep starfield, nebulae, a glowing spiral disc, a bright core with light
//    streaks and magnetic field loops, wavy quantum orbits and a planet lit by the core. The observer matters, as in
//    the measurement problem: what the visitor looks at (the pointer) settles into definite places, what nobody
//    watches stays a blur of possibilities, and the whole universe slowly tunes its rhythm to the visitor's own.
// 3. The unalome by the contact details: a thin 3D line that draws itself and sways; clicking it opens a small
//    bubble to choose its colour (kept in the visitor's browser).
// 5. The education playground: a brick-built playground (slide, two small houses, a sandbox, two bicycles) where
//    four bubbly shapes (the degrees) hop about exploring, three pastel flags (the languages) wave at the back,
//    and three playing cards (the certificates) float in a ring round a glowing core, part Stonehenge, part
//    sunken Atlantis. A glowing branch climbs through three layers; marble ideas flow along each layer and
//    jump between layers in quantum steps.
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Group, Color,
  BoxGeometry, CylinderGeometry, InstancedMesh, MeshStandardMaterial, MeshBasicMaterial, Object3D, Vector3, SRGBColorSpace,
  Curve, TubeGeometry, Mesh, OrthographicCamera, ExtrudeGeometry, SphereGeometry, CatmullRomCurve3, Quaternion,
  Raycaster, Vector2, CanvasTexture, PlaneGeometry, ConeGeometry, TorusGeometry, CapsuleGeometry, DodecahedronGeometry,
  IcosahedronGeometry, AdditiveBlending, DoubleSide, PointLight, Plane, Points, BufferGeometry, Float32BufferAttribute,
  ShaderMaterial, Sprite, SpriteMaterial
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
  const labelSize = new Map(); let reserved = [];
  function layout() {
    const r = cv.getBoundingClientRect();
    labelSize.clear();
    reserved = Array.from(box.querySelectorAll('.gx-top h2, .gx-state, .gx-close, .gx-panel')).map((el) => {
      const q = el.getBoundingClientRect(); return [q.left - r.left, q.top - r.top, q.right - r.left, q.bottom - r.top];
    }); W = Math.max(1, r.width); H = Math.max(1, r.height);
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

// ---------- the quantum universe around the galaxy ----------
const cloudTex = (cols, seed) => { // a soft nebula: many faint coloured blobs
  const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d');
  let r = seed * 9301 + 49297; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
  for (let k = 0; k < 90; k++) {
    const a = rnd() * Math.PI * 2, d = Math.pow(rnd(), 0.7) * 170, px = 256 + Math.cos(a) * d, py = 256 + Math.sin(a) * d * 0.7, rad = 40 + rnd() * 110;
    const g = x.createRadialGradient(px, py, 0, px, py, rad), col = cols[k % cols.length];
    g.addColorStop(0, col + '2a'); g.addColorStop(1, col + '00');
    x.fillStyle = g; x.fillRect(0, 0, 512, 512);
  }
  for (let k = 0; k < 160; k++) { x.fillStyle = 'rgba(255,255,255,' + (rnd() * 0.5) + ')'; x.fillRect(rnd() * 512, rnd() * 512, 1.5, 1.5); }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
};
const glowTex = (stops) => {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 128); stops.forEach(([o, col]) => g.addColorStop(o, col));
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
};
const streakTex = () => {
  const c = document.createElement('canvas'); c.width = 512; c.height = 16; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 512, 0); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 6, 512, 4);
  const v = x.createLinearGradient(0, 0, 0, 16); v.addColorStop(0, 'rgba(255,255,255,0)'); v.addColorStop(0.5, 'rgba(255,255,255,.35)'); v.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = v; x.globalCompositeOperation = 'destination-in'; x.fillRect(0, 0, 512, 16);
  return new CanvasTexture(c);
};
const planetTex = () => {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, '#16325c'); g.addColorStop(0.5, '#1d4f7a'); g.addColorStop(1, '#122a4d');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  let r = 11; const rnd = () => ((r = (r * 16807) % 2147483647) / 2147483647);
  for (let k = 0; k < 260; k++) { // land masses and seas of shade
    const px = rnd() * 1024, py = 80 + rnd() * 352, rad = 8 + rnd() * 60;
    x.fillStyle = rnd() < 0.55 ? 'rgba(52,96,110,.35)' : 'rgba(10,26,52,.35)';
    x.beginPath(); x.ellipse(px, py, rad * 1.6, rad, rnd() * 3, 0, Math.PI * 2); x.fill();
  }
  for (let k = 0; k < 120; k++) { x.fillStyle = 'rgba(230,240,255,' + (0.05 + rnd() * 0.12) + ')'; x.beginPath(); x.ellipse(rnd() * 1024, rnd() * 512, 20 + rnd() * 90, 3 + rnd() * 8, 0, 0, Math.PI * 2); x.fill(); }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
};
// round, soft, twinkling points; uFuzz shakes them about (unobserved); uRes is the rhythm they keep
const POINT_VS = `
uniform float uPhase, uPix, uFuzz, uSpread;
attribute float aSize, aPh;
attribute vec3 aCol;
varying vec3 vCol; varying float vTw;
void main() {
  vec3 p = position * uSpread;
  p += vec3(sin(uPhase * (0.8 + aPh) + aPh * 40.0), sin(uPhase * (1.1 + aPh) + aPh * 23.0), cos(uPhase * (0.9 + aPh) + aPh * 31.0)) * uFuzz;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = aSize * uPix * (220.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
  vCol = aCol; vTw = 0.62 + 0.38 * sin(uPhase * (0.5 + aPh * 1.5) + aPh * 60.0);
}`;
const POINT_FS = `
uniform float uOpacity;
varying vec3 vCol; varying float vTw;
void main() {
  vec2 q = gl_PointCoord - 0.5; float d = length(q);
  float a = smoothstep(0.5, 0.0, d); a *= a;
  float spike = max(0.0, 1.0 - abs(q.x) * 14.0) * max(0.0, 1.0 - abs(q.y) * 2.2) + max(0.0, 1.0 - abs(q.y) * 14.0) * max(0.0, 1.0 - abs(q.x) * 2.2);
  gl_FragColor = vec4(vCol * vTw, (a + spike * 0.25) * uOpacity);
}`;
function pointCloud(n, fill, pix) {
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), ph = new Float32Array(n), c = new Color();
  for (let i = 0; i < n; i++) { const v = fill(i, c); pos.set(v.p, i * 3); col.set([c.r, c.g, c.b], i * 3); size[i] = v.s; ph[i] = Math.random(); }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('aCol', new Float32BufferAttribute(col, 3));
  g.setAttribute('aSize', new Float32BufferAttribute(size, 1)); g.setAttribute('aPh', new Float32BufferAttribute(ph, 1));
  const m = new ShaderMaterial({
    uniforms: { uPhase: { value: 0 }, uPix: { value: pix }, uFuzz: { value: 0 }, uSpread: { value: 1 }, uOpacity: { value: 1 } },
    vertexShader: POINT_VS, fragmentShader: POINT_FS, transparent: true, depthWrite: false, blending: AdditiveBlending
  });
  return new Points(g, m);
}
function buildCosmos(scene, group, pix) {
  const add = (o) => { group.add(o); return o; };
  const R = Math.random;
  // 1. the deep sky: thousands of stars in every direction
  const sky = add(pointCloud(7000, (i, c) => {
    const u = R() * 2 - 1, a = R() * Math.PI * 2, r = 70 + R() * 70, s = Math.sqrt(1 - u * u);
    const pick = R(); c.set(pick < 0.6 ? 0xFFFFFF : pick < 0.8 ? 0xBFD3FF : pick < 0.93 ? 0xFFD9A8 : 0xFF9AA8);
    return { p: [Math.cos(a) * s * r, u * r, Math.sin(a) * s * r], s: R() < 0.03 ? 5 + R() * 4 : 1 + R() * 2.2 };
  }, pix));
  // 2. nebulae: soft coloured clouds far out
  const NEB = [['#2EC5D3', '#3B5BDB'], ['#FF8A3D', '#E0479E'], ['#8B5CF6', '#3B5BDB'], ['#FFB35C', '#C2410C'], ['#2EC5D3', '#8B5CF6'], ['#E0479E', '#FF8A3D'], ['#3B5BDB', '#2EC5D3']]; // taste-skill-ignore: nebula colours from the references
  const nebulae = NEB.map((cols, i) => {
    const sp = new Sprite(new SpriteMaterial({ map: cloudTex(cols, i + 1), transparent: true, opacity: 0.55, blending: AdditiveBlending, depthWrite: false }));
    const a = (i / NEB.length) * Math.PI * 2 + 0.4, u = (i % 3 - 1) * 0.45, r = 48 + (i % 2) * 14;
    sp.position.set(Math.cos(a) * r, u * r, Math.sin(a) * r); sp.scale.setScalar(46 + (i % 3) * 14);
    return add(sp);
  });
  // 3. the disc: dust and starlight on the same three arms as the bricks, warm at the core, blue at the rim
  const cWarm = new Color(0xFFF1D6), cOrange = new Color(0xFFA24C), cRust = new Color(0xC2410C), cBlue = new Color(0x8FB0FF), cViolet = new Color(0xB48CFF);
  const disc = add(pointCloud(15000, (i, c) => {
    const arm = i % 3, t = Math.pow(R(), 0.8), r = 0.3 + t * 11.5;
    const a = arm * (Math.PI * 2 / 3) + t * 3.6 + (R() - 0.5) * (0.35 + t * 0.6);
    const off = (R() - 0.5) * (0.4 + t * 1.3);
    if (t < 0.18) c.copy(cWarm).lerp(cOrange, t / 0.18); else if (t < 0.55) c.copy(cOrange).lerp(R() < 0.3 ? cRust : cWarm, R() * 0.6); else c.copy(cBlue).lerp(R() < 0.4 ? cViolet : cOrange, R() * 0.5);
    return { p: [Math.cos(a) * r + Math.cos(a + 1.57) * off, (R() - 0.5) * 0.4 * (1.1 - t), Math.sin(a) * r + Math.sin(a + 1.57) * off], s: t < 0.15 ? 1.4 + R() * 1.2 : 0.7 + R() * 1.4 };
  }, pix));
  disc.material.uniforms.uOpacity.value = 0.9;
  // 4. the core: a white-hot heart in a violet haze, with light streaks through it
  const core = add(new Sprite(new SpriteMaterial({ map: glowTex([[0, 'rgba(255,255,255,1)'], [0.12, 'rgba(255,240,210,.95)'], [0.35, 'rgba(255,170,90,.35)'], [0.7, 'rgba(180,120,255,.08)'], [1, 'rgba(0,0,0,0)']]), transparent: true, blending: AdditiveBlending, depthWrite: false })));
  core.scale.setScalar(6);
  const haze = add(new Sprite(new SpriteMaterial({ map: glowTex([[0, 'rgba(224,71,158,.45)'], [0.4, 'rgba(46,197,211,.12)'], [1, 'rgba(0,0,0,0)']]), transparent: true, opacity: 0.6, blending: AdditiveBlending, depthWrite: false })));
  haze.scale.setScalar(20);
  const sTex = streakTex(), STREAK = [0xFFFFFF, 0xFFD43B, 0x7FE7FF, 0xE0479E, 0xFF8A3D, 0x8FB0FF];
  const streaks = Array.from({ length: 14 }, (_, i) => {
    const sp = new Sprite(new SpriteMaterial({ map: sTex, color: STREAK[i % STREAK.length], transparent: true, opacity: 0.25, blending: AdditiveBlending, depthWrite: false }));
    sp.material.rotation = (i / 14) * Math.PI + (R() - 0.5) * 0.3; sp.scale.set(18 + R() * 22, 0.5 + R() * 0.5, 1);
    sp.userData.ph = R() * 6.3; return add(sp);
  });
  // 5. magnetic field loops round the core (dipole lines: r = L sin^2 theta)
  const loops = new Group(); add(loops);
  [3.2, 4.8, 6.6].forEach((L, li) => { for (let k = 0; k < 6; k++) {
    const ph = (k / 6) * Math.PI * 2 + li * 0.3, pts = [];
    for (let s2 = 0; s2 <= 40; s2++) { const th = 0.12 * Math.PI + (s2 / 40) * 0.76 * Math.PI, r = L * Math.sin(th) * Math.sin(th); pts.push(new Vector3(r * Math.sin(th) * Math.cos(ph), r * Math.cos(th), r * Math.sin(th) * Math.sin(ph))); }
    loops.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 60, 0.03, 6, false), new MeshBasicMaterial({ color: (k + li) % 2 ? 0x7FE7FF : 0xFFD27A, transparent: true, opacity: 0.2, blending: AdditiveBlending, depthWrite: false })));
  } });
  // 6. quantum orbits: wavy rings, each with electrons that smear into a cloud of possible places when unobserved
  const orbits = [2.3, 3.0, 3.8].map((rad, i) => {
    const g = new Group(); g.rotation.set(0.9 + i * 0.7, i * 1.3, 0.4 * i); add(g);
    const pts = []; for (let k = 0; k < 160; k++) { const a = (k / 160) * Math.PI * 2; pts.push(new Vector3(Math.cos(a) * rad, Math.sin(a * 18) * 0.12, Math.sin(a) * rad)); }
    g.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts, true), 320, 0.035, 6, true), new MeshBasicMaterial({ color: 0x6FA8FF, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false })));
    const eMat = new MeshBasicMaterial({ color: 0xDDF3FF, transparent: true, opacity: 0.9, blending: AdditiveBlending, depthWrite: false });
    const ghosts = []; for (let e = 0; e < 2; e++) for (let k = 0; k < 6; k++) { const m = new Mesh(new SphereGeometry(0.11, 12, 8), eMat.clone()); g.add(m); ghosts.push({ m, e, k }); }
    return { g, rad, ghosts, speed: 0.5 + i * 0.25, dir: i % 2 ? -1 : 1 };
  });
  // 7. a planet, lit by the core, with a thin bright atmosphere
  const planet = new Group(); planet.position.set(25, 7, -32); scene.add(planet); // a backdrop: it stays put while the galaxy turns
  const ball = new Mesh(new SphereGeometry(3.2, 64, 48), new MeshStandardMaterial({ map: planetTex(), roughness: 0.85, metalness: 0 }));
  planet.add(ball);
  planet.add(new Mesh(new SphereGeometry(3.42, 64, 48), new ShaderMaterial({
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - max(0.0, dot(vN, vV)), 2.6); gl_FragColor = vec4(vec3(0.5, 0.8, 1.0) * f * 1.4, f); }',
    transparent: true, blending: AdditiveBlending, depthWrite: false
  })));
  const coreLight = new PointLight(0xFFC78A, 3.2, 0, 0); add(coreLight);

  const pointMats = [sky.material, disc.material];
  return {
    update(o) { // o: phase, res, obs, lock, k (converged 0..1), spread, t
      const fuzz = (1 - o.obs) * 0.22 * (1 - o.k);
      pointMats.forEach((m) => { m.uniforms.uPhase.value = o.phase; });
      sky.material.uniforms.uFuzz.value = 0;
      disc.material.uniforms.uFuzz.value = fuzz; disc.material.uniforms.uSpread.value = o.spread;
      disc.material.uniforms.uOpacity.value = 0.9 * (1 - 0.75 * o.k);
      const beat = Math.sin(o.phase * 1.0);
      core.scale.setScalar(6 * (1 + 0.05 * beat + 0.12 * o.lock));
      core.material.opacity = 0.85 + 0.15 * o.lock;
      haze.material.opacity = 0.5 + 0.25 * o.lock + 0.08 * beat;
      streaks.forEach((sp, i) => { sp.material.opacity = (0.12 + 0.18 * (0.5 + 0.5 * Math.sin(o.phase * 0.6 + sp.userData.ph)) + 0.15 * o.lock) * (1 - 0.6 * o.k); sp.material.rotation += 0.0004 * (i % 2 ? 1 : -1); });
      loops.rotation.y = o.phase * 0.05;
      loops.children.forEach((m, i) => { m.material.opacity = 0.12 + 0.12 * (0.5 + 0.5 * Math.sin(o.phase * 0.8 + i * 0.5)) + 0.12 * o.lock; });
      orbits.forEach((ob) => {
        ob.g.rotation.y += 0.002 * ob.dir;
        ob.ghosts.forEach((gh) => {
          // observed: the electron sits in one place; unobserved: it spreads into a cloud of where it might be
          const smear = (1 - o.obs) * 0.9, a = o.phase * ob.speed * ob.dir + gh.e * Math.PI + (gh.k - 2.5) * 0.22 * smear;
          gh.m.position.set(Math.cos(a) * ob.rad, Math.sin(a * 18) * 0.12, Math.sin(a) * ob.rad);
          gh.m.material.opacity = gh.k === 2 || gh.k === 3 ? 0.9 - 0.5 * smear : 0.55 * smear;
          gh.m.scale.setScalar(1 + 0.6 * smear * (gh.k % 2));
        });
      });
      ball.rotation.y = o.t * 0.02;
      nebulae.forEach((n, i) => { n.material.opacity = 0.42 + 0.12 * Math.sin(o.phase * 0.15 + i); });
    }
  };
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
  // the observer (the measurement problem, kept quiet): obs is how present the visitor is, res the rhythm the
  // universe has tuned itself to, lock how well it resonates with the visitor's own rhythm
  let cosmos = null, obs = 0, res = 0.6, lock = 0, phase = 0, speedS = 0, lastAct = 0, ptrIn = false, baseCols = [];
  const ptrN = new Vector2(), tmpC = new Color(), pv = new Vector3();

  function build() {
    renderer = makeRenderer(cv);
    if (!renderer) { clicker.hidden = true; return false; }
    scene = new Scene();
    cam = new PerspectiveCamera(45, 1, 0.1, 500);
    scene.add(new HemisphereLight(0xffffff, 0x0b1b4d, 1.6));
    const key = new DirectionalLight(0xffffff, 2); key.position.set(-5, 9, 7); scene.add(key);
    group = new Group(); scene.add(group);
    group.quaternion.setFromAxisAngle(AY, 0.5);
    cosmos = buildCosmos(scene, group, Math.min(window.devicePixelRatio || 1, 2));
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
    // the observer: where the visitor points, and how fast, is what the universe listens to
    let lastP = null;
    cv.addEventListener('pointermove', (e) => {
      const r = cv.getBoundingClientRect(), now = performance.now();
      ptrN.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ptrIn = true;
      if (lastP) { const d = Math.hypot(e.clientX - lastP[0], e.clientY - lastP[1]), ms = Math.max(8, now - lastP[2]); speedS = speedS * 0.85 + (d / ms * 1000) * 0.15; }
      lastP = [e.clientX, e.clientY, now]; lastAct = now;
    });
    cv.addEventListener('pointerleave', () => { ptrIn = false; lastP = null; });
    cv.addEventListener('pointerdown', () => { lastAct = performance.now(); });
    cv.addEventListener('wheel', () => { lastAct = performance.now(); }, { passive: true });
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
      bricks.setColorAt(i, c); baseCols[i] = c;
    }
    bricks.instanceColor.needsUpdate = true;
  }
  const labelSize = new Map(); let reserved = [];
  function layout() {
    const r = cv.getBoundingClientRect();
    labelSize.clear();
    reserved = Array.from(box.querySelectorAll('.gx-top h2, .gx-state, .gx-close, .gx-panel')).map((el) => {
      const q = el.getBoundingClientRect(); return [q.left - r.left, q.top - r.top, q.right - r.left, q.bottom - r.top];
    });
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
    requestAnimationFrame(layout); // the state line changed length: re-measure what the labels must keep clear of
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
    // calibrate: presence rises with any touch of the pointer and fades after a few quiet seconds; the rhythm drifts
    // towards the visitor's (fast pointer, quick rhythm; stillness, the slow ground state) and locks when they agree
    const idle = (time - lastAct) / 1000, now01 = lastAct ? (idle < 2.5 ? 1 : Math.max(0, 1 - (idle - 2.5) / 3)) : 0;
    obs += (now01 - obs) * Math.min(1, dt * 2.5);
    speedS *= 0.97;
    const userF = 0.35 + Math.min(1, speedS / 1600) * 1.9;
    res += ((obs > 0.2 ? userF : 0.6) - res) * Math.min(1, dt * 0.6);
    lock = clamp01(lock + (Math.abs(userF - res) < 0.15 && obs > 0.5 ? dt * 0.25 : -dt * 0.35));
    if (!reduce) phase += dt * res * Math.PI;
    cam.position.set(0, 0, zoom); cam.lookAt(0, 0, 0); cam.updateMatrixWorld(); group.updateMatrixWorld();
    if (cosmos) cosmos.update({ phase, res, obs, lock, k: easeIO(clamp01(k)), spread, t: time / 1000 });
    const aspect = cam.aspect, jitter = !reduce;
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
      // superposition: a brick nobody is looking at hovers between places; under the pointer it settles
      let seen = 0;
      if (jitter) {
        pv.copy(dummy.position).applyMatrix4(group.matrixWorld).project(cam);
        const ddx = (pv.x - ptrN.x) * aspect, ddy = pv.y - ptrN.y;
        seen = ptrIn ? Math.exp(-(ddx * ddx + ddy * ddy) / 0.06) * obs : 0;
        const amp = 0.42 * (1 - Math.max(seen, obs * 0.4)) * (1 - e) * spread, f = 0.7 + (i % 7) * 0.13;
        dummy.position.x += Math.sin(phase * f + i * 1.7) * amp;
        dummy.position.y += Math.sin(phase * f * 1.3 + i * 2.3) * amp * 0.6;
        dummy.position.z += Math.cos(phase * f * 0.9 + i * 0.9) * amp;
        dummy.scale.multiplyScalar(1 + 0.22 * (1 - Math.max(seen, obs * 0.4)) * (1 - e) * Math.sin(phase * f * 1.7 + i));
      }
      if (baseCols[i]) { tmpC.copy(baseCols[i]).multiplyScalar(0.8 + 0.6 * seen); bricks.setColorAt(i, tmpC); }
      dummy.updateMatrix(); bricks.setMatrixAt(i, dummy.matrix);
    }
    bricks.instanceMatrix.needsUpdate = true;
    if (bricks.instanceColor) bricks.instanceColor.needsUpdate = true;
    // the stars: on the arms in the galaxy, on a ring around the structure when it converges
    const ke = easeIO(clamp01(k));
    const w = cv.clientWidth, h = cv.clientHeight;
    cam.position.set(0, 0, zoom); cam.lookAt(0, 0, 0);
    group.updateMatrixWorld();
    const labels = [];
    nodeBtns.forEach((b, i) => {
      const on = set.show[b.getAttribute('data-kind')];
      const p = v3.copy(nodePos[i]).multiplyScalar(spread).lerp(nodeRing[i], ke);
      dummy.position.copy(p); dummy.rotation.set(0, time * 0.0006 + i, 0); dummy.scale.setScalar(on ? 0.34 : 0.0001);
      dummy.updateMatrix(); stars.setMatrixAt(i, dummy.matrix);
      if (!on) { b.hidden = true; return; }
      b.hidden = false;
      p.applyMatrix4(group.matrixWorld).project(cam);
      const x = (p.x * 0.5 + 0.5) * w, y = (-p.y * 0.5 + 0.5) * h, behind = p.z > 1;
      labels.push({ b, i, x, y, z: p.z, far: behind || x < -40 || x > w + 40 || y < -40 || y > h + 40 });
    });
    // labels never pile up: the one in focus first, then the sections, then the nearest; a label that would cover
    // one already placed (or the title, the buttons) waits as a bare star until there is room. Labels stay on screen.
    const placed = reserved.slice(), focusEl = document.activeElement;
    labels.sort((a, b) => (b.b === focusEl) - (a.b === focusEl) || (b.b.getAttribute('data-kind') === 'section') - (a.b.getAttribute('data-kind') === 'section') || a.z - b.z);
    labels.forEach((l) => {
      let sz = labelSize.get(l.b);
      if (!sz) { sz = [l.b.offsetWidth, l.b.offsetHeight]; if (sz[0]) labelSize.set(l.b, sz); }
      const lx = Math.max(sz[0] / 2 + 6, Math.min(w - sz[0] / 2 - 6, l.x)), top = l.y - sz[1] * 1.5;
      const pad = l.b.classList.contains('is-crowded') ? 10 : 4; // a little hysteresis, so labels do not flicker
      const r = [lx - sz[0] / 2 - pad, top - pad, lx + sz[0] / 2 + pad, top + sz[1] + pad];
      const clash = !l.far && l.b !== focusEl && placed.some((q) => r[0] < q[2] && r[2] > q[0] && r[1] < q[3] && r[3] > q[1]);
      if (!l.far && !clash) placed.push(r);
      l.b.style.transform = `translate(${Math.round(lx)}px, ${Math.round(l.y)}px) translate(-50%, -150%)`;
      l.b.classList.toggle('is-far', l.far);
      l.b.classList.toggle('is-crowded', clash);
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
  document.getElementById('gx-adjust').addEventListener('toggle', () => { if (renderer && open) layout(); });

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

// ---------- 5. the education playground ----------
function startPlayground() {
  const box5 = document.getElementById('play'), cv = document.getElementById('play-canvas');
  if (!box5 || !cv) return;
  const renderer = makeRenderer(cv);
  if (!renderer) { box5.classList.add('no-3d'); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const note = document.getElementById('play-note');
  const EDU = DATA.education || [], LANGS = DATA.languages || [], CERTS = DATA.certificates || [];
  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 300);
  scene.add(new HemisphereLight(0xffffff, 0x0b1b4d, 1.7));
  const sun = new DirectionalLight(0xffffff, 2.2); sun.position.set(-8, 14, 10); scene.add(sun);
  const stage = new Group(); scene.add(stage);
  const std = (hex, extra) => new MeshStandardMaterial(Object.assign({ color: new Color(hex), roughness: 0.45, metalness: 0.05 }, extra || {}));
  const put = (geo, mat, x, y, z, parent) => { const m = new Mesh(geo, mat); m.position.set(x, y, z); (parent || stage).add(m); return m; };
  const rod = (a, b, r, mat, parent) => { // a cylinder from point a to point b
    const d = new Vector3().subVectors(b, a), m = new Mesh(new CylinderGeometry(r, r, d.length(), 10), mat);
    m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), d.normalize());
    parent.add(m); return m;
  };

  // the ground: a rubber floor in the site's blue, with two soft pastel patches
  put(new CylinderGeometry(13, 13, 0.4, 72), std(0x1537C7, { roughness: 0.9 }), 0, -0.2, 0);
  const patch = (x, z, r, hex) => { const m = put(new CylinderGeometry(r, r, 0.02, 56), std(hex, { roughness: 0.95, transparent: true, opacity: 0.32 }), x, 0.01, z); m.scale.z = 0.72; };
  patch(-6, 3.2, 4.2, 0x8FA6FF); patch(6, -2.5, 3.8, 0xC9B8FF);

  // ---- the playground, built of bricks ----
  const W = std(0xFFFFFF), Y = std(0xFFD43B), L = std(0xC9B8FF), P = std(0x8FA6FF), N = std(0x0B1B4D);
  // slide: a ladder, a brick platform, a yellow chute with rails
  const slide = new Group(); slide.position.set(-8.4, 0, -2.6); slide.rotation.y = 0.95; stage.add(slide);
  [-0.6, 0.6].forEach((x) => put(new BoxGeometry(0.16, 3.4, 0.16), W, x, 1.7, 0, slide));
  for (let i = 0; i < 5; i++) put(new BoxGeometry(1.2, 0.1, 0.1), W, 0, 0.5 + i * 0.6, 0, slide);
  const plat = put(brick(2, 2), P, 0, 3.45, 0.8, slide); plat.scale.set(0.8, 0.3, 0.8);
  const chute = put(new BoxGeometry(1.2, 0.12, 4.9), Y, 0, 1.85, 3.55, slide); chute.rotation.x = 0.71;
  [-0.62, 0.62].forEach((x) => { const r = put(new BoxGeometry(0.1, 0.3, 4.9), Y, x, 2.0, 3.55, slide); r.rotation.x = 0.71; });
  // two small houses
  const house = (x, z, ry, body, roof) => {
    const g = new Group(); g.position.set(x, 0, z); g.rotation.y = ry; stage.add(g);
    [0.6, 1.8].forEach((y) => { const m = put(brick(2, 2), body, 0, y, 0, g); m.scale.set(1.2, 1, 1.2); });
    const r = put(new ConeGeometry(2.0, 1.5, 4), roof, 0, 3.2, 0, g); r.rotation.y = Math.PI / 4;
    put(new BoxGeometry(0.7, 1.1, 0.06), N, 0, 0.55, 1.22, g);
    put(new BoxGeometry(0.5, 0.5, 0.06), N, 0, 1.85, 1.22, g);
  };
  house(8.7, -4.7, -0.9, W, Y); house(10.1, -0.9, -1.45, L, P);
  // a sandbox with a few toy bricks in it
  const sand = new Group(); sand.position.set(4.6, 0, 5.4); sand.rotation.y = -0.3; stage.add(sand);
  [-2, 2].forEach((z) => { const m = put(brick(5, 1), Y, 0, 0.3, z, sand); m.scale.y = 0.5; });
  [-2, 2].forEach((x) => { const m = put(brick(1, 3), Y, x, 0.3, 0, sand); m.scale.y = 0.5; });
  put(new BoxGeometry(3, 0.3, 3), std(0xF3E3B5, { roughness: 1 }), 0, 0.2, 0, sand);
  [[-0.8, 0.5, 0xFF9F87, 2], [0.7, -0.6, 0x8FA6FF, 1], [0.2, 0.9, 0xFFFFFF, 1], [-0.5, -0.8, 0xC9B8FF, 2]].forEach(([x, z, c, n]) => {
    const m = put(brick(n, 1), std(c), x, 0.52, z, sand); m.scale.setScalar(0.42); m.rotation.y = x * 2;
  });
  // two bicycles that roll a little back and forth
  const bikes = [];
  const bike = (x, z, ry, hex) => {
    const g = new Group(); g.position.set(x, 0, z); g.rotation.y = ry; stage.add(g);
    const frame = std(hex), tyre = std(0x0B1B4D, { roughness: 0.8 });
    const wheels = [-0.85, 0.85].map((wx) => put(new TorusGeometry(0.62, 0.07, 10, 30), tyre, wx, 0.62, 0, g));
    const v = (a, b) => new Vector3(a, b, 0);
    [[v(-0.85, 0.62), v(0, 0.55)], [v(0, 0.55), v(-0.25, 1.35)], [v(-0.25, 1.35), v(-0.85, 0.62)], [v(0, 0.55), v(0.6, 1.3)],
      [v(-0.25, 1.3), v(0.6, 1.3)], [v(0.6, 1.3), v(0.85, 0.62)], [v(0.6, 1.3), v(0.55, 1.65)]].forEach(([a, b]) => rod(a, b, 0.05, frame, g));
    rod(new Vector3(0.55, 1.65, -0.35), new Vector3(0.55, 1.65, 0.35), 0.04, frame, g);
    put(new BoxGeometry(0.42, 0.08, 0.2), N, -0.28, 1.42, 0, g);
    bikes.push({ g, wheels, x0: x, z0: z, ry, ph: bikes.length * 2.1 });
  };
  bike(-5.6, 6.2, 0.35, 0xFF9F87); bike(-3.0, 8.0, 0.15, 0xFFFFFF);

  // ---- the languages: three pastel flags, quiet at the back ----
  const flagTex = (kind) => {
    const c = document.createElement('canvas'); c.width = 180; c.height = 116; const x = c.getContext('2d');
    const G = '#B9E4C9', Wt = '#FBFBFF', R = '#F6B8B8', B = '#B8C7F0', Yw = '#FFE8A3';
    if (kind === 0) { [G, Wt, R].forEach((col, i) => { x.fillStyle = col; x.fillRect(i * 60, 0, 60, 116); }); }
    else if (kind === 1) {
      x.fillStyle = B; x.fillRect(0, 0, 180, 116);
      x.strokeStyle = Wt; x.lineWidth = 18; x.beginPath(); x.moveTo(0, 0); x.lineTo(180, 116); x.moveTo(180, 0); x.lineTo(0, 116); x.stroke();
      x.strokeStyle = R; x.lineWidth = 6; x.stroke();
      x.fillStyle = Wt; x.fillRect(74, 0, 32, 116); x.fillRect(0, 42, 180, 32);
      x.fillStyle = R; x.fillRect(80, 0, 20, 116); x.fillRect(0, 48, 180, 20);
    } else { x.fillStyle = R; x.fillRect(0, 0, 180, 116); x.fillStyle = Yw; x.fillRect(0, 29, 180, 58); }
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
  };
  const flags = [[-3.3, -9.4], [0, -9.9], [3.3, -9.4]].slice(0, Math.max(3, LANGS.length)).map(([x, z], i) => {
    const g = new Group(); g.position.set(x, 0, z); stage.add(g);
    put(new CylinderGeometry(0.05, 0.05, 3.7, 8), std(0xFFFFFF, { transparent: true, opacity: 0.6 }), 0, 1.85, 0, g);
    const geo = new PlaneGeometry(1.8, 1.16, 18, 8); geo.translate(0.9, 0, 0);
    const m = put(geo, new MeshBasicMaterial({ map: flagTex(i), transparent: true, opacity: 0.5, side: DoubleSide }), 0.05, 3.05, 0, g);
    m.userData = { kind: 'flag', i };
    return { m, base: Float32Array.from(geo.attributes.position.array), ph: i * 1.7, gust: 0 };
  });

  // ---- the certificates: playing cards floating in a ring round a glowing core ----
  const cardTex = (title, i, back) => {
    const c = document.createElement('canvas'); c.width = 380; c.height = 540; const x = c.getContext('2d');
    const draw = () => {
      x.clearRect(0, 0, 380, 540);
      x.fillStyle = '#0B1B4D'; x.fillRect(0, 0, 380, 540);
      x.shadowColor = '#8FA6FF'; x.shadowBlur = 16; x.strokeStyle = '#9FE8FF'; x.lineCap = 'round';
      x.lineWidth = 4; x.strokeRect(18, 18, 344, 504);
      x.lineWidth = 2; x.strokeRect(30, 30, 320, 480);
      // engraved glyphs, Atlantis style: a face of arcs and spirals, different on each card
      x.lineWidth = 3;
      const cx = 190, cy = back ? 270 : 200;
      for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(cx, cy, 30 + k * 22, Math.PI * (0.15 + k * 0.1 + i * 0.2), Math.PI * (0.85 + k * 0.25 + i * 0.2)); x.stroke(); }
      x.beginPath(); for (let a = 0; a < 12; a += 0.1) { const r = 4 + a * 4.2; const px = cx + Math.cos(a + i) * r, py = cy + Math.sin(a + i) * r; if (a === 0) x.moveTo(px, py); else x.lineTo(px, py); } x.stroke();
      x.fillStyle = '#9FE8FF'; [[-1, 1], [1, 1]].forEach(([sx]) => { x.beginPath(); x.arc(cx + sx * 26, cy - 10, 7, 0, Math.PI * 2); x.fill(); });
      // corner pips
      x.font = '800 30px "Libre Franklin", sans-serif'; x.textAlign = 'center';
      const pip = ['◆', '●', '▲'][i % 3];
      x.fillText(pip, 54, 74); x.save(); x.translate(326, 466); x.rotate(Math.PI); x.fillText(pip, 0, 0); x.restore();
      if (!back) {
        x.shadowBlur = 10; x.fillStyle = '#FFFFFF'; x.font = '800 30px "Libre Franklin", sans-serif';
        const words = title.split(' '), lines = []; let line = '';
        words.forEach((w) => { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > 290 && line) { lines.push(line); line = w; } else line = t; });
        lines.push(line);
        lines.slice(0, 5).forEach((l, k) => x.fillText(l, 190, 352 + k * 36));
      }
      x.shadowBlur = 0;
    };
    draw();
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
    if (document.fonts && document.fonts.load) document.fonts.load('800 30px "Libre Franklin"').then(() => { draw(); t.needsUpdate = true; }).catch(() => {});
    return t;
  };
  const ringY = 3.3, ringR = 2.75;
  const ringG = new Group(); ringG.position.y = ringY; stage.add(ringG);
  const edge = new MeshBasicMaterial({ color: 0x9FE8FF });
  const cards = CERTS.map((title, i) => {
    const a = (i / CERTS.length) * Math.PI * 2;
    const front = cardTex(title, i, false), back = cardTex(title, i, true);
    const faceMat = (map) => new MeshStandardMaterial({ map, emissiveMap: map, emissive: new Color(0xffffff), emissiveIntensity: 0.6, roughness: 0.6 });
    const m = new Mesh(new BoxGeometry(1.9, 2.7, 0.07), [edge, edge, edge, edge, faceMat(front), faceMat(back)]);
    const holder = new Group(); holder.position.set(Math.sin(a) * ringR, 0, Math.cos(a) * ringR); holder.rotation.y = a;
    holder.add(m); ringG.add(holder);
    m.userData = { kind: 'card', i };
    return { m, holder, ph: i * 2.2, flip: 0 };
  });
  const core = put(new SphereGeometry(0.3, 24, 16), new MeshBasicMaterial({ color: 0xEAF6FF }), 0, ringY, 0);
  const halo = put(new SphereGeometry(0.95, 24, 16), new MeshBasicMaterial({ color: 0x9FE8FF, transparent: true, opacity: 0.16, blending: AdditiveBlending, depthWrite: false }), 0, ringY, 0);
  const coreLight = new PointLight(0x9FE8FF, 7, 9, 1.4); coreLight.position.set(0, ringY, 0); stage.add(coreLight);

  // ---- the synesthetic branch: three layers of glowing tube, joined by branches ----
  const LAYERS = [{ y: 0.85, r: 11.2, col: 0xFFD43B, ph: 0.3, dir: 1, speed: 0.15 }, { y: 2.15, r: 7.4, col: 0xC9B8FF, ph: 1.7, dir: -1, speed: 0.22 }, { y: 5.5, r: 4.0, col: 0x8FA6FF, ph: 2.9, dir: 1, speed: 0.32 }];
  const layerPoint = (li, a, out = new Vector3()) => {
    const Lr = LAYERS[li], r = Lr.r * (1 + 0.06 * Math.sin(3 * a + Lr.ph));
    return out.set(Math.cos(a) * r, Lr.y + 0.32 * Math.sin(2 * a + Lr.ph), Math.sin(a) * r);
  };
  const glow = (curve, closed, r, col, op) => {
    const n = closed ? 360 : 90;
    put(new TubeGeometry(curve, n, r, 8, closed), new MeshBasicMaterial({ color: col, transparent: true, opacity: op }), 0, 0, 0);
    put(new TubeGeometry(curve, n, r * 2.8, 8, closed), new MeshBasicMaterial({ color: col, transparent: true, opacity: op * 0.18, blending: AdditiveBlending, depthWrite: false }), 0, 0, 0);
  };
  LAYERS.forEach((Lr, li) => {
    const pts = []; for (let k = 0; k < 64; k++) pts.push(layerPoint(li, (k / 64) * Math.PI * 2));
    glow(new CatmullRomCurve3(pts, true, 'centripetal'), true, 0.07, Lr.col, 0.8);
  });
  const branch = (pts, col) => glow(new CatmullRomCurve3(pts), false, 0.05, col, 0.55);
  for (let k = 0; k < 4; k++) { // layer 1 to layer 2
    const a = k * Math.PI / 2 + Math.PI / 4, p0 = layerPoint(0, a), p1 = layerPoint(1, a + 0.45);
    branch([p0, new Vector3().lerpVectors(p0, p1, 0.5).add(new Vector3(0, 0.9, 0)), p1], 0xE6DEFF);
  }
  for (let k = 0; k < 3; k++) { // layer 2 to layer 3
    const a = k * Math.PI * 2 / 3 + 0.4, p0 = layerPoint(1, a), p1 = layerPoint(2, a + 0.5);
    branch([p0, new Vector3().lerpVectors(p0, p1, 0.5).add(new Vector3(0, 1.4, 0)), p1], 0xC9D4FF);
  }
  branch([new Vector3(0, 0, 0), new Vector3(0.35, 1.0, 0.15), new Vector3(-0.25, 2.1, -0.2), new Vector3(0, ringY - 0.3, 0)], 0xFFD43B); // the trunk, up to the core
  for (let k = 0; k < 3; k++) { // the core opens into the top layer
    const a = k * Math.PI * 2 / 3 + 1.2, p1 = layerPoint(2, a);
    branch([new Vector3(0, ringY + 0.3, 0), new Vector3(Math.cos(a) * 1.4, ringY + 1.5, Math.sin(a) * 1.4), p1], 0xBFD0FF);
  }

  // ---- the marbles: ideas flowing along the layers, jumping layer to layer in quantum steps ----
  const marbleTex = (c1, c2) => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128; const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 256, 128); g.addColorStop(0, c1); g.addColorStop(1, c2);
    x.fillStyle = g; x.fillRect(0, 0, 256, 128);
    x.globalAlpha = 0.55; x.strokeStyle = '#FFFFFF'; x.lineCap = 'round';
    for (let k = 0; k < 7; k++) {
      x.lineWidth = 2 + (k % 3) * 2; x.beginPath();
      for (let px = 0; px <= 256; px += 8) { const py = 64 + Math.sin(px / 256 * Math.PI * (2 + k) + k * 1.3) * (20 + k * 5) + (k - 3) * 9; if (px === 0) x.moveTo(px, py); else x.lineTo(px, py); }
      x.stroke();
    }
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
  };
  const MARBLE = [['#FFD43B', '#FF9F87'], ['#C9B8FF', '#8FA6FF'], ['#8FA6FF', '#EAF0FF'], ['#FF9F87', '#C9B8FF'], ['#9FE3C5', '#8FA6FF']].map(([a, b]) => new MeshStandardMaterial({ map: marbleTex(a, b), roughness: 0.15, metalness: 0.1 }));
  const mGeo = new SphereGeometry(0.27, 24, 16);
  const marbles = [];
  [7, 5, 3].forEach((n, li) => { for (let k = 0; k < n; k++) {
    const m = new Mesh(mGeo, MARBLE[(li * 2 + k) % MARBLE.length]); stage.add(m);
    marbles.push({ m, li, a: (k / n) * Math.PI * 2 + li, v: 0.85 + ((k * 37) % 10) / 30, s: 1, state: 0, t: 0, to: li });
  } });
  let nextJump = 2;

  // ---- the degrees: four bubbly shapes that hop about, curious ----
  const SHAPE_COL = [0xFFD43B, 0xC9B8FF, 0x8FA6FF, 0xFF9F87];
  const shapeGeos = [new IcosahedronGeometry(0.72, 3), new TorusGeometry(0.52, 0.24, 18, 40), new CapsuleGeometry(0.4, 0.7, 8, 16), new DodecahedronGeometry(0.7)];
  const blobBase = Float32Array.from(shapeGeos[0].attributes.position.array);
  const SPOTS = [[-4.5, 1.5], [-2.2, 4.2], [1.6, 4.4], [4.4, 1.0], [5.6, -2.6], [-5.6, -1.8], [-2.6, -5.8], [2.6, -6.0], [0.4, 7.6], [6.8, 2.8], [4.6, 5.4, 0.35], [-7.2, 3.2], [-0.2, -7.2], [7.2, -6.6]];
  const used = new Set();
  const shapes = shapeGeos.map((geo, i) => {
    const m = new Mesh(geo, std(SHAPE_COL[i], { roughness: 0.32, emissive: new Color(SHAPE_COL[i]), emissiveIntensity: 0.12 }));
    const g = new Group(); g.add(m); stage.add(g);
    const spot = [0, 3, 6, 9][i]; used.add(spot);
    const p = new Vector3(SPOTS[spot][0], 0, SPOTS[spot][1]);
    g.position.copy(p);
    m.userData = { kind: 'shape', i };
    return { g, m, spot, from: p.clone(), to: p.clone(), t: 1, dur: 1, h: 1.4, wait: 0.6 + i * 0.9, land: 0, yaw: 0, spin: 0, lift: SPOTS[spot][2] || 0 };
  });
  const hopTo = (s, big) => {
    used.delete(s.spot);
    let pick = s.spot, best = -1;
    for (let k = 0; k < 6; k++) { // a nearby free spot, chosen with a little curiosity
      const c = Math.floor(Math.random() * SPOTS.length); if (used.has(c) || c === s.spot) continue;
      const d = Math.hypot(SPOTS[c][0] - s.g.position.x, SPOTS[c][1] - s.g.position.z);
      const score = (big ? d : 10 - Math.abs(d - 4.5)) + Math.random() * 2;
      if (score > best) { best = score; pick = c; }
    }
    used.add(pick); s.spot = pick;
    s.from.copy(s.g.position); s.from.y = 0; s.to.set(SPOTS[pick][0], 0, SPOTS[pick][1]);
    s.lift = SPOTS[pick][2] || 0;
    const d = s.from.distanceTo(s.to);
    s.dur = 0.7 + d * 0.12; s.h = (big ? 2.6 : 1.1) + d * 0.12; s.t = 0; s.spin = big ? 1 : 0;
  };
  const excite = (i) => { const s = shapes[i]; if (!s) return; if (s.t >= 1) hopTo(s, true); else s.spin = 1; if (note && EDU[i]) note.textContent = EDU[i]; };

  // ---- view: drag to turn, a slow drift when left alone ----
  let yaw = -0.35, vel = 0, dragging = false, downX = 0, lastX = 0, moved = 0;
  const ray = new Raycaster(), ptr = new Vector2(), ground = new Plane(new Vector3(0, 1, 0), 0), lookPt = new Vector3(), hasLook = { on: false };
  const pickables = [...shapes.map((s) => s.m), ...cards.map((c) => c.m), ...flags.map((f) => f.m)];
  const setPtr = (e) => { const r = cv.getBoundingClientRect(); ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); };
  const hit = () => { ray.setFromCamera(ptr, camera); const h = ray.intersectObjects(pickables, false)[0]; return h ? h.object.userData : null; };
  cv.addEventListener('pointerdown', (e) => { downX = lastX = e.clientX; moved = 0; dragging = true; vel = 0; });
  window.addEventListener('pointermove', (e) => {
    if (dragging) {
      const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx);
      if (moved > 4) { cv.classList.add('is-dragging'); yaw += dx * 0.008; vel = dx * 0.008; }
      return;
    }
    if (e.target !== cv) { hasLook.on = false; return; }
    setPtr(e); ray.setFromCamera(ptr, camera);
    const local = ray.ray.intersectPlane(ground, lookPt); hasLook.on = !!local;
    if (local) stage.worldToLocal(lookPt);
    cv.style.cursor = hit() ? 'pointer' : '';
  }, { passive: true });
  window.addEventListener('pointerup', (e) => {
    if (!dragging) return;
    dragging = false; cv.classList.remove('is-dragging');
    if (moved > 4 || e.target !== cv) return;
    setPtr(e); const h = hit(); if (!h) return;
    if (h.kind === 'shape') excite(h.i);
    else if (h.kind === 'card') { cards[h.i].flip = 1; if (note) note.textContent = CERTS[h.i]; }
    else if (h.kind === 'flag') { flags[h.i].gust = 1; if (note) note.textContent = LANGS[h.i] || ''; }
  });
  document.querySelectorAll('.edu>li').forEach((li) => {
    const i = +li.getAttribute('data-i');
    li.addEventListener('mouseenter', () => excite(i)); li.addEventListener('focus', () => excite(i));
  });

  const resize = () => {
    const w = cv.clientWidth, h = cv.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    const dist = Math.max(28, 41 / camera.aspect);
    camera.position.set(0, dist * 0.4, dist); camera.lookAt(0, 1.2, 0); camera.updateProjectionMatrix();
  };
  window.addEventListener('resize', resize); resize();

  const q = new Vector3();
  let last = 0, clock = 0;
  whileVisible(box5, (time) => {
    const dt = Math.min(0.05, last ? (time - last) / 1000 : 0.016); last = time;
    const live = !reduce;
    if (live) clock += dt;
    const t = clock;
    if (!dragging) { if (Math.abs(vel) > 0.0001) { yaw += vel; vel *= 0.94; } else if (live) yaw += dt * 0.05; }
    stage.rotation.y = yaw;

    // shapes: wait, look about, hop
    shapes.forEach((s, i) => {
      if (s.t < 1) {
        s.t = Math.min(1, s.t + dt / s.dur);
        const e = smooth(s.t);
        s.g.position.lerpVectors(s.from, s.to, e);
        s.g.position.y = 4 * s.h * s.t * (1 - s.t) + s.lift * e;
        const st = 1 + 0.22 * Math.sin(Math.PI * s.t);
        s.m.scale.set(1 / Math.sqrt(st), st, 1 / Math.sqrt(st));
        const dir = Math.atan2(s.to.x - s.from.x, s.to.z - s.from.z); s.yaw += (dir - s.yaw) * 0.15;
        if (s.t >= 1) { s.land = 1; s.wait = 1.2 + Math.random() * 2.6; }
      } else {
        if (live) s.wait -= dt;
        s.land = Math.max(0, s.land - dt * 3);
        const sq = 1 - 0.28 * s.land * Math.sin(s.land * Math.PI), br = 1 + 0.035 * Math.sin(t * 2.4 + i);
        s.m.scale.set(br / Math.sqrt(sq), br * sq, br / Math.sqrt(sq));
        if (hasLook.on) { const want = Math.atan2(lookPt.x - s.g.position.x, lookPt.z - s.g.position.z); s.yaw += (want - s.yaw) * 0.06; }
        if (s.wait <= 0 && live) hopTo(s, false);
      }
      s.g.rotation.y = s.yaw;
      s.m.position.y = 0.72 * s.m.scale.y;
      if (s.spin > 0) { s.spin = Math.max(0, s.spin - dt * 0.9); s.m.rotation.y = (1 - s.spin) * Math.PI * 2; }
      if (i === 1) s.m.rotation.x = 0.4 + Math.sin(t * 0.8) * 0.2;
      if (i === 3) s.m.rotation.z = t * 0.4;
    });
    // the blob breathes
    if (live) {
      const pos = shapeGeos[0].attributes.position;
      for (let k = 0; k < pos.count; k++) {
        const x = blobBase[k * 3], y = blobBase[k * 3 + 1], z = blobBase[k * 3 + 2];
        const f = 1 + 0.07 * Math.sin(x * 4 + t * 2.1) * Math.sin(y * 4 + t * 1.6) + 0.04 * Math.sin(z * 5 + t * 2.7);
        pos.setXYZ(k, x * f, y * f, z * f);
      }
      pos.needsUpdate = true; shapeGeos[0].computeVertexNormals();
    }

    // marbles: flow along their layer; now and then one leaves its layer and appears in the next
    if (live) {
      nextJump -= dt;
      if (nextJump <= 0) {
        nextJump = 1.6 + Math.random() * 2.4;
        const free = marbles.filter((m) => m.state === 0); const m = free[Math.floor(Math.random() * free.length)];
        if (m) { m.to = m.li === 0 ? 1 : m.li === 2 ? 1 : (Math.random() < 0.5 ? 0 : 2); m.state = 1; m.t = 0; }
      }
    }
    marbles.forEach((m, k) => {
      const Lr = LAYERS[m.li];
      if (live) m.a += dt * Lr.speed * Lr.dir * m.v;
      if (m.state === 1) { m.t += dt / 0.35; m.s = Math.max(0, 1 - m.t); if (m.t >= 1) { m.li = m.to; m.state = 2; m.t = 0; } }
      else if (m.state === 2) { m.t += dt / 0.45; m.s = easeOutBack(Math.min(1, m.t)); if (m.t >= 1) { m.state = 0; m.s = 1; } }
      layerPoint(m.li, m.a, q); m.m.position.copy(q); m.m.position.y += 0.3;
      m.m.scale.setScalar(Math.max(0.001, m.s));
      m.m.rotation.z -= dt * 2.4 * Lr.dir; m.m.rotation.y = -m.a;
    });

    // cards: float and turn slowly, Atlantis style; a picked card turns over once
    ringG.rotation.y = t * 0.12;
    cards.forEach((c) => {
      c.holder.position.y = Math.sin(t * 0.9 + c.ph) * 0.18;
      c.m.rotation.z = Math.sin(t * 0.6 + c.ph) * 0.05;
      if (c.flip > 0) { c.flip = Math.max(0, c.flip - dt * 0.8); c.m.rotation.y = smooth(1 - c.flip) * Math.PI * 2; }
    });
    const pulse = 1 + 0.08 * Math.sin(t * 2.2);
    halo.scale.setScalar(pulse); core.scale.setScalar(0.95 + 0.05 * Math.sin(t * 3.1));

    // flags wave; a picked flag catches a gust
    flags.forEach((f) => {
      f.gust = Math.max(0, f.gust - dt * 0.6);
      const pos = f.m.geometry.attributes.position, amp = 0.1 + f.gust * 0.25;
      for (let k = 0; k < pos.count; k++) {
        const x = f.base[k * 3];
        pos.setZ(k, Math.sin(x * 2.4 - t * (2.6 + f.gust * 3) + f.ph) * amp * (x / 1.8));
      }
      pos.needsUpdate = true;
    });
    // bikes roll back and forth a little
    bikes.forEach((b) => {
      const off = Math.sin(t * 0.45 + b.ph) * 0.7;
      b.g.position.set(b.x0 + Math.cos(b.ry) * off, 0, b.z0 - Math.sin(b.ry) * off);
      b.wheels.forEach((w) => { w.rotation.z = -off / 0.62; });
    });

    renderer.render(scene, camera);
  });
}
try { startPlayground(); } catch (e) { const p = document.getElementById('play'); if (p) p.classList.add('no-3d'); }

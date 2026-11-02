// Three.js on the home page, bundled with three.js into src/vendor/figures.js by src/bundle-figures.mjs.
// 1. The workshop figures under "Every workshop": three small scenes in one canvas.
//   left   one brick per workshop, travelling a trefoil knot (a closed, non-linear path)
//   centre one brick per participant, a swirling cloud that twists and breathes
//   right  one ring per audience (teachers, pre-service teachers, students, educators); the ring of the
//          word on show comes forward while the others dim
// 2. The contact phrases: extruded 3D letters (Libre Franklin ExtraBold, src/make-glyphs.mjs) that turn in,
//    sway and turn out, one phrase at a time, in one place.
// 3. The unalome by the contact details: a thin 3D line that draws itself and sways; clicking it opens a small
//    bubble to choose its colour (kept in the visitor's browser).
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Group, Color,
  BoxGeometry, CylinderGeometry, InstancedMesh, MeshStandardMaterial, MeshBasicMaterial, Object3D, Vector3, SRGBColorSpace,
  Curve, TubeGeometry, Mesh, OrthographicCamera, ExtrudeGeometry, SphereGeometry, CatmullRomCurve3
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

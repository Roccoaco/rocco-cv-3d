// The workshop figures under "Every workshop": three small three.js scenes in one canvas.
//   left   one brick per workshop, travelling a trefoil knot (a closed, non-linear path)
//   centre one brick per participant, a swirling cloud that twists and breathes
//   right  one ring per audience (teachers, pre-service teachers, students); the ring of the word
//          on show comes forward while the others dim
// Bundled with three.js into src/vendor/figures.js by src/bundle-figures.mjs; the build copies it to dist.
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Group, Color,
  BoxGeometry, CylinderGeometry, InstancedMesh, MeshStandardMaterial, MeshBasicMaterial, Object3D, Vector3, SRGBColorSpace,
  Curve, TubeGeometry, Mesh
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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
  const palette = [0xFFFFFF, 0xFFD43B, 0x8FA6FF, 0x5B74E8];
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
    return { mesh: m, g, n, r: 1.05 + i * 0.42, glow: i === 0 ? 1 : 0 };
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

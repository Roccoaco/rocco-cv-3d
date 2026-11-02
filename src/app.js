/* Rocco Acocella CV: brick field, workshop frame, travel map, email reveal.
   No third-party code, no network calls, no cookies or storage. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DATA = JSON.parse(document.getElementById('cv-data').textContent);

  /* ---------- seeded random ---------- */
  function rng(seed) {
    var s = seed >>> 0 || 1;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; };
  }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function hexToRgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
  function shade(rgb, k) { return 'rgb(' + Math.round(rgb[0] * k) + ',' + Math.round(rgb[1] * k) + ',' + Math.round(rgb[2] * k) + ')'; }

  /* ---------- slab layout: one storey per workshop ---------- */
  function slab(n) {
    var a = Math.max(1, Math.ceil(Math.sqrt(n / 2))); var b = Math.ceil(n / a);
    var out = [];
    for (var i = 0; i < n; i++) {
      var c = i % a, r = Math.floor(i / a);
      out.push([(c - (a - 1) / 2) * 2.04, (r - (b - 1) / 2) * 1.04]);
    }
    return out;
  }

  var BRICK_COLORS = ['#FFFFFF', '#FFD43B', '#9DB1F5', '#0B1B4D'];

  /* ---------- the brick renderer (canvas 2D, own projection) ---------- */
  function BrickField(canvas, opts) {
    this.c = canvas; this.ctx = canvas.getContext('2d');
    this.yaw = opts.yaw || 0.7; this.pitch = opts.pitch || 0.55;
    this.mode = opts.mode || 'diverge'; this.t = this.mode === 'converge' ? 1 : 0; this.from = this.t; this.to = this.t;
    this.anim = 0; this.animDur = opts.animDur || 1600; this.spin = !reduce && opts.spin !== false;
    this.zoom = opts.zoom || 1; this.lift = opts.lift || 0;
    this.bricks = []; this.visible = true; this.dirty = true;
    var self = this;
    this.resize = function () {
      var r = canvas.getBoundingClientRect(); var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * dpr)); canvas.height = Math.max(1, Math.round(r.height * dpr));
      self.w = r.width; self.h = r.height; self.dpr = dpr; self.dirty = true;
    };
    this.resize();
    window.addEventListener('resize', this.resize);
    // drag to rotate
    var drag = null;
    canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY, yaw: self.yaw, pitch: self.pitch }; canvas.setPointerCapture(e.pointerId); self.userTouched = true; });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      self.yaw = drag.yaw + (e.clientX - drag.x) * 0.008;
      self.pitch = Math.max(0.2, Math.min(1.1, drag.pitch + (e.clientY - drag.y) * 0.004));
      self.dirty = true;
    });
    function end() { drag = null; }
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { self.yaw -= 0.15; self.dirty = true; e.preventDefault(); }
      if (e.key === 'ArrowRight') { self.yaw += 0.15; self.dirty = true; e.preventDefault(); }
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { self.visible = en[0].isIntersecting; }).observe(canvas);
    }
  }
  BrickField.prototype.set = function (groups, seed) {
    // groups: [{n, color}] stacked bottom to top
    var R = rng(seed || 7); var bricks = []; var y = 0; var total = 0;
    groups.forEach(function (g) { total += g.n; });
    var spread = 7 + Math.cbrt(total) * 1.6;
    groups.forEach(function (g, gi) {
      var pos = slab(g.n);
      pos.forEach(function (p) {
        var th = R() * Math.PI * 2, ph = Math.acos(2 * R() - 1), rr = spread * Math.cbrt(R());
        bricks.push({
          cx: p[0], cy: y, cz: p[1],
          dx: rr * Math.sin(ph) * Math.cos(th), dy: rr * Math.cos(ph) * 0.8 + (groups.length * 1.2) / 2, dz: rr * Math.sin(ph) * Math.sin(th),
          dr: R() * Math.PI * 2, delay: R() * 0.35, col: hexToRgb(g.color), g: gi
        });
      });
      y += 1.2;
    });
    this.height = y; this.bricks = bricks; this.dirty = true;
    var maxR = 0; bricks.forEach(function (b) { maxR = Math.max(maxR, Math.abs(b.cx) + 1, Math.abs(b.cz) + 1); });
    this.radius = Math.max(maxR, y * 0.62, 4);
  };
  BrickField.prototype.go = function (mode) {
    if (mode === this.mode) return;
    this.mode = mode; this.from = this.t; this.to = mode === 'converge' ? 1 : 0;
    this.anim = reduce ? 1 : 0.0001; if (reduce) this.t = this.to; this.dirty = true;
  };
  BrickField.prototype.frame = function (dt) {
    if (!this.visible) return;
    if (this.anim > 0 && this.anim < 1) {
      this.anim = Math.min(1, this.anim + dt / this.animDur);
      this.t = this.from + (this.to - this.from) * this.anim; this.dirty = true;
    }
    if (this.spin && !this.userTouched) { this.yaw += dt * 0.00012; this.dirty = true; }
    if (this.dirty) { this.draw(); this.dirty = false; }
  };
  BrickField.prototype.draw = function () {
    var ctx = this.ctx, w = this.w, h = this.h, dpr = this.dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    var cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    var midY = this.height / 2;
    var span = this.radius * 2.6;
    var scale = Math.min(w, h * 1.15) / span * this.zoom;
    var camD = this.radius * 4.2;
    var ox = w / 2, oy = h / 2 + this.lift * h;
    var T = this.t, HX = 1, HY = 0.6, HZ = 0.5; // half sizes of a 2x1 brick
    function proj(x, y, z) {
      var x1 = x * cy - z * sy, z1 = x * sy + z * cy;
      var y1 = (y - midY);
      var y2 = y1 * cp - z1 * sp, z2 = y1 * sp + z1 * cp;
      var f = camD / (camD + z2);
      return [ox + x1 * scale * f, oy - y2 * scale * f, z2, f];
    }
    var list = [];
    for (var i = 0; i < this.bricks.length; i++) {
      var b = this.bricks[i];
      // staggered interpolation
      var k = Math.max(0, Math.min(1, (T * 1.35) - b.delay));
      k = ease(k);
      var x = b.dx + (b.cx - b.dx) * k, y = b.dy + (b.cy - b.dy) * k, z = b.dz + (b.cz - b.dz) * k;
      var r = b.dr * (1 - k);
      var pc = proj(x, y, z);
      list.push({ b: b, x: x, y: y, z: z, r: r, d: pc[2] - y * 0.02 });
    }
    list.sort(function (a, c) { return c.d - a.d; });
    var faces = [
      // [corner indices], normal
      [[4, 5, 6, 7], [0, 1, 0]], // top
      [[0, 1, 5, 4], [0, 0, -1]],
      [[1, 2, 6, 5], [1, 0, 0]],
      [[2, 3, 7, 6], [0, 0, 1]],
      [[3, 0, 4, 7], [-1, 0, 0]]
    ];
    var L = [0.45, 0.8, -0.35];
    for (var j = 0; j < list.length; j++) {
      var it = list[j], br = it.b, cr = Math.cos(it.r), sr = Math.sin(it.r);
      var loc = [[-HX, -HY, -HZ], [HX, -HY, -HZ], [HX, -HY, HZ], [-HX, -HY, HZ], [-HX, HY, -HZ], [HX, HY, -HZ], [HX, HY, HZ], [-HX, HY, HZ]];
      var P = loc.map(function (v) {
        var rx = v[0] * cr - v[2] * sr, rz = v[0] * sr + v[2] * cr;
        return proj(it.x + rx, it.y + v[1] + HY, it.z + rz);
      });
      for (var fi = 0; fi < faces.length; fi++) {
        var fc = faces[fi][0];
        var a = P[fc[0]], bb = P[fc[1]], c = P[fc[2]];
        var cross = (bb[0] - a[0]) * (c[1] - a[1]) - (bb[1] - a[1]) * (c[0] - a[0]);
        if (cross <= 0) continue;
        var n = faces[fi][1]; var nx = n[0] * cr - n[2] * sr, nz = n[0] * sr + n[2] * cr;
        var lam = 0.62 + 0.38 * Math.max(0, nx * L[0] + n[1] * L[1] + nz * L[2]);
        ctx.fillStyle = shade(br.col, lam);
        ctx.beginPath(); ctx.moveTo(P[fc[0]][0], P[fc[0]][1]);
        for (var q = 1; q < 4; q++) ctx.lineTo(P[fc[q]][0], P[fc[q]][1]);
        ctx.closePath(); ctx.fill();
        if (fi === 0) {
          // two studs
          for (var s = -1; s <= 1; s += 2) {
            var sx = s * 0.5 * cr, sz = s * 0.5 * sr;
            var top = proj(it.x + sx, it.y + 2 * HY, it.z + sz);
            var rad = 0.3 * scale * top[3];
            var ry = rad * Math.max(0.25, Math.sin(this.pitch));
            ctx.fillStyle = shade(br.col, 0.72);
            ctx.beginPath(); ctx.ellipse(top[0], top[1] - ry * 0.1, rad, ry, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = shade(br.col, 1.0);
            ctx.beginPath(); ctx.ellipse(top[0], top[1] - ry * 0.75, rad, ry, 0, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
    }
  };

  var fields = [];
  var last = performance.now();
  function loop(now) {
    var dt = Math.min(64, now - last); last = now;
    for (var i = 0; i < fields.length; i++) fields[i].frame(dt);
    requestAnimationFrame(loop);
  }

  /* ---------- hero: every counted seat is a brick ---------- */
  var heroCanvas = document.getElementById('field');
  if (heroCanvas && heroCanvas.getContext) {
    var counted = DATA.workshops.filter(function (w) { return w.count; }).slice().reverse(); // oldest at the bottom
    var hero = new BrickField(heroCanvas, { yaw: 0.65, pitch: 0.5, zoom: 1.05, lift: -0.02 });
    hero.set(counted.map(function (w, i) { return { n: w.count, color: BRICK_COLORS[i % 3] }; }), 1965);
    fields.push(hero);
    var btns = document.querySelectorAll('[data-mode]');
    function setMode(m) {
      hero.go(m);
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === m)); });
      var cap = document.getElementById('field-state');
      if (cap) cap.textContent = m === 'converge'
        ? 'Converged: each storey is one workshop, oldest at the base.'
        : 'Diverged: 349 bricks, one for every seat in eleven workshops.';
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); }); });
    setMode('diverge');
    if (!reduce) setTimeout(function () { setMode('converge'); }, 1400); else setMode('converge');
  }

  /* ---------- workshops: the held frame builds the workshop that crosses it ---------- */
  var frameCanvas = document.getElementById('frame-field');
  var names = Array.prototype.slice.call(document.querySelectorAll('.ws-name'));
  if (frameCanvas && names.length) {
    var ff = new BrickField(frameCanvas, { yaw: 0.8, pitch: 0.62, zoom: 0.95, animDur: 900, mode: 'converge' });
    fields.push(ff);
    var facts = { left: document.getElementById('fact-left'), right: document.getElementById('fact-right') };
    var current = -1;
    function show(i) {
      if (i === current) return; current = i;
      var w = DATA.workshops[i];
      var n = w.count || 0;
      // without a headcount, show the empty baseplate as a single white plate
      var FRAME_COLORS = ['#1537C7', '#FFC21A', '#0B1B4D'];
      ff.set([{ n: n || 1, color: n ? FRAME_COLORS[i % 3] : '#9DB1F5' }], 100 + i * 37);
      ff.t = 0; ff.mode = 'diverge'; ff.go('converge');
      if (facts.left) facts.left.textContent = w.venueShort;
      if (facts.right) facts.right.textContent = w.when + ', ' + w.audience.toLowerCase();
      names.forEach(function (el, k) { el.classList.toggle('is-current', k === i); });
    }
    show(0);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) show(+e.target.getAttribute('data-i')); });
      }, { rootMargin: '-49% 0px -49% 0px' });
      names.forEach(function (n) { io.observe(n); });
    }
    names.forEach(function (n) { n.addEventListener('focus', function () { show(+n.getAttribute('data-i')); }); });
  }

  /* ---------- talks and conferences: the travel map ---------- */
  var map = document.getElementById('map');
  if (map && map.getContext) {
    var mctx = map.getContext('2d');
    var cities = DATA.cities; var active = 'milan';
    var mapLabel = document.getElementById('map-label');
    function drawMap() {
      var r = map.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      map.width = r.width * dpr; map.height = r.height * dpr;
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0); mctx.clearRect(0, 0, r.width, r.height);
      var lon0 = -26, lon1 = 38, lat0 = 25, lat1 = 67, pad = 28;
      var kx = Math.cos(48 * Math.PI / 180);
      var sx = (r.width - pad * 2) / ((lon1 - lon0) * kx), syy = (r.height - pad * 2) / (lat1 - lat0);
      var s = Math.min(sx, syy);
      var offx = (r.width - (lon1 - lon0) * kx * s) / 2, offy = (r.height - (lat1 - lat0) * s) / 2;
      function P(c) { return [offx + (c.lon - lon0) * kx * s, offy + (lat1 - c.lat) * s]; }
      // graticule of dots, drawn as a field of small points
      mctx.fillStyle = 'rgba(255,255,255,0.18)';
      for (var lo = -25; lo <= 37; lo += 2) for (var la = 26; la <= 66; la += 2) { var p = P({ lon: lo, lat: la }); mctx.fillRect(p[0] - 0.75, p[1] - 0.75, 1.5, 1.5); }
      var home = P(cities.milan);
      Object.keys(cities).forEach(function (k) {
        var c = cities[k]; if (c.lat == null || k === 'milan') return;
        var p = P(c);
        mctx.strokeStyle = k === active ? '#FFD43B' : 'rgba(255,255,255,0.35)';
        mctx.lineWidth = k === active ? 3 : 1.25;
        mctx.beginPath(); mctx.moveTo(home[0], home[1]);
        var mx = (home[0] + p[0]) / 2, my = (home[1] + p[1]) / 2 - Math.hypot(p[0] - home[0], p[1] - home[1]) * 0.22;
        mctx.quadraticCurveTo(mx, my, p[0], p[1]); mctx.stroke();
      });
      Object.keys(cities).forEach(function (k) {
        var c = cities[k]; if (c.lat == null) return;
        var p = P(c), on = k === active || (active === 'milan' && k === 'milan');
        mctx.fillStyle = on ? '#FFD43B' : '#FFFFFF';
        mctx.beginPath(); mctx.arc(p[0], p[1], on ? 9 : (k === 'milan' ? 6 : 4.5), 0, Math.PI * 2); mctx.fill();
      });
      if (mapLabel) mapLabel.textContent = active === 'online' ? 'Online' : cities[active].name;
    }
    drawMap(); window.addEventListener('resize', drawMap);
    var rows = Array.prototype.slice.call(document.querySelectorAll('[data-city]'));
    function activate(row) {
      rows.forEach(function (r) { r.classList.toggle('is-active', r === row); });
      active = row.getAttribute('data-city'); drawMap();
    }
    rows.forEach(function (r) {
      r.addEventListener('mouseenter', function () { activate(r); });
      r.addEventListener('focus', function () { activate(r); });
    });
    if ('IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) activate(e.target); }); }, { rootMargin: '-45% 0px -54% 0px' });
      rows.forEach(function (r) { io2.observe(r); });
    }
  }

  /* ---------- the email address is stored encrypted and decrypted on request ---------- */
  var reveal = document.getElementById('reveal');
  if (reveal) {
    reveal.addEventListener('click', function () {
      var box = document.getElementById('email');
      function b64(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
      function done(addr) {
        var a = document.createElement('a');
        a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('Workshop or collaboration');
        a.className = 'email-link';
        var at = addr.indexOf('@');
        a.innerHTML = '';
        a.appendChild(document.createTextNode(addr.slice(0, at + 1)));
        a.appendChild(document.createElement('wbr'));
        a.appendChild(document.createTextNode(addr.slice(at + 1)));
        box.replaceChildren(a); a.focus();
      }
      var k = DATA.lock;
      if (window.crypto && crypto.subtle) {
        crypto.subtle.importKey('raw', b64(k.key), 'AES-GCM', false, ['decrypt'])
          .then(function (key) { return crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(k.iv) }, key, b64(k.data)); })
          .then(function (buf) { done(new TextDecoder().decode(buf)); })
          .catch(function () { box.textContent = 'The address could not be decrypted in this browser. Find Rocco on LinkedIn as Rocco Acocella.'; });
      }
    });
  }

  /* ---------- entrances, once per section, content visible without script ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var parts = document.querySelectorAll('[data-rise]');
    var io3 = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        var kids = e.target.querySelectorAll(':scope > *');
        kids.forEach(function (k, i) { k.style.transitionDelay = (i * 75) + 'ms'; k.classList.add('in'); });
        io3.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    parts.forEach(function (p) { p.classList.add('rise'); io3.observe(p); });
  }

  requestAnimationFrame(loop);
})();

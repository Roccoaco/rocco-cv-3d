/* Rocco Acocella CV: brick field, workshop frame, travel map, email reveal, talk filter.
   No third-party code, no network calls, no cookies. The talk colours a visitor picks stay in their own browser. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DATA = JSON.parse(document.getElementById('cv-data').textContent);

  /* ---------- older Safari (before 15) has no CSS aspect-ratio: give those boxes a height from their width.
     Runs before the canvases measure themselves, and its resize listener runs before theirs. ---------- */
  if (!(window.CSS && CSS.supports && CSS.supports('aspect-ratio', '1 / 1'))) {
    var narrow = window.matchMedia('(max-width: 700px)');
    var fitRatios = function () {
      [['#frame-field', 1], ['.places-map', narrow.matches ? 1 : 1.25], ['.map-wrap', narrow.matches ? 0 : 0.8], ['.app-frame', 16 / 9],
        ['.al-open canvas', 1048 / 1424], ['.al-dialog canvas', 1048 / 1424], ['.bodymap img', 0.5], ['.photo img', 1.5]].forEach(function (r) {
        Array.prototype.forEach.call(document.querySelectorAll(r[0]), function (el) {
          var w = el.getBoundingClientRect().width;
          if (r[1] && w) el.style.height = (w / r[1]) + 'px';
        });
      });
    };
    fitRatios(); window.addEventListener('resize', fitRatios);
  }

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

  function isDark(hex) { var c = hexToRgb(hex); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] < 70; }
  var BRICK_COLORS = ['#FFFFFF', '#FFD43B', '#9DB1F5', '#0B1B4D'];
  var W = '#FFFFFF', Y = '#FFD43B', L = '#9DB1F5', N = '#0B1B4D', O = '#FF9F1C', P = '#C9D4FF';

  /* ---------- one brick model per workshop, built from what the workshop did (n = seats) ---------- */
  var TAU = Math.PI * 2;
  function towerRing(n, k, radius, colours, perLayer) {
    // k towers on a circle, bricks shared out between them, perLayer bricks per layer (1 or 2, crossed)
    var out = [], each = [];
    for (var t = 0; t < k; t++) each.push(Math.floor(n / k) + (t < n % k ? 1 : 0));
    each.forEach(function (m, t) {
      var a = t / k * TAU, x = Math.cos(a) * radius, z = Math.sin(a) * radius;
      for (var i = 0; i < m; i++) {
        var layer = perLayer === 2 ? Math.floor(i / 2) : i, side = perLayer === 2 ? (i % 2 ? 0.5 : -0.5) : 0;
        var rot = a + Math.PI / 2 + (perLayer === 2 && layer % 2 ? Math.PI / 2 : 0);
        out.push({ x: x + Math.cos(rot + Math.PI / 2) * side, y: layer, z: z + Math.sin(rot + Math.PI / 2) * side, r: rot, c: colours(t, i) });
      }
    });
    return out;
  }
  var MODELS = {
    // Multilingualism: one brick per teacher, a ring of voices around a shared centre, a colour for each
    ring: function (n) {
      var cols = [Y, W, L, O, P, W, Y, L], per = Math.max(6, Math.min(10, n)), out = [];
      for (var i = 0; i < n; i++) {
        var layer = Math.floor(i / per), a = (i % per) / per * TAU + layer * Math.PI / per, R = per * 2.15 / TAU;
        out.push({ x: Math.cos(a) * R, y: layer, z: Math.sin(a) * R, r: a + Math.PI / 2, c: cols[i % cols.length] });
      }
      return out;
    },
    // Chromasoma: colour as a shared field; a double helix that runs through the palette
    spiral: function (n) {
      var cols = [N, L, W, Y, O], out = [];
      for (var i = 0; i < n; i++) {
        var layer = Math.floor(i / 2), a = layer * 0.55 + (i % 2) * Math.PI;
        out.push({ x: Math.cos(a) * 3, y: layer, z: Math.sin(a) * 3, r: a + Math.PI / 2, c: cols[Math.floor(layer / 2.6) % cols.length] });
      }
      return out;
    },
    // Alternating Attention: the card deck; one pile fanned out (divergent), one squared up (convergent)
    deck: function (n) {
      var out = [], half = Math.ceil(n / 2);
      for (var i = 0; i < n; i++) {
        var fan = i < half, j = fan ? i : i - half, layer = Math.floor(j / 2), side = j % 2 ? 0.5 : -0.5;
        var r = fan ? layer * 0.32 : 0, cx = fan ? -3.6 : 3.6;
        out.push({ x: cx - Math.sin(r) * side, y: layer, z: Math.cos(r) * side, r: r, c: fan ? (layer % 2 ? Y : W) : (layer % 2 ? L : W) });
      }
      return out;
    },
    // Idea Bouncing / LEGOciation: two speakers, and the ideas that bounce between them as an arch
    arch: function (n) {
      var out = [], p = Math.max(2, Math.floor(n * 0.3)), m = n - 2 * p, S = Math.max(3, m * 2 / Math.PI * 0.95);
      for (var i = 0; i < p; i++) { out.push({ x: -S, y: i, z: 0, r: Math.PI / 2, c: N }); out.push({ x: S, y: i, z: 0, r: Math.PI / 2, c: N }); }
      for (var j = 0; j < m; j++) {
        var t = (j + 0.5) / m * Math.PI;
        out.push({ x: -Math.cos(t) * S, y: p + Math.sin(t) * S / 1.2, z: 0, r: 0, c: j % 2 ? Y : W });
      }
      return out;
    },
    // Productive Friction: the conference ends and the network lives on in small local hubs
    hubs: function (n) {
      var k = Math.max(3, Math.round(n / 6)), cols = [Y, W, L, W, Y, L, W];
      return towerRing(n, k, 5.2, function (t) { return cols[t % cols.length]; }, 2);
    },
    // From Idea to Creation: loose ideas on one side, a purposeful build on the other
    creation: function (n) {
      var R = rng(n * 13 + 5), out = [], loose = Math.max(3, Math.round(n * 0.35)), built = n - loose, w = 1;
      while (w * (w + 1) / 2 < built) w++;
      for (var i = 0; i < loose; i++) out.push({ x: -9 + R() * 5, y: 0, z: -3 + R() * 6, r: R() * TAU, c: i % 2 ? L : W });
      var left = built, layer = 0;
      for (var row = w; row > 0 && left > 0; row--, layer++) {
        for (var b = 0; b < row && left > 0; b++, left--) out.push({ x: 3 + (b - (row - 1) / 2) * 2.04, y: layer, z: 0, r: 0, c: layer % 2 ? Y : W });
      }
      return out;
    },
    // Thinker: the ten attributes of the IB Learner Profile as ten towers; Thinker in yellow
    profile: function (n) {
      return towerRing(n, 10, 6.2, function (t) { return t === 0 ? Y : (t % 2 ? W : L); }, 1);
    },
    // R(AI)sing Awareness: prompt frameworks as steps that raise the work one level at a time
    stairs: function (n) {
      var out = [], col = 0, left = n;
      while (left > 0) {
        for (var h = 0; h <= col && left > 0; h++) for (var d = 0; d < 2 && left > 0; d++, left--) {
          out.push({ x: col * 2.04, y: h, z: d ? 0.52 : -0.52, r: 0, c: h === col ? Y : (h % 2 ? L : W) });
        }
        col++;
      }
      return out;
    },
    // The Thinking Journey: nine thematic stations of LEGOciation, visited in turn
    stations: function (n) {
      var cols = [Y, W, L, W, Y, L, W, L, Y];
      return towerRing(n, 9, 6.4, function (t) { return cols[t]; }, 2);
    },
    // Creative Mindset: growth; every layer wider than the one below
    growth: function (n) {
      var out = [], layer = 0, left = n, cols = [N, L, W, Y, Y];
      while (left > 0) {
        var row = Math.min(layer + 1, left);
        for (var b = 0; b < row; b++, left--) out.push({ x: (b - (row - 1) / 2) * 2.04, y: layer, z: 0, r: 0, c: cols[Math.min(layer, cols.length - 1)] });
        layer++;
      }
      return out;
    },
    // Human Rights & the Brain: a bridge between past (navy) and future (yellow)
    bridge: function (n) {
      var out = [], pier = Math.max(2, Math.floor(n * 0.2)), deck = n - 2 * pier, span = deck * 2.04;
      for (var i = 0; i < pier; i++) { out.push({ x: -span / 2 + 3, y: i, z: 0, r: Math.PI / 2, c: N }); out.push({ x: span / 2 - 3, y: i, z: 0, r: Math.PI / 2, c: L }); }
      for (var j = 0; j < deck; j++) { var t = j / Math.max(1, deck - 1); out.push({ x: -span / 2 + 1 + j * 2.04, y: pier, z: 0, r: 0, c: t < 0.34 ? N : t < 0.67 ? W : Y }); }
      return out;
    },
    // The Creative Mindset Journey: a winding road that climbs as it goes
    path: function (n) {
      var out = [];
      for (var i = 0; i < n; i++) {
        var t = n > 1 ? i / (n - 1) : 0, x = (t - 0.5) * n * 1.5, z = Math.sin(t * TAU) * 3.2;
        var dz = Math.cos(t * TAU) * 3.2 * TAU / (n * 1.5);
        out.push({ x: x, y: Math.floor(i / 4), z: z, r: Math.atan2(dz, 1), c: t < 0.5 ? (i % 2 ? L : W) : (i % 2 ? Y : W) });
      }
      return out;
    }
  };
  // long models are seen side-on, round ones from the corner: [yaw, pitch, zoom]
  var VIEW = { arch: [0.22, 0.42, 1.1], bridge: [0.2, 0.5, 1.22], path: [0.3, 0.6, 1.26], deck: [0.3, 0.45, 1], creation: [0.35, 0.5, 1.15], spiral: [0.6, 0.45, 1.15], growth: [0.45, 0.45, 1.05] };
  function viewFor(w) { return VIEW[w.model] || [0.7, 0.55, 0.95]; }
  function modelFor(w, i) { return (MODELS[w.model] || MODELS.ring)(Math.max(1, w.count || 1)); }

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
    canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY, yaw: self.yaw, pitch: self.pitch }; canvas.setPointerCapture(e.pointerId); self.dragging = true; });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      self.yaw = drag.yaw + (e.clientX - drag.x) * 0.008;
      self.pitch = Math.max(0.2, Math.min(1.1, drag.pitch + (e.clientY - drag.y) * 0.004));
      self.dirty = true;
    });
    function end() { drag = null; self.dragging = false; }
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
    // groups: [{n, color}] stacked bottom to top, one storey each
    var list = [];
    groups.forEach(function (g, gi) { slab(g.n).forEach(function (p) { list.push({ x: p[0], y: gi, z: p[1], r: 0, c: g.color }); }); });
    this.setBricks(list, seed);
  };
  // list: [{x, y (layer), z, r (turn about the vertical), c}] in brick units (a brick is 2 x 1, a layer 1.2 high)
  BrickField.prototype.setBricks = function (list, seed) {
    var R = rng(seed || 7), bricks = [], minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, top = 0;
    list.forEach(function (b) { minX = Math.min(minX, b.x); maxX = Math.max(maxX, b.x); minZ = Math.min(minZ, b.z); maxZ = Math.max(maxZ, b.z); top = Math.max(top, b.y + 1); });
    var mx = (minX + maxX) / 2, mz = (minZ + maxZ) / 2, height = top * 1.2;
    var spread = 7 + Math.cbrt(list.length) * 1.6;
    list.forEach(function (b) {
      var th = R() * Math.PI * 2, ph = Math.acos(2 * R() - 1), rr = spread * Math.cbrt(R());
      bricks.push({
        cx: b.x - mx, cy: b.y * 1.2, cz: b.z - mz, tr: b.r || 0,
        dx: rr * Math.sin(ph) * Math.cos(th), dy: rr * Math.cos(ph) * 0.8 + height / 2, dz: rr * Math.sin(ph) * Math.sin(th),
        dr: R() * Math.PI * 2, delay: R() * 0.35, col: hexToRgb(b.c), dark: isDark(b.c)
      });
    });
    this.height = height; this.bricks = bricks; this.dirty = true;
    var maxR = 0; bricks.forEach(function (b) { maxR = Math.max(maxR, Math.hypot(b.cx, b.cz) + 1.2); });
    this.radius = Math.max(maxR, height * 0.62, 4);
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
    // keeps turning after a click or a drag (it only holds still while being dragged), and scattered bricks float
    this.clock = (this.clock || 0) + dt;
    if (this.spin && !this.dragging) { this.yaw += dt * 0.00012; this.dirty = true; }
    else if (this.spin) this.dirty = true;
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
      var fl = this.spin ? (1 - k) * Math.sin((this.clock || 0) * 0.0011 + b.dr * 3) : 0;
      var x = b.dx + (b.cx - b.dx) * k, y = b.dy + (b.cy - b.dy) * k + fl * 0.45, z = b.dz + (b.cz - b.dz) * k;
      var r = b.tr + b.dr * (1 - k) + fl * 0.2;
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
        // navy bricks get a fine light edge, so they still read against the blue field
        if (br.dark) { ctx.strokeStyle = 'rgba(201,212,255,0.55)'; ctx.lineWidth = 1; ctx.lineJoin = 'round'; ctx.stroke(); }
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
    var hero = new BrickField(heroCanvas, { yaw: 0.65, pitch: 0.5, zoom: 0.82, lift: 0 });
    hero.set(counted.map(function (w, i) { return { n: w.count, color: BRICK_COLORS[i % 3] }; }), 1965);
    fields.push(hero);
    var btns = document.querySelectorAll('[data-mode]');
    function setMode(m) {
      hero.go(m);
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === m)); });
      var cap = document.getElementById('field-state');
      if (cap) cap.textContent = m === 'converge'
        ? 'Converged: each storey is one workshop, oldest at the base.'
        : 'Diverged: ' + DATA.seats + ' bricks, one for every seat in ' + DATA.countedWords + ' workshops.';
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
      var v = viewFor(w); ff.yaw = v[0]; ff.pitch = v[1]; ff.zoom = v[2] * 0.95;
      ff.setBricks(modelFor(w, i), 100 + i * 37);
      ff.anim = 0; ff.mode = 'converge';
      if (facts.left) facts.left.textContent = w.place;
      if (facts.right) facts.right.textContent = w.when + ', ' + w.audience.replace(/^(\d+\s+)([A-Z])(?=[a-z])/, function (m, a, b) { return a + b.toLowerCase(); });
      names.forEach(function (el, k) { el.classList.toggle('is-current', k === i); });
    }
    // the model is tied to the scroll: the name nearest the middle of the screen owns the frame, and its bricks
    // assemble as the name approaches the middle, hold while it is there, and scatter as it moves on
    var ticking = false;
    function sync() {
      ticking = false;
      var mid = window.innerHeight / 2, best = 0, bestD = Infinity, centres = [];
      names.forEach(function (el, k) {
        var r = el.getBoundingClientRect(), c = r.top + r.height / 2; centres.push(c);
        var d = Math.abs(c - mid); if (d < bestD) { bestD = d; best = k; }
      });
      var gap = names.length > 1 ? Math.abs(centres[Math.min(best + 1, names.length - 1)] - centres[Math.max(best - 1, 0)]) / (best > 0 && best < names.length - 1 ? 2 : 1) : window.innerHeight;
      show(best);
      var t = reduce ? 1 : Math.max(0, Math.min(1, (1 - bestD / (gap * 0.5)) * 1.6));
      if (Math.abs(ff.t - t) > 0.001) { ff.t = t; ff.dirty = true; }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(sync); } }
    show(0); ff.t = 1; sync();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    names.forEach(function (n) { n.addEventListener('focus', function () { show(+n.getAttribute('data-i')); ff.t = 1; ff.dirty = true; }); });
  }

  /* ---------- maps: Natural Earth land, equirectangular with a cos(latitude) squeeze ---------- */
  function mapFrame(canvas, box, pad) {
    var r = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, r.width * dpr); canvas.height = Math.max(1, r.height * dpr);
    var ctx = canvas.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, r.width, r.height);
    var kx = Math.cos((box[1] + box[3]) / 2 * Math.PI / 180);
    var s = Math.min((r.width - pad * 2) / ((box[2] - box[0]) * kx), (r.height - pad * 2) / (box[3] - box[1]));
    var offx = (r.width - (box[2] - box[0]) * kx * s) / 2, offy = (r.height - (box[3] - box[1]) * s) / 2;
    return { ctx: ctx, w: r.width, h: r.height, P: function (lon, lat) { return [offx + (lon - box[0]) * kx * s, offy + (box[3] - lat) * s]; } };
  }
  function drawLand(f, fill) {
    var land = DATA.land; if (!land) return;
    f.ctx.fillStyle = fill; f.ctx.beginPath();
    for (var i = 0; i < land.length; i++) {
      var r = land[i];
      for (var j = 0; j < r.length; j += 2) { var p = f.P(r[j], r[j + 1]); if (j) f.ctx.lineTo(p[0], p[1]); else f.ctx.moveTo(p[0], p[1]); }
      f.ctx.closePath();
    }
    f.ctx.fill('evenodd');
  }
  var cities = DATA.cities;
  function cityLabel(k) { var c = cities[k]; return c.inset ? 'Online, ' + c.region : (c.country ? c.name + ', ' + c.country : c.name); }

  /* California inset, bottom left: Saybrook University (Pasadena), home of the C.R.E.A.T.E. hub, which meets online */
  var CA_BOX = [-124.6, 31.6, -113.4, 42.4];
  function insetFrame(f) {
    var iw = Math.max(132, Math.min(f.w * 0.27, 210)), ih = iw * 0.92, x = 12, y = f.h - ih - 12;
    var kx = Math.cos((CA_BOX[1] + CA_BOX[3]) / 2 * Math.PI / 180);
    var s = Math.min(iw / ((CA_BOX[2] - CA_BOX[0]) * kx), ih / (CA_BOX[3] - CA_BOX[1]));
    var P = function (lon, lat) { return [x + (lon - CA_BOX[0]) * kx * s, y + (CA_BOX[3] - lat) * s]; };
    return { x: x, y: y, iw: iw, ih: ih, P: P, at: P(cities.pasadena.lon, cities.pasadena.lat) };
  }
  function drawInset(f, on) {
    var ctx = f.ctx, g = insetFrame(f), x = g.x, y = g.y, iw = g.iw, ih = g.ih, P = g.P;
    ctx.save();
    ctx.fillStyle = '#0B1B4D'; ctx.fillRect(x, y, iw, ih);
    ctx.beginPath(); ctx.rect(x, y, iw, ih); ctx.clip();
    var land = DATA.landCa || [];
    ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.beginPath();
    for (var i = 0; i < land.length; i++) {
      var r = land[i];
      for (var j = 0; j < r.length; j += 2) { var q = P(r[j], r[j + 1]); if (j) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
      ctx.closePath();
    }
    ctx.fill('evenodd');
    ctx.restore();
    ctx.strokeStyle = on ? '#FFD43B' : 'rgba(255,255,255,0.45)'; ctx.lineWidth = on ? 2 : 1;
    ctx.strokeRect(x + 0.5, y + 0.5, iw - 1, ih - 1);
    // the hub's name sits in the top-left corner (over the Pacific), so nothing runs past the inset
    var small = iw < 170, fs = small ? 10 : 12, F = '"Libre Franklin", system-ui, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = '#FFFFFF';
    ctx.font = (on ? '800 ' : '700 ') + (fs + 1) + 'px ' + F; ctx.fillText('C.R.E.A.T.E.', x + 8, y + 8);
    ctx.font = '500 ' + fs + 'px ' + F; ctx.fillText('Saybrook University', x + 8, y + 10 + fs + 2);
    ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fillText('California, online', x + 8, y + 12 + (fs + 2) * 2);
    return { P: g.at, small: small };
  }

  /* ---------- places: every city where Rocco has given a talk or a workshop ---------- */
  var placesCanvas = document.getElementById('places-map');
  if (placesCanvas && placesCanvas.getContext && DATA.places) {
    var hot = null;
    var placeItems = Array.prototype.slice.call(document.querySelectorAll('[data-place]'));
    function drawPlaces() {
      var f = mapFrame(placesCanvas, [-26, 37.5, 25, 66.5], 24), ctx = f.ctx;
      drawLand(f, 'rgba(255,255,255,0.16)');
      var small = f.w < 560;
      DATA.places.forEach(function (pl) {
        var c = cities[pl.city], p = f.P(c.lon, c.lat), on = pl.city === hot;
        var rad = (small ? 3 : 4) + Math.sqrt(pl.n) * (small ? 2.2 : 3.2);
        ctx.fillStyle = on ? '#FFFFFF' : '#FFD43B';
        ctx.beginPath(); ctx.arc(p[0], p[1], rad + (on ? 3 : 0), 0, TAU); ctx.fill();
        ctx.fillStyle = '#0B1B4D'; ctx.font = '700 ' + (small ? 11 : 13) + 'px "Libre Franklin", system-ui, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(pl.n), p[0], p[1] + 0.5);
        if (small && !on && pl.n < 2 && c.lab === 'l') return;
        ctx.fillStyle = '#FFFFFF'; ctx.font = (on ? '800 ' : '600 ') + (small ? 12 : 15) + 'px "Libre Franklin", system-ui, sans-serif';
        var gap = rad + 7;
        if (c.lab === 'l') { ctx.textAlign = 'right'; ctx.fillText(c.name, p[0] - gap, p[1]); }
        else if (c.lab === 'b') { ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText(c.name, p[0], p[1] + gap - 3); }
        else { ctx.textAlign = 'left'; ctx.fillText(c.name, p[0] + gap, p[1]); }
      });
      (DATA.hubPlaces || []).forEach(function (hp) {
        var on = hp.city === hot, ins = drawInset(f, on), p = ins.P;
        var rad = (small ? 3 : 4) + Math.sqrt(hp.n) * (small ? 2.2 : 3.2);
        ctx.fillStyle = on ? '#FFFFFF' : '#FFD43B';
        ctx.beginPath(); ctx.arc(p[0], p[1], rad + (on ? 3 : 0), 0, TAU); ctx.fill();
        ctx.fillStyle = '#0B1B4D'; ctx.font = '700 ' + (small ? 11 : 13) + 'px "Libre Franklin", system-ui, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(hp.n), p[0], p[1] + 0.5);
      });
    }
    drawPlaces(); window.addEventListener('resize', drawPlaces);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawPlaces);
    placeItems.forEach(function (li) {
      function on() { hot = li.getAttribute('data-place'); placeItems.forEach(function (o) { o.classList.toggle('is-active', o === li); }); drawPlaces(); }
      function off() { hot = null; li.classList.remove('is-active'); drawPlaces(); }
      li.addEventListener('mouseenter', on); li.addEventListener('focus', on);
      li.addEventListener('mouseleave', off); li.addEventListener('blur', off);
    });
  }

  /* ---------- talks and conferences: the travel map ---------- */
  var map = document.getElementById('map');
  if (map && map.getContext) {
    var active = 'milan';
    var mapLabel = document.getElementById('map-label');
    function drawMap() {
      var f = mapFrame(map, [-26, 25, 38, 67], 28), mctx = f.ctx;
      drawLand(f, 'rgba(255,255,255,0.16)');
      // the inset is laid over the arcs, so the line to California stops at its edge, as on a printed map
      var home = f.P(cities.milan.lon, cities.milan.lat), insAt = insetFrame(f).at;
      function at(k) { return cities[k].inset ? insAt : f.P(cities[k].lon, cities[k].lat); }
      Object.keys(cities).forEach(function (k) {
        var c = cities[k]; if (c.lat == null || k === 'milan') return;
        var p = at(k);
        mctx.strokeStyle = k === active ? '#FFD43B' : 'rgba(255,255,255,0.4)';
        mctx.lineWidth = k === active ? 3 : 1.25;
        mctx.beginPath(); mctx.moveTo(home[0], home[1]);
        var mx = (home[0] + p[0]) / 2, my = (home[1] + p[1]) / 2 - Math.hypot(p[0] - home[0], p[1] - home[1]) * 0.22;
        mctx.quadraticCurveTo(mx, my, p[0], p[1]); mctx.stroke();
      });
      drawInset(f, active === 'pasadena');
      Object.keys(cities).forEach(function (k) {
        var c = cities[k]; if (c.lat == null) return;
        var p = at(k), on = k === active || (active === 'milan' && k === 'milan');
        mctx.fillStyle = on ? '#FFD43B' : '#FFFFFF';
        mctx.beginPath(); mctx.arc(p[0], p[1], on ? 9 : (k === 'milan' ? 6 : 4.5), 0, TAU); mctx.fill();
      });
      if (mapLabel) mapLabel.textContent = cityLabel(active);
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

  /* ---------- a workshop's own page: its model, large ---------- */
  var modelCanvas = document.getElementById('model');
  if (modelCanvas && modelCanvas.getContext) {
    var wi = +modelCanvas.getAttribute('data-i'), ww = DATA.workshops[wi];
    var mv = viewFor(ww);
    var mf = new BrickField(modelCanvas, { yaw: mv[0], pitch: mv[1], zoom: mv[2], animDur: 1800 });
    mf.setBricks(modelFor(ww, wi), 300 + wi * 41);
    fields.push(mf);
    var mbtns = document.querySelectorAll('[data-mode]');
    function setM(m) { mf.go(m); mbtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === m)); }); }
    mbtns.forEach(function (b) { b.addEventListener('click', function () { setM(b.getAttribute('data-mode')); }); });
    setM('diverge');
    if (!reduce) setTimeout(function () { setM('converge'); }, 900); else setM('converge');
  }

  /* ---------- the Alchemy Cycle: decrypted in memory and painted to canvas, never an image file or URL ---------- */
  var AL = window.CV_ALCHEMY, alOpen = document.getElementById('al-open');
  if (AL && DATA.alchemyKey && alOpen && window.crypto && crypto.subtle && window.createImageBitmap) {
    window.CV_ALCHEMY = null;
    var alThumb = document.getElementById('al-thumb'), alFull = document.getElementById('al-full');
    var alDlg = document.getElementById('al-dialog'), alBmp = null;
    function u8(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
    function paint(cv) {
      if (!alBmp) return;
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = Math.min(Math.round(r.width * dpr), alBmp.width); if (w < 2) return;
      cv.width = w; cv.height = Math.round(w * alBmp.height / alBmp.width);
      var c = cv.getContext('2d'); c.imageSmoothingQuality = 'high'; c.drawImage(alBmp, 0, 0, cv.width, cv.height);
    }
    crypto.subtle.importKey('raw', u8(DATA.alchemyKey), 'AES-GCM', false, ['decrypt'])
      .then(function (k) { return crypto.subtle.decrypt({ name: 'AES-GCM', iv: u8(AL.iv) }, k, u8(AL.data)); })
      .then(function (buf) { AL = null; return createImageBitmap(new Blob([buf], { type: 'image/jpeg' })); })
      .then(function (bmp) { alBmp = bmp; alOpen.hidden = false; paint(alThumb); })
      .catch(function () {});
    window.addEventListener('resize', function () { paint(alThumb); if (alDlg.open) paint(alFull); });
    alOpen.addEventListener('click', function () { if (alDlg.showModal) { alDlg.showModal(); paint(alFull); } });
    document.getElementById('al-close').addEventListener('click', function () { alDlg.close(); });
    alDlg.addEventListener('click', function (e) { if (e.target === alDlg) alDlg.close(); });
    // no context menu, no dragging the picture out, nothing to select
    document.querySelectorAll('.guarded').forEach(function (g) {
      g.addEventListener('contextmenu', function (e) { e.preventDefault(); });
      g.addEventListener('dragstart', function (e) { e.preventDefault(); });
    });
    window.addEventListener('beforeprint', function () { [alThumb, alFull].forEach(function (cv) { cv.width = 1; cv.height = 1; }); });
    window.addEventListener('afterprint', function () { paint(alThumb); if (alDlg.open) paint(alFull); });
  }

  /* ---------- the email address is stored encrypted and decrypted on request ---------- */
  var reveal = document.getElementById('reveal');
  if (reveal && DATA.lock) {
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
        if (box.replaceChildren) box.replaceChildren(a); else { while (box.firstChild) box.removeChild(box.firstChild); box.appendChild(a); } a.focus();
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


  /* ---------- talks: show in person or online, in colours the reader picks (kept in this browser only) ---------- */
  var tfBtns = Array.prototype.slice.call(document.querySelectorAll('.tf-btn'));
  var talkRowsEl = Array.prototype.slice.call(document.querySelectorAll('.talk-rows .row'));
  var tfStatus = document.querySelector('.tf-status');
  if (tfBtns.length && talkRowsEl.length) {
    var NAMES = { inperson: 'in-person', online: 'online' };
    tfBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var show = b.getAttribute('data-show'), n = 0;
        tfBtns.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
        talkRowsEl.forEach(function (r) { var on = show === 'all' || r.getAttribute('data-mode') === show; r.hidden = !on; if (on) n++; });
        if (tfStatus) tfStatus.textContent = 'Showing ' + n + (show === 'all' ? ' talks' : ' ' + NAMES[show] + ' talk' + (n === 1 ? '' : 's')) + '.';
      });
    });

    var rootStyle = document.documentElement.style, KEY = 'talk-colours', chosen = {};
    var swatchBtns = Array.prototype.slice.call(document.querySelectorAll('.tf-sw'));
    var pickers = Array.prototype.slice.call(document.querySelectorAll('.tf-custom input'));
    function paint() {
      ['inperson', 'online'].forEach(function (m) {
        if (chosen[m]) rootStyle.setProperty('--c-' + m, chosen[m]); else rootStyle.removeProperty('--c-' + m);
      });
      swatchBtns.forEach(function (b) {
        var m = b.getAttribute('data-for');
        b.setAttribute('aria-pressed', String(!!chosen[m] && chosen[m].toLowerCase() === b.getAttribute('data-colour').toLowerCase()));
      });
      pickers.forEach(function (p) { var m = p.getAttribute('data-for'); if (chosen[m]) p.value = chosen[m]; });
    }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(chosen)); } catch (e) {} }
    try { var saved = JSON.parse(localStorage.getItem(KEY) || '{}'); if (saved && typeof saved === 'object') chosen = saved; } catch (e) {}
    ['inperson', 'online'].forEach(function (m) { if (chosen[m] && !/^#[0-9a-f]{6}$/i.test(chosen[m])) delete chosen[m]; });
    paint();
    function choose(m, c) { chosen[m] = c; paint(); save(); if (tfStatus) tfStatus.textContent = (m === 'online' ? 'Online' : 'In-person') + ' talks recoloured.'; }
    swatchBtns.forEach(function (b) { b.addEventListener('click', function () { choose(b.getAttribute('data-for'), b.getAttribute('data-colour')); }); });
    pickers.forEach(function (p) { p.addEventListener('input', function () { choose(p.getAttribute('data-for'), p.value); }); });
    var reset = document.querySelector('.tf-reset');
    if (reset) reset.addEventListener('click', function () { chosen = {}; paint(); try { localStorage.removeItem(KEY); } catch (e) {} if (tfStatus) tfStatus.textContent = 'Colours back to the defaults.'; });
  }


  /* ---------- jumps land at the top: a link to a section brings the section's first content (its heading,
     or the Talks map on a phone) to just under the top bar, not the empty space above it. Links arriving
     from another page wait until the page has settled, then land the same way. ---------- */
  function landOn(id, smooth) {
    var el = id && document.getElementById(id);
    if (!el) return false;
    // where the content starts: the section's top plus its own padding (sticky children would mislead)
    var pad = parseFloat(getComputedStyle(el).paddingTop) || 0;
    var bar = document.querySelector('.bar'), barH = bar ? bar.offsetHeight : 0;
    var y = window.pageYOffset + el.getBoundingClientRect().top + pad - barH - 20;
    var html = document.documentElement, was = html.style.scrollBehavior;
    if (!smooth || reduce) html.style.scrollBehavior = 'auto';
    window.scrollTo(0, Math.max(0, y));
    if (!smooth || reduce) html.style.scrollBehavior = was;
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({ preventScroll: true }); } catch (e) {}
    return true;
  }
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href*="#"]') : null;
    if (!a || a.target === '_blank') return;
    var url = a.href.split('#'), here = location.href.split('#')[0];
    if (url[0] !== here || !url[1]) return;
    if (landOn(decodeURIComponent(url[1]), true)) {
      e.preventDefault();
      if (history.pushState) history.pushState(null, '', '#' + url[1]);
    }
  });
  if (location.hash.length > 1) {
    var arrive = decodeURIComponent(location.hash.slice(1));
    var settle = function () { landOn(arrive, false); };
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    settle();
    window.addEventListener('load', function () { settle(); setTimeout(settle, 350); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
  }


  /* ---------- the timeline pop-up: every date on the site, filters by kind, a year index, a filling rail ---------- */
  var tl = document.getElementById('timeline'), tlOpen = document.getElementById('tl-open');
  if (tl && tlOpen) {
    var tlScroll = document.getElementById('tl-scroll'), tlFill = document.getElementById('tl-fill');
    var tlItems = Array.prototype.slice.call(tl.querySelectorAll('.tl-item'));
    var tlYearsSec = Array.prototype.slice.call(tl.querySelectorAll('.tl-year'));
    var tlYearLinks = Array.prototype.slice.call(tl.querySelectorAll('.tl-years a'));
    var tlFilters = Array.prototype.slice.call(tl.querySelectorAll('.tl-f'));
    var tlLast = null;
    tlItems.forEach(function (li, i) { li.firstElementChild.style.transitionDelay = (Math.min(i, 16) * 0.03) + 's'; });
    function tlProgress() {
      var max = tlScroll.scrollHeight - tlScroll.clientHeight;
      tlFill.style.transform = 'scaleY(' + (max > 0 ? tlScroll.scrollTop / max : 1) + ')';
      var here = null;
      tlYearsSec.forEach(function (sec) { if (!sec.hidden && sec.offsetTop - tlScroll.scrollTop < 80) here = sec.id; });
      if (!here && tlYearsSec.length) here = tlYearsSec[0].id;
      tlYearLinks.forEach(function (a) { a.classList.toggle('is-here', 'tl-' + a.getAttribute('data-year') === here); });
    }
    function openTl() {
      tlLast = document.activeElement;
      tl.hidden = false; document.documentElement.classList.add('tl-locked');
      tlScroll.scrollTop = 0; tlProgress();
      requestAnimationFrame(function () { requestAnimationFrame(function () { tl.classList.add('is-open'); }); });
      document.getElementById('tl-close').focus();
    }
    function closeTl(then) {
      tl.classList.remove('is-open'); document.documentElement.classList.remove('tl-locked');
      setTimeout(function () { tl.hidden = true; if (then) then(); else if (tlLast) tlLast.focus(); }, reduce ? 0 : 280);
    }
    tlOpen.addEventListener('click', openTl);
    document.getElementById('tl-close').addEventListener('click', function () { closeTl(); });
    tl.addEventListener('click', function (e) { if (e.target === tl) closeTl(); });
    tl.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeTl(); return; }
      if (e.key !== 'Tab') return;
      var f = Array.prototype.filter.call(tl.querySelectorAll('button, a[href]'), function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    tlScroll.addEventListener('scroll', tlProgress, { passive: true });
    tlFilters.forEach(function (b) {
      b.addEventListener('click', function () {
        b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
        var on = {}; tlFilters.forEach(function (o) { on[o.getAttribute('data-kind')] = o.getAttribute('aria-pressed') === 'true'; });
        tlItems.forEach(function (li) { li.hidden = !on[li.getAttribute('data-kind')]; });
        tlYearsSec.forEach(function (sec, i) {
          var any = Array.prototype.some.call(sec.querySelectorAll('.tl-item'), function (li) { return !li.hidden; });
          sec.hidden = !any; tlYearLinks[i].hidden = !any;
        });
        tlProgress();
      });
    });
    tlYearLinks.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var sec = document.getElementById('tl-' + a.getAttribute('data-year'));
        if (sec) tlScroll.scrollTo ? tlScroll.scrollTo({ top: sec.offsetTop - 4, behavior: reduce ? 'auto' : 'smooth' }) : (tlScroll.scrollTop = sec.offsetTop - 4);
      });
    });
    tlItems.forEach(function (li) {
      var a = li.firstElementChild, h = a.getAttribute('href');
      if (h.charAt(0) !== '#') return;
      a.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        closeTl(function () { landOn(h.slice(1), true); if (history.pushState) history.pushState(null, '', h); });
      });
    });
  }

  /* ---------- participant quotes: each slides in from the left as it enters the screen; a thread loops from
     dot to dot and draws itself with the scroll; each quote drifts at its own rate. ---------- */
  var quoteList = document.querySelector('.quotes');
  if (quoteList) {
    var qField = quoteList.parentNode, qPath = qField.querySelector('.q-path');
    var qs = Array.prototype.slice.call(quoteList.children);
    var DRIFT = [-26, 18, -14, 24, -20, 12];
    var qLen = 0;
    var threadD = function () {
      var fr = qField.getBoundingClientRect(), f = function (n) { return n.toFixed(1); };
      var pts = qs.map(function (li) {
        var r = li.firstElementChild.getBoundingClientRect(), b = li.getBoundingClientRect();
        return { x: r.left + r.width / 2 - fr.left, y: r.top + r.height / 2 - fr.top, top: b.top - fr.top, bottom: b.bottom - fr.top };
      });
      // the thread never crosses a quote: it leaves each dot to the left, runs through the gap below the quote,
      // curls once in that gap, and comes into the next dot from the left
      var d = 'M' + f(pts[0].x - 60) + ' ' + f(pts[0].y) + ' L' + f(pts[0].x) + ' ' + f(pts[0].y);
      for (var k = 1; k < pts.length; k++) {
        var p = pts[k - 1], q = pts[k], my = (p.bottom + q.top) / 2, gap = q.top - p.bottom;
        var r = Math.max(5, Math.min(13, gap / 2 - 8)), lx = (p.x + q.x) / 2, dir = q.x >= p.x ? 1 : -1;
        var po = Math.min(36, Math.max(6, p.x - 4)), qo = Math.min(36, Math.max(6, q.x - 4));
        d += ' C' + f(p.x - po) + ' ' + f(p.y + 10) + ' ' + f(p.x - po) + ' ' + f(my) + ' ' + f(p.x) + ' ' + f(my);
        d += ' L' + f(lx - dir * r) + ' ' + f(my);
        // the curl: a full turn that rises above the line and comes back to it
        d += ' A' + f(r) + ' ' + f(r) + ' 0 1 ' + (dir > 0 ? 1 : 0) + ' ' + f(lx + dir * r) + ' ' + f(my);
        d += ' A' + f(r) + ' ' + f(r) + ' 0 1 ' + (dir > 0 ? 1 : 0) + ' ' + f(lx - dir * r + dir * 0.5) + ' ' + f(my);
        d += ' L' + f(q.x - qo) + ' ' + f(my) + ' C' + f(q.x - qo - 8) + ' ' + f(my) + ' ' + f(q.x - qo) + ' ' + f(q.y) + ' ' + f(q.x) + ' ' + f(q.y);
      }
      qPath.setAttribute('d', d);
      qLen = qPath.getTotalLength ? qPath.getTotalLength() : 0;
      qPath.style.strokeDasharray = qLen + ' ' + qLen;
    };
    var qVisible = false, qTick = 0;
    var qFrame = function () {
      qTick = 0;
      var r = qField.getBoundingClientRect(), vh = window.innerHeight;
      // 0 as the field's top reaches the bottom of the screen, 1 as its bottom passes the middle
      var t = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh * 0.5)));
      if (!reduce) {
        qs.forEach(function (li, k) {
          var c = li.getBoundingClientRect(), off = ((c.top + c.height / 2) - vh / 2) / vh;
          li.style.setProperty('--drift', (DRIFT[k % DRIFT.length] * off).toFixed(1) + 'px');
        });
      }
      threadD();
      qPath.style.strokeDashoffset = reduce ? 0 : (qLen * (1 - t)).toFixed(1);
    };
    var qQueue = function () { if (qVisible && !qTick) qTick = requestAnimationFrame(qFrame); };
    if (!reduce && 'IntersectionObserver' in window) {
      quoteList.classList.add('slide');
      var qio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          qio.unobserve(e.target);
          // the thread follows the quote while it slides into place
          var until = Date.now() + 1300, follow = function () { qFrame(); if (Date.now() < until) requestAnimationFrame(follow); };
          requestAnimationFrame(follow);
        });
      }, { rootMargin: '0px 0px -12% 0px' });
      qs.forEach(function (li, k) { li.style.transitionDelay = (k % 2) * 90 + 'ms'; qio.observe(li); });
      new IntersectionObserver(function (entries) { qVisible = entries[0].isIntersecting; qQueue(); }).observe(qField);
    } else {
      qs.forEach(function (li) { li.classList.add('is-in'); });
      qVisible = true;
    }
    window.addEventListener('scroll', qQueue, { passive: true });
    window.addEventListener('resize', function () { qVisible = true; qQueue(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(qFrame);
    qFrame();
  }

  requestAnimationFrame(loop);
})();

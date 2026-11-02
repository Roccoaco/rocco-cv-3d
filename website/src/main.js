// Rocco Acocella — site behaviour. No dependencies.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
  };

  // ---------- Language preference ----------
  // Routes are localized (/ and /it/); the toggle links to the equivalent page.
  // The choice is remembered so returning to the English home redirects to Italian.
  const lang = document.body.dataset.lang;
  document.querySelectorAll('.lang-btn').forEach((a) => {
    a.addEventListener('click', () => store.set('site_lang', a.dataset.lang));
  });
  const saved = store.get('site_lang');
  const itLink = document.querySelector('.lang-btn[data-lang="it"]');
  const cameFromSite = document.referrer && new URL(document.referrer).origin === location.origin;
  if (saved === 'it' && lang === 'en' && document.body.classList.contains('page-home') && !cameFromSite && itLink) {
    location.replace(itLink.href);
    return;
  }
  if (!saved) store.set('site_lang', lang);

  // ---------- Mobile menu ----------
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.menu-btn');
  if (nav && menuBtn) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? menuBtn.dataset.close : menuBtn.dataset.open;
    };
    menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); menuBtn.focus(); }
    });
  }

  // ---------- About: rotating role ----------
  const rotator = document.querySelector('[data-rotate]');
  if (rotator) {
    const roles = [...rotator.children];
    let roleIndex = 0;
    let timer = null;
    const show = (i) => roles.forEach((r, j) => r.classList.toggle('is-active', j === i));
    const start = () => {
      stop();
      if (reduceMotion.matches) return; // CSS shows the static role
      timer = setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        show(roleIndex);
      }, 3200);
    };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    reduceMotion.addEventListener?.('change', start);
    start();
  }

  // ---------- Workshops: logo slider + schools/universities heading ----------
  const track = document.querySelector('[data-slider]');
  if (track) {
    const strip = track.querySelector('.logo-strip');
    const firstSet = strip.querySelector('.logo-set');
    const tiles = [...strip.querySelectorAll('.logo-tile')];
    const words = [...document.querySelectorAll('[data-swap] .swap-word')];
    const SPEED = 40; // px per second
    let offset = 0;
    let paused = false;
    let kind = 'school';
    let last = 0;
    let raf = 0;

    const setKind = (k) => {
      if (k === kind) return;
      kind = k;
      words.forEach((w) => w.classList.toggle('is-active', w.dataset.kind === k));
    };

    // Find the tile under the horizontal centre of the track.
    const checkCentre = () => {
      const r = track.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      let best = null, bestDist = Infinity;
      for (const t of tiles) {
        const b = t.getBoundingClientRect();
        if (b.right < r.left || b.left > r.right) continue;
        if (cx >= b.left && cx <= b.right) { best = t; break; }
        const d = Math.min(Math.abs(b.left - cx), Math.abs(b.right - cx));
        if (d < bestDist) { bestDist = d; best = t; }
      }
      if (best) setKind(best.dataset.kind);
    };

    const frame = (now) => {
      const dt = last ? Math.min(now - last, 100) : 0; // clamp so returning to the tab doesn't jump
      last = now;
      if (!paused) {
        const setWidth = firstSet.offsetWidth;
        if (setWidth > 0) {
          offset = (offset + (SPEED * dt) / 1000) % setWidth;
          strip.style.transform = `translate3d(${-offset}px, 0, 0)`;
        }
      }
      checkCentre();
      raf = requestAnimationFrame(frame);
    };

    const startSlider = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion.matches) {
        strip.style.transform = '';
        checkCentre();
        return;
      }
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });
    track.addEventListener('focusin', () => { paused = true; });
    track.addEventListener('focusout', () => { paused = false; });
    track.addEventListener('scroll', () => { if (reduceMotion.matches) checkCentre(); }, { passive: true });
    reduceMotion.addEventListener?.('change', startSlider);
    startSlider();
  }
})();

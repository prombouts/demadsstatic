// ── Year ─────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Preloader ─────────────────────────────────────────
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const delay = prefersReducedMotion ? 0 : 500;

  setTimeout(() => {
    pre.classList.add('hidden');
    initAnimations();
  }, delay);
});

// ── Mobile nav ────────────────────────────────────────
const burger  = document.getElementById('nav-burger');
const mainNav = document.getElementById('main-nav');

function setNavState(open) {
  mainNav.classList.toggle('nav-open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

burger.addEventListener('click', () => {
  const open = !mainNav.classList.contains('nav-open');
  setNavState(open);
});

document.querySelectorAll('#nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    setNavState(false);
  })
);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNav.classList.contains('nav-open')) {
    setNavState(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1080 && mainNav.classList.contains('nav-open')) {
    setNavState(false);
  }
});

// Keep top navigation visible so internal section links stay discoverable.
mainNav.classList.remove('nav-hidden');

// ── Facebook SDK: lazy-load when section scrolls into view ──
(function () {
  var fbLoaded = false;
  var parseTimeoutId;

  function setFallback(message) {
    var loader = document.getElementById('fb-loading');
    var fallback = document.getElementById('fb-fallback');
    if (loader) loader.style.display = 'none';
    if (fallback) {
      if (message) {
        fallback.firstChild.textContent = message + ' ';
      }
      fallback.hidden = false;
    }
  }

  function setEmbedReady() {
    var loader = document.getElementById('fb-loading');
    var fallback = document.getElementById('fb-fallback');
    if (loader) loader.style.display = 'none';
    if (fallback) fallback.hidden = true;
  }

  function parseFacebookWidget() {
    var target = document.getElementById('fb-embed-wrapper');
    if (!window.FB || !window.FB.XFBML || !target) {
      setFallback('De Facebook plugin is momenteel niet beschikbaar.');
      return;
    }

    parseTimeoutId = window.setTimeout(function () {
      setFallback('Het laden duurde te lang.');
    }, 7000);

    window.FB.XFBML.parse(target, function () {
      window.clearTimeout(parseTimeoutId);
      setEmbedReady();
    });
  }

  function loadFBSDK() {
    if (fbLoaded) return;
    fbLoaded = true;

    if (window.location.protocol === 'file:') {
      setFallback('Start de pagina via http://localhost (niet via file://).');
      return;
    }

    window.fbAsyncInit = function () {
      if (!window.FB) {
        setFallback('De Facebook SDK kon niet initialiseren.');
        return;
      }

      window.FB.init({
        xfbml: false,
        version: 'v21.0'
      });

      parseFacebookWidget();
    };

    var js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.async = true;
    js.defer = true;
    js.crossOrigin = 'anonymous';
    js.src = 'https://connect.facebook.net/nl_NL/sdk.js';
    js.onerror = function () {
      setFallback('De Facebook SDK kon niet geladen worden.');
    };
    document.body.appendChild(js);
  }

  var target = document.getElementById('fb-embed-wrapper');
  if (target && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadFBSDK();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    obs.observe(target);
  } else {
    loadFBSDK();
  }
})();

// ── Instagram embed: lazy-load iframe with fallback ──────
(function () {
  function setInstagramFallback(message) {
    var loader = document.getElementById('ig-loading');
    var fallback = document.getElementById('ig-fallback');
    var frame = document.getElementById('ig-frame');

    if (loader) loader.style.display = 'none';
    if (frame) frame.style.display = 'none';
    if (fallback) {
      if (message) {
        fallback.firstChild.textContent = message + ' ';
      }
      fallback.hidden = false;
    }
  }

  function setInstagramReady() {
    var loader = document.getElementById('ig-loading');
    var fallback = document.getElementById('ig-fallback');
    var frame = document.getElementById('ig-frame');

    if (loader) loader.style.display = 'none';
    if (frame) frame.style.display = 'block';
    if (fallback) fallback.hidden = true;
  }

  function loadInstagramEmbed() {
    var frame = document.getElementById('ig-frame');
    if (!frame) return;

    if (window.location.protocol === 'file:') {
      setInstagramFallback('Start de pagina via http://localhost (niet via file://).');
      return;
    }

    var src = frame.getAttribute('data-src');
    if (!src) {
      setInstagramFallback('Instagram embed bron ontbreekt.');
      return;
    }

    var loaded = false;
    var timeoutId = window.setTimeout(function () {
      if (!loaded) {
        setInstagramFallback('Instagram embed kon niet geladen worden in deze browser.');
      }
    }, 7000);

    frame.addEventListener('load', function () {
      loaded = true;
      window.clearTimeout(timeoutId);
      setInstagramReady();
    }, { once: true });

    frame.addEventListener('error', function () {
      loaded = true;
      window.clearTimeout(timeoutId);
      setInstagramFallback('Instagram embed kon niet geladen worden in deze browser.');
    }, { once: true });

    frame.src = src;
  }

  var target = document.getElementById('ig-embed-wrapper');
  if (target && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadInstagramEmbed();
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    obs.observe(target);
  } else {
    loadInstagramEmbed();
  }
})();

// ── GSAP animations — initialised after preloader ─────
function initAnimations() {
  if (typeof gsap === 'undefined') {
    // Fallback: reveal all elements if GSAP failed to load
    document.querySelectorAll('.hero-tag,.hero-title,.hero-sub,.hero-actions,.reveal')
      .forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance sequence
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .to('.hero-tag',     { opacity: 1, y: 0, duration: 0.9 })
    .to('.hero-title',   { opacity: 1, y: 0, duration: 1 },   '-=0.6')
    .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');

  // Scroll reveal for all .reveal elements
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });
}

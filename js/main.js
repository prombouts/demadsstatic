// ── Year ─────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Preloader ─────────────────────────────────────────
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  setTimeout(() => {
    pre.classList.add('hidden');
    initAnimations();
  }, 600);
});

// ── Mobile nav ────────────────────────────────────────
const burger  = document.getElementById('nav-burger');
const mainNav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  const open = mainNav.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('#nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    mainNav.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', false);
  })
);

// ── Sticky nav: hide on scroll-down, reveal on scroll-up ──
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 120) {
    mainNav.classList.add('nav-hidden');
  } else {
    mainNav.classList.remove('nav-hidden');
  }
  lastY = y;
}, { passive: true });

// ── Contact form (demo submit) ────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type=submit]');
  btn.textContent = 'Verstuurd ✓';
  btn.disabled = true;
  btn.style.opacity = '0.7';
}

// ── Facebook SDK: lazy-load when section scrolls into view ──
(function () {
  var fbLoaded = false;

  function loadFBSDK() {
    if (fbLoaded) return;
    fbLoaded = true;
    var js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.async = true;
    js.defer = true;
    js.crossOrigin = 'anonymous';
    js.src = 'https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v21.0';
    js.onload = function () {
      if (window.FB) {
        window.FB.Event.subscribe('xfbml.render', function () {
          var loader = document.getElementById('fb-loading');
          var embed  = document.querySelector('.fb-page');
          if (loader) loader.style.display = 'none';
          if (embed)  embed.style.display   = 'block';
        });
      }
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

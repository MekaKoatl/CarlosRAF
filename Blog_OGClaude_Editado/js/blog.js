/*!
 * Carlos RAF — Blog Scripts
 */

(function () {
  'use strict';

  // ── MOBILE SIDEBAR TOGGLE ──────────────────────────────
  const toggler  = document.getElementById('sidebarToggler');
  const sideNav  = document.getElementById('sidebarNav');

  if (toggler && sideNav) {
    toggler.addEventListener('click', () => {
      const isOpen = sideNav.classList.toggle('open');
      toggler.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked on mobile
    sideNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          sideNav.classList.remove('open');
        }
      });
    });
  }

  // ── ACTIVE NAV LINK ON SCROLL ──────────────────────────
  const sections = document.querySelectorAll('.blog-section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

  function onScroll() {
    let currentId = '';
    const scrollY = window.scrollY + 120;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) {
        currentId = sec.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── TICKER DUPLICATION ────────────────────────────────
  // Duplicate text so it scrolls seamlessly
  const ticker = document.querySelector('.hero-ticker span');
  if (ticker) {
    ticker.textContent = ticker.textContent.repeat(4);
  }

  // ── STAGGERED FADE-IN ON SECTION ENTER ────────────────
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(
      '.post-card, .post-list-item, .post-featured, .post-wide, .culture-card, .hero-title, .hero-sub, .hero-cta'
    ).forEach(el => {
      el.classList.add('fade-up');
      observer.observe(el);
    });
  }

})();

// ── CSS for fade-up (injected via JS) ──────────────────────
(function injectFadeCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-up {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1),
                  transform 0.55s cubic-bezier(0.16,1,0.3,1);
    }
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .posts-grid .post-card:nth-child(2) { transition-delay: 0.1s; }
    .posts-grid .post-card:nth-child(3) { transition-delay: 0.2s; }
    .culture-grid .culture-card:nth-child(2) { transition-delay: 0.1s; }
    .culture-grid .culture-card:nth-child(3) { transition-delay: 0.2s; }
  `;
  document.head.appendChild(style);
})();

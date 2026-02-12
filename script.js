document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navMobileLinks = navMobile ? navMobile.querySelectorAll('a') : [];

  menuToggle?.addEventListener('click', function () {
    header?.classList.toggle('is-open');
    document.body.style.overflow = header?.classList.contains('is-open') ? 'hidden' : '';
  });

  navMobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      header?.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - (header?.offsetHeight ?? 0);
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

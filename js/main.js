document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelectorAll('[data-current-year]');
  year.forEach(el => el.textContent = new Date().getFullYear());

  const nav = document.querySelector('.navbar');
  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle('shadow-sm', window.scrollY > 24);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, {passive:true});

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
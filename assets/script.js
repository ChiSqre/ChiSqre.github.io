// Small site enhancements
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// One-at-a-time accordion behavior
const accordions = document.querySelectorAll('.acc');
accordions.forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      accordions.forEach((other) => {
        if (other !== d) other.open = false;
      });
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navEl = document.getElementById('site-nav');
if (navToggle && navEl) {
  navToggle.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

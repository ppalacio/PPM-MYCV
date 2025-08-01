// Smooth fade‑in on scroll & basic mobile nav
document.addEventListener('DOMContentLoaded', () => {
  // Section reveal
  const sections = document.querySelectorAll('#content section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => observer.observe(sec));
  // Ensure first section visible on load
  if (sections[0]) sections[0].classList.add('visible');

  // Back‑to‑top button
  const topBtn = document.getElementById('top-btn');
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > window.innerHeight ? 'block' : 'none';
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile nav toggle
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    // Close nav when link clicked
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));
  }
});
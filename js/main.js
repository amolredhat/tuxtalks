/**
 * Main JS for Pure HTML Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar-links a');
  const sections = document.querySelectorAll('section.resume-section');
  const items = document.querySelectorAll('.resume-item');

  // ── 1. Hamburger Menu Toggle ──────────────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebarLinksList = document.getElementById('sidebarLinks');

  if (hamburgerBtn && sidebarLinksList) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = sidebarLinksList.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked on mobile
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebarLinksList.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // ── 2. Intersection Observer — Active Link Highlights ─────────────────────
  const observerOptions = { threshold: 0.25 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // ── 3. Staggered Entrance for Resume Items ────────────────────────────────
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.style.animationDelay = `${(index % 3) * 0.1}s`;
        entry.target.classList.add('animate-in', 'animated');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => itemObserver.observe(item));
});

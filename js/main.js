/**
 * Main JS for Pure HTML Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scrolling for Sidebar Links
  const sidebarLinks = document.querySelectorAll('.sidebar-links a');
  
  // 2. Intersection Observer for Active Links and Animations
  const sections = document.querySelectorAll('section.resume-section');
  const items = document.querySelectorAll('.resume-item');

  const observerOptions = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle Active Link Highlights
        const id = entry.target.getAttribute('id');
        sidebarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

        // Trigger Animations (Only once)
        if (entry.target.classList.contains('resume-section')) {
           // We can add a class to sections if needed
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // 3. Staggered Entrance for Resume Items
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a small delay based on order if not already animated
        if (!entry.target.classList.contains('animated')) {
            entry.target.style.animationDelay = `${(index % 3) * 0.1}s`;
            entry.target.classList.add('animate-in');
            entry.target.classList.add('animated');
        }
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => itemObserver.observe(item));

  // 4. Contact Obfuscation Decryption (on hover/click if needed)
  // For now, bidi-override CSS handles the visual display.
});

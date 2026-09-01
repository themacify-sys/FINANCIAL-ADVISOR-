document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Knowledge Base Search Filter
  const searchInput = document.getElementById('resourceSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.resource-card');
      
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const body = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || body.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Static Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      if (status) {
        status.innerHTML = '<p style="color:#8B1E35; margin-top:1rem;">Thank you for your message. Form submission is handled directly via email contact for this static portal. Please reach us at hr.department00019@gmail.com.</p>';
      }
    });
  }
});

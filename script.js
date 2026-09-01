document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  const logoImg = document.querySelector('.nav-logo img');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const icon = navMenu.classList.contains('open') ? 'x' : 'menu';
    mobileMenuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
      lucide.createIcons();
    });
  });

  // Tab Navigation Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Add active class to corresponding pane
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Interactive Vision Section
  const interactiveContainer = document.getElementById('interactive-container');
  const visionCols = document.querySelectorAll('.vision-col');

  if (interactiveContainer && visionCols.length > 0) {
    visionCols.forEach(col => {
      col.addEventListener('mouseenter', () => {
        const bgClass = col.getAttribute('data-bg');
        // Remove all background classes
        interactiveContainer.classList.remove('bg-1', 'bg-2', 'bg-3');
        // Add the relevant background class
        interactiveContainer.classList.add(bgClass);
      });
    });
  }
});

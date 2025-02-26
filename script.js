// DOM Elements
const navbar = document.querySelector('.navbar');
const scrollIndicator = document.querySelector('.scroll-indicator');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelector('.hamburger');
const themeToggle = document.querySelector('.theme-toggle');
const contactForm = document.getElementById('contactForm');

// Helper Functions
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Scroll Functions
function handleScroll() {
  // Navbar shadow on scroll
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update active navigation link based on scroll position
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

// Event Listeners
window.addEventListener('scroll', debounce(handleScroll));

// Scroll indicator click handler
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Mobile navigation toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Theme toggle (for future light/dark mode)
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change the icon based on theme
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

// Handle contact form submission (just a demo)
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData.entries());
    
    // For demo purposes, log the form data
    console.log('Form submitted:', formObject);
    
    // Show a success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Message Sent!';
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'var(--success)';
    
    // Reset the form and button after 3 seconds
    setTimeout(() => {
      contactForm.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '';
    }, 3000);
  });
}

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.project-card, .blog-card, .contact-method');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate-fadeIn');
    }
  });
}

window.addEventListener('scroll', debounce(animateOnScroll));

// Initialize animations on page load
window.addEventListener('load', () => {
  // Animate hero section elements
  const heroElements = document.querySelectorAll('.hero-text h1, .hero-text p, .hero-text .cta-buttons');
  
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-fadeIn');
    }, 200 * index);
  });
  
  // Initialize scroll animations
  animateOnScroll();
  
  // Initialize active nav link
  handleScroll();
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.classList.remove('focused');
    }
  });
});
// DOM Elements
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contact-form");
const navbar = document.querySelector(".navbar");

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form handling
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const formValues = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  // Basic form validation
  if (!formValues.name || !formValues.email || !formValues.message) {
    showNotification("Please fill in all required fields.", "error");
    return;
  }

  if (!isValidEmail(formValues.email)) {
    showNotification("Please enter a valid email address.", "error");
    return;
  }

  // Simulate form submission
  showNotification(
    "Thank you for your message! We'll get back to you soon.",
    "success"
  );
  contactForm.reset();
});

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${
          type === "success"
            ? "#2D4A2B"
            : type === "error"
            ? "#dc3545"
            : "#007bff"
        };
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        max-width: 300px;
        font-size: 14px;
        line-height: 1.4;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".service-card, .stat, .about-text, .contact-item"
  );
  animatedElements.forEach((el) => observer.observe(el));
});

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .service-card,
    .stat,
    .about-text,
    .contact-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .service-card.animate-in,
    .stat.animate-in,
    .about-text.animate-in,
    .contact-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    
    .stat:nth-child(1) { transition-delay: 0.1s; }
    .stat:nth-child(2) { transition-delay: 0.2s; }
    .stat:nth-child(3) { transition-delay: 0.3s; }
    
    .contact-item:nth-child(1) { transition-delay: 0.1s; }
    .contact-item:nth-child(2) { transition-delay: 0.2s; }
    .contact-item:nth-child(3) { transition-delay: 0.3s; }
    
    @media (max-width: 767px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

document.head.appendChild(style);

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Add loading state to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.type === "submit") {
      this.classList.add("loading");
      this.textContent = "Sending...";

      // Reset button after form submission
      setTimeout(() => {
        this.classList.remove("loading");
        this.textContent = "Send Message";
      }, 2000);
    }
  });
});

// Add button loading styles
const buttonStyle = document.createElement("style");
buttonStyle.textContent = `
    .btn.loading {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;
    }
    
    .btn.loading:hover {
        transform: none !important;
    }
`;

document.head.appendChild(buttonStyle);

// Preload critical elements
document.addEventListener("DOMContentLoaded", () => {
  // Preload hero image placeholder
  const heroImage = document.querySelector(".hero-placeholder");
  if (heroImage) {
    heroImage.style.opacity = "0";
    setTimeout(() => {
      heroImage.style.transition = "opacity 0.5s ease";
      heroImage.style.opacity = "1";
    }, 300);
  }

  // Add focus trap for mobile menu
  const focusableElements = navMenu.querySelectorAll(
    "a, button, input, select, textarea"
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  navMenu.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    if (e.key === "Escape") {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
      navToggle.focus();
    }
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handler
window.addEventListener(
  "scroll",
  debounce(() => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, 10)
);

console.log("Ward & Co. website loaded successfully! 🏗️");

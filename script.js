// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simple validation
    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    // Simulate form submission
    const submitButton = this.querySelector(".btn-primary");
    const originalText = submitButton.textContent;

    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    setTimeout(() => {
      alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      this.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".benefit-card, .plan-card, .code-block, .comparison-item",
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Plan selection handling
document.querySelectorAll(".plan-button").forEach((button) => {
  button.addEventListener("click", function () {
    const planName = this.closest(".plan-card").querySelector("h3").textContent;

    // Simulate plan selection
    this.textContent = "Procesando...";
    this.disabled = true;

    setTimeout(() => {
      alert(
        `¡Perfecto! Has seleccionado el plan ${planName}. Te redirigiremos al proceso de pago.`,
      );
      this.textContent = this.textContent.replace(
        "Procesando...",
        `Elegir ${planName}`,
      );
      this.disabled = false;
    }, 1500);
  });
});

// CTA buttons handling
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {
  if (
    !button.closest(".contact-form") &&
    !button.classList.contains("plan-button")
  ) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const buttonText = this.textContent.trim();

      if (
        buttonText.includes("Comenzar gratis") ||
        buttonText.includes("Ver demo")
      ) {
        alert(
          `¡Excelente elección! Te redirigiremos para ${buttonText.toLowerCase()}.`,
        );
      } else if (buttonText.includes("documentación")) {
        alert("Te redirigiremos a nuestra documentación completa.");
      }
    });
  }
});

// Add smooth hover effects for cards
document.querySelectorAll(".benefit-card, .plan-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Keyboard navigation support
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close mobile menu if open
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Performance optimization: Debounced scroll handler
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      // Update active navigation link
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`,
        );

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("active");
          });
          if (navLink) {
            navLink.classList.add("active");
          }
        }
      });

      scrollTimeout = null;
    }, 10);
  }
});

console.log("Omega Testing - Landing page loaded successfully! 🚀");

// =============== LOAD PROJECTS FROM JSON ===============
async function loadProjects() {
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();
    const container = document.getElementById("projects-container");

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", project.category);

      const techTags = project.technologies
        .map((tech) => `<span class="tag">${tech.toLowerCase()}</span>`)
        .join("");

      const featuredBadge = project.featured
        ? '<span class="project-featured"><i class="ri-star-line"></i> Featured</span>'
        : "";

      card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.name}" width="346" height="231" loading="lazy" />
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="ri-github-line"></i> View Code
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-tags">${techTags}</div>
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-stats">
                        ${featuredBadge}
                        <span><i class="ri-code-line"></i> ${project.category}</span>
                    </div>
                </div>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// =============== SMOOTH SCROLL NAVIGATION ===============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// =============== PROJECT FILTER ===============
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// =============== SCROLL ANIMATIONS WITH SCROLLREVEAL ===============
function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 800,
    delay: 200,
    reset: false,
  });

  sr.reveal(".hero__data", { origin: "left" });
  sr.reveal(".hero__image", { origin: "right" });
  sr.reveal(".hero__info", { delay: 400 });
  sr.reveal(".hero__buttons", { delay: 600 });
  sr.reveal(".about__text", { origin: "left" });
  sr.reveal(".about__highlights", { origin: "right", delay: 200 });
  sr.reveal(".highlight-card", { delay: 100, interval: 100 });
  sr.reveal(".project-card", { delay: 100, interval: 100 });
  sr.reveal(".skills__category", { delay: 100, interval: 150 });
  sr.reveal(".cert-item", { delay: 100, interval: 100 });
  sr.reveal(".contact__content", { delay: 200 });
}

// =============== NAVBAR ACTIVE LINK ===============
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// =============== SKILL BARS ANIMATION ===============
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBar = entry.target.querySelector(".skill-bar");
      if (skillBar) {
        const width = skillBar.style.width;
        skillBar.style.width = "0";
        setTimeout(() => {
          skillBar.style.width = width;
        }, 100);
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-item").forEach((item) => {
  observer.observe(item);
});

// =============== INTERSECTION OBSERVER FOR ANIMATIONS ===============
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);

document
  .querySelectorAll(".project-card, .highlight-card, .cert-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    animateOnScroll.observe(el);
  });

// =============== DOCUMENT READY ===============
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();

  // Initialize ScrollReveal when it loads
  if (typeof ScrollReveal !== "undefined") {
    initScrollReveal();
  } else {
    // Wait for ScrollReveal to load
    window.addEventListener("load", () => {
      setTimeout(initScrollReveal, 100);
    });
  }
});

// =============== LAZY LOAD IMAGES ===============
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  });

  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => imageObserver.observe(img));
}

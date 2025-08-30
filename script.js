// Simple interactive feature
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded!");

  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
      project.style.backgroundColor = "#f0f0f0";
    });
    project.addEventListener("mouseleave", () => {
      project.style.backgroundColor = "transparent";
    });
  });
});

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const isScrollingDown = window.scrollY > lastScrollY;

    if (entry.isIntersecting && isScrollingDown) {
      entry.target.classList.add('visible');
    } else if (!isScrollingDown) {
      entry.target.classList.remove('visible');
    }
  });

  lastScrollY = window.scrollY;
}, {
  threshold: 0.1
});

const fadeElements = document.querySelectorAll('.fade-in-text');
fadeElements.forEach(el => observer.observe(el));


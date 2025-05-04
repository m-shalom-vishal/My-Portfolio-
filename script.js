function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

const roles = ["AI Enthusiast", "Web Developer", "Data Analyst"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typed-text");

function typeEffect() {
  const current = roles[index];
  if (isDeleting) {
    textElement.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  } else {
    textElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

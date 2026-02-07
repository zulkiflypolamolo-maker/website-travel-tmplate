const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Shadow navbar saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

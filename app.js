const form = document.querySelector("form");
const closeIcon = document.querySelector(".close-icon");
const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector("nav");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("open");
});

menuBar.addEventListener("click", () => {
  nav.classList.add("open");
});

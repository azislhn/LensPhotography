// Hamburger menu (media mobile phone)
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Sticky-shrink navbar
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 0.1
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Sidebar biodata (media tablet & desktop)
const sidebar = document.querySelector("aside");
const sideBtn = document.querySelector(".sidebar");
const sideClose = document.querySelector(".close-bio");

sideBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  sideBtn.classList.add("hide");
});

sideClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sideBtn.classList.remove("hide");
});

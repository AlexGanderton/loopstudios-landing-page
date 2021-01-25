const mobileMenu = document.querySelector(".mobile-menu");
const openMenuBtn = document.querySelector(".fa-bars");
const closeMenuBtn = document.querySelector(".fa-times");
const body = document.querySelector("body");

function openMenu() {
  mobileMenu.classList.remove("hide");
  body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.add("hide");
  body.style.overflow = "unset";
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

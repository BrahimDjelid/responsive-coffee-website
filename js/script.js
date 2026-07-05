/* Element references */
const openMenu = document.getElementById("open-menu"); 
const closeMenu = document.getElementById("close-menu"); 
const navMenu = document.getElementById("nav-menu");
const header = document.querySelector("header"); // Header, used to toggle the dark overlay

/* Open menu */
openMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  header.classList.add("menu-open");
});

/* Close menu */
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
  header.classList.remove("menu-open");
});

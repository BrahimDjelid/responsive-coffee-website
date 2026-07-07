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

// Hide mobile menu on click
const links = document.querySelectorAll(".nav-menu .nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    header.classList.remove("menu-open");
  });
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakPoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

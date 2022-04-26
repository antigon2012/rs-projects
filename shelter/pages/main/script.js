const MENU_BTN = document.querySelector(".menu-burger-header");
const BODY = document.body;
const MAIN_NAV = document.querySelector(".main-nav");
const HEADER_LOGO = document.querySelector(".header-logo");
const FADE_LAYER = document.querySelector(".mobile-menu-wrap");
const MAIN_WRAPPER = document.querySelector(".wrapper");
const NAV_ITEM = document.querySelectorAll(".nav-item");

function openMenu() {
  FADE_LAYER.classList.toggle("active");
  MENU_BTN.classList.toggle("active");
  MAIN_NAV.classList.toggle("active");
  HEADER_LOGO.classList.toggle("open");
  BODY.classList.toggle("noscroll");
  // MAIN_WRAPPER.classList.toggle("active");
}

function closeMenu() {
  FADE_LAYER.classList.remove("active");
  MENU_BTN.classList.remove("active");
  MAIN_NAV.classList.remove("active");
  HEADER_LOGO.classList.remove("open");
  BODY.classList.remove("noscroll");
  // MAIN_WRAPPER.classList.remove("active");
}

// open menu
MENU_BTN.addEventListener("click", openMenu);

// close menu in the link
for (let i = 0; i < NAV_ITEM.length; i++) {
  NAV_ITEM[i].addEventListener("click", closeMenu);
}

FADE_LAYER.addEventListener("click", closeMenu);
// NAV_LIST.addEventListener("click", (e) => e.stopPropagation());

const body = document.body,
  headerBurger = document.querySelector(".header__nav-button"),
  headerNav = document.querySelector(".header__nav"),
  headerNavItem = document.querySelectorAll(".header__nav-item"),
  closeBtn = document.querySelector(".nav-list__close-button"),
  fadeLayer = document.querySelector(".overlay"),
  lockPaddingBody = window.innerWidth - body.offsetWidth + "px";

// Burger

const openMenu = () => {
  headerNav.classList.toggle("nav_active");
  fadeLayer.classList.toggle("overlay_active");
  body.classList.toggle("no_scroll");
};

headerBurger.addEventListener("click", openMenu);
headerNavItem.forEach((el) => {
  el.addEventListener("click", openMenu);
});
fadeLayer.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);

// Modal Sign In

const login = document.querySelector(".header__button"),
  acc = document.querySelector(".account"),
  modal = document.querySelector(".modal"),
  modalOverlay = document.querySelector(".modal__overlay"),
  signIn = document.querySelector(".sign-in__btn");

function openModal() {
  modal.classList.add("show");
  body.classList.add("no_scroll");
  modalOverlay.classList.add("modal__overlay_active");
  body.style.paddingRight = lockPaddingBody;
  if (signFacebook.classList.contains("remove")) {
    loginModal();
  }
}

function closeModal() {
  modal.classList.remove("show");
  body.classList.remove("no_scroll");
  body.style.paddingRight = "";
  modalOverlay.classList.remove("modal__overlay_active");
}

function alertLogin() {
  let pass = sign.password.value,
    mail = sign.email.value;
  alert(`E-mail: ${mail}\nPassword: ${pass}`);
}

login.addEventListener("click", openModal);
acc.addEventListener("click", openModal);
modalOverlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal__overlay")) {
    closeModal();
  }
});

sign.signBtn.addEventListener("click", alertLogin);

// Modal register

const modalTitle = modal.querySelector(".modal__title"),
  signFacebook = modal.querySelector(".sign-in__facebook"),
  signGoogle = modal.querySelector(".sign-in__google"),
  orLine = modal.querySelector(".or__line"),
  forgotPass = modal.querySelector(".modal__forgot-pass"),
  registerDescr = modal.querySelector(".register__description"),
  registerBtn = modal.querySelector(".register");

function registerModal() {
  modalTitle.textContent = "Create account";
  registerDescr.textContent = "Already have an account?";
  signIn.value = "Sign Up";
  registerBtn.textContent = "Log in";
  signFacebook.classList.add("remove");
  signGoogle.classList.add("remove");
  orLine.classList.add("remove");
  forgotPass.classList.add("remove");
}

function loginModal() {
  modalTitle.textContent = "Log in to your account";
  registerDescr.textContent = "Don’t have an account?";
  signIn.value = "Sign In";
  registerBtn.textContent = "Register";
  signFacebook.classList.remove("remove");
  signGoogle.classList.remove("remove");
  orLine.classList.remove("remove");
  forgotPass.classList.remove("remove");
}

function isRegister() {
  signFacebook.classList.contains("remove") ? loginModal() : registerModal();
}

registerBtn.addEventListener("click", isRegister);

// slider

// const slides = document.querySelectorAll(".slider__img");
// const slider = [];
// for (let i = 0; i < slides.length; i++) {
//   slider[i] = slides[i].src;
//   slides[i].remove();
// }

// let step = 0;
// let offset = 0;

// function draw() {
//   let img = document.createElement("img");
//   img.src = slider[step];
//   img.classList.add("slider__img");
//   img.style.left = offset * 1000 + "px";
//   document.querySelector(".slider__line").appendChild(img);
// }

// draw();

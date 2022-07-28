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
  if (!pass || !mail) {
    alert("Заполните форму!");
  } else {
    alert(`E-mail: ${mail}\nPassword: ${pass}`);
  }
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

const sliderLine = document.querySelector(".slider__line"),
  sliderItem = document.querySelectorAll(".slider__item"),
  sliderBread = document.querySelectorAll(".slider-bread__item"),
  width = body.clientWidth;

console.log(width);

let offset = -860;
let index = 1;

const leftMove = () => {
  offset -= 860;
  index += 1;
  sliderLine.style.left = offset + "px";

  sliderBread.forEach((el) => el.classList.remove("slider-bread__item_active"));
  sliderBread[index].classList.add("slider-bread__item_active");

  if (index === 2) {
    sliderItem[sliderItem.length - 1].style.opacity = "0.5";
  }
};

const rightMove = () => {
  offset += 860;
  index -= 1;
  sliderLine.style.left = offset + "px";

  sliderBread.forEach((el) => el.classList.remove("slider-bread__item_active"));
  sliderBread[index].classList.add("slider-bread__item_active");

  if (index === 0) {
    sliderItem[0].style.opacity = "0.5";
  }
};
if (body.clientWidth > 1230) {
  sliderLine.addEventListener("click", (event) => {
    if (event.target.getAttribute("data-index") > 2) {
      rightMove();
    } else if (event.target.getAttribute("data-index") < 2) {
      leftMove();
    }
  });
}

//   sliderItem = document.querySelectorAll(".slider__item"),
//   sliderText = document.querySelectorAll(".slider__country"),
//   slides = document.querySelectorAll(".slider__picture");

// const srcLarge = [];
// const srcSmall = [];
// const sliderCountry = [];

// for (let i = 0; i < slides.length; i++) {
//   srcLarge[i] = slides[i].children[0].srcset;
//   srcSmall[i] = slides[i].children[1].srcset;
//   sliderCountry[i] = sliderText[i].textContent;
//   sliderText[i].remove();
//   sliderItem[i].remove();
//   slides[i].remove();
// }

// let step = 0;
// let offset = -1;

// function drawSlide() {
//   let sliderCard = document.createElement("li");
//   sliderCard.classList.add("slider__item");
//   // sliderCard.style.left = offset * 860 + "px";

//   let picture = document.createElement("picture");
//   picture.classList.add("slider__picture");
//   picture.innerHTML = `<source media="(min-width: 1230px)" srcset="${srcLarge[step]}"> <source media="(max-width: 390px)" srcset="${srcSmall[step]}" type="image/jpg">`;

//   let img = document.createElement("img");
//   img.src = srcLarge[step];
//   img.classList.add("slider__img");

//   picture.append(img);

//   let span = document.createElement("span");
//   span.classList.add("slider__country");
//   span.textContent = sliderCountry[step];

//   sliderCard.prepend(picture);
//   sliderCard.append(span);

//   sliderLine.append(sliderCard);
//   step + 1 === srcLarge.length ? (step = 0) : (step += 1);
// }

// for (let i = 0; i < sliderItem.length; i++) {
//   drawSlide();
//   // sliderItem[i].style.left = offset * 860 + "px";
// }

// const generateSlide = document.querySelectorAll(".slider__item");
// for (let i = 0; i < generateSlide.length; i++) {
//   generateSlide[i].style.left = offset * 860 + "px";
//   offset + 1 === srcLarge.length ? (offset = 0) : (offset += 1);
// }

// const left = () => {
//   const slidesVisible = document.querySelectorAll(".slider__item");
//   let offsetMotion = 0;
//   drawSlide();
//   for (let i = 0; i < slidesVisible.length; i++) {
//     slidesVisible[i].style.left = offsetMotion * 860 - 860 + "px";
//     offsetMotion === slidesVisible.length
//       ? (offsetMotion = 0)
//       : (offsetMotion += 1);
//   }
//   setTimeout(function () {
//     slidesVisible[0].remove();
//   }, 500);
// };

// const right = () => {
//   drawSlide(0);
//   const slidesVisible = document.querySelectorAll(".slider__item");
//   let offsetMotion = 0;
//   for (let i = 0; i < slidesVisible.length; i++) {
//     slidesVisible[i].style.left = offsetMotion * 860 + 860 + "px";
//     offsetMotion === slidesVisible.length
//       ? (offsetMotion = 0)
//       : (offsetMotion += 1);
//   }
//   setTimeout(function () {
//     slidesVisible[slidesVisible.length - 1].remove();
//   }, 500);
// };

// sliderLine.addEventListener("click", left);

import { showTime } from "./time.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { setBg, getSlideNext, getSlidePrev } from "./slider.js";

showTime();
window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
document.querySelector(".slide-prev").addEventListener("click", getSlidePrev);
document.querySelector(".slide-next").addEventListener("click", getSlideNext);
setBg();

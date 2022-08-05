import { showTime } from "./time.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { setBg } from "./slider.js";

showTime();
window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
setBg();

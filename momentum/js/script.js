import { showTime } from "./time.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { setBg, getSlideNext, getSlidePrev } from "./slider.js";
import { getWeather, setCity, city } from "./weather.js";
import { getQuotes, changeQuote } from "./quote.js";

showTime();
window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
document.querySelector(".slide-prev").addEventListener("click", getSlidePrev);
document.querySelector(".slide-next").addEventListener("click", getSlideNext);
setBg();

getWeather();

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
changeQuote.addEventListener("click", getQuotes);

getQuotes();

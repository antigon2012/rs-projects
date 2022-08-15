import { showTime } from "./time.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { setBg, getSlideNext, getSlidePrev } from "./slider.js";
import { getWeather, setCity, city } from "./weather.js";
import { getQuotes, changeQuote } from "./quote.js";
import {
  playAudio,
  play,
  playPrev,
  playNext,
  audio,
  muted,
  mutedBtn,
  updateTimelineAndTime,
} from "./audio.js";
import { createPlayList } from "./playList.js";

showTime();
getQuotes();
setBg();
getWeather();
createPlayList();

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
document.querySelector(".slide-prev").addEventListener("click", getSlidePrev);
document.querySelector(".slide-next").addEventListener("click", getSlideNext);
document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
changeQuote.addEventListener("click", getQuotes);
play.addEventListener("click", playAudio);
audio.addEventListener("loadeddata", updateTimelineAndTime);
audio.addEventListener("ended", playNext);
document.querySelector(".play-prev").addEventListener("click", playPrev);
document.querySelector(".play-next").addEventListener("click", playNext);
mutedBtn.addEventListener("click", muted);

document.querySelector(".play-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("play-item")) {
    console.log(audio.duration);
  }
});

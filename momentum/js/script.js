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
  changeVolume,
  range,
  timeline,
  clickToPlay,
} from "./audio.js";
import { createPlayList, playList } from "./playList.js";

showTime();
getQuotes();
setBg();
getWeather();
createPlayList();
clickToPlay();

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
document.querySelector(".slide-prev").addEventListener("click", getSlidePrev);
document.querySelector(".slide-next").addEventListener("click", getSlideNext);
document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
changeQuote.addEventListener("click", getQuotes);
play.addEventListener("click", playAudio);
audio.addEventListener("loadeddata", updateTimelineAndTime);
timeline.addEventListener(
  "click",
  (e) => {
    if (audio.play) {
      let timeToWidthCoeff = 200 / audio.duration;
      const timeToSeek = e.offsetX / timeToWidthCoeff;
      audio.currentTime = timeToSeek;
    }
  },
  false
);
range.addEventListener("mousemove", changeVolume);
audio.addEventListener("ended", playNext);
document.querySelector(".play-prev").addEventListener("click", playPrev);
document.querySelector(".play-next").addEventListener("click", playNext);
mutedBtn.addEventListener("click", muted);

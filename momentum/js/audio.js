import { playList } from "./playList.js";

const play = document.querySelector(".play"),
  mutedBtn = document.querySelector(".volume-button"),
  currentTrack = document.querySelector(".current-track"),
  duration = document.querySelector(".duration"),
  timeline = document.querySelector(".timeline"),
  progress = document.querySelector(".progress");

const audio = new Audio();

let isPlay = false;
let playNum = 0;

// play-pause func
function playAudio() {
  audio.src = playList[playNum].src;
  activeTrack();
  currentTrack.textContent = `${playNum + 1}. ${playList[playNum].title}`;

  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    changeIcon();
    isPlay = true;
  } else {
    audio.pause();
    changeIcon();
    isPlay = false;
  }
}
// change play-pause icon function
const changeIcon = () => {
  if (!isPlay) {
    play.classList.add("pause");
  } else {
    play.classList.remove("pause");
  }
};

// checked active track func
const activeTrack = () => {
  const playItem = document.querySelectorAll(".play-item");
  playItem.forEach((el) => el.classList.remove("item-active"));
  playItem[playNum].classList.add("item-active");
};

// play prev track func
const playPrev = () => {
  isPlay = false;
  if (playNum === 0) {
    playNum = playList.length - 1;
    playAudio();
  } else {
    playNum = playNum - 1;
    playAudio();
  }
};

// play next track func
const playNext = () => {
  isPlay = false;
  if (playNum === playList.length - 1) {
    playNum = 0;
    playAudio();
  } else {
    playNum = playNum + 1;
    playAudio();
  }
};

// muted func
const muted = () => {
  if (!audio.muted) {
    audio.muted = true;
    mutedBtn.classList.add("volume-mute");
  } else {
    audio.muted = false;
    mutedBtn.classList.remove("volume-mute");
  }
};

// duration audio func
const getDurationAudio = () => {
  console.log(audio.duration);
};

//time code from duration
const getTimeCodeFromNum = (num) => {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  let hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
};

// time code from current audio

const getTimeCodeFromCurrentAudio = () => {
  duration.textContent = getTimeCodeFromNum(audio.duration);
};

// current time of audio

const getCurrentTimeOfAudio = () => {
  const currentTime = document.querySelector(".current-time");
  let currentTimeNum = getTimeCodeFromNum(audio.currentTime);
  currentTime.textContent = currentTimeNum;
  setTimeout(getCurrentTimeOfAudio, 500);
};

const updateProgressBar = () => {
  let timeToWidthCoeff = 200 / audio.duration;
  progress.style.width = `${Math.round(
    parseInt(audio.currentTime) * timeToWidthCoeff
  )}px`;
  setTimeout(updateProgressBar, 500);
  console.log(
    `${Math.round(parseInt(audio.currentTime) * timeToWidthCoeff)}px`
  );
};

export {
  playAudio,
  play,
  playPrev,
  playNext,
  audio,
  muted,
  mutedBtn,
  getDurationAudio,
  getTimeCodeFromCurrentAudio,
  getCurrentTimeOfAudio,
  updateProgressBar,
};

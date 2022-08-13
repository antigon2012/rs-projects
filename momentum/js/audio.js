import { playList } from "./playList.js";

const play = document.querySelector(".play");
const audio = new Audio();

let isPlay = false;
let playNum = 0;

function playAudio() {
  audio.src = playList[playNum].src;

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

const changeIcon = () => {
  if (!isPlay) {
    play.classList.add("pause");
  } else {
    play.classList.remove("pause");
  }
};

const playPrev = () => {
  // isPlay = false;
  if (playNum === 0) {
    playNum = playList.length - 1;
    playAudio();
  } else {
    playNum = playNum - 1;
    playAudio();
  }
};

const playNext = () => {
  // isPlay = false;
  if (playNum === playList.length - 1) {
    playNum = 0;
    playAudio();
  } else {
    playNum = playNum + 1;
    playAudio();
  }
};

export { playAudio, play, playPrev, playNext };

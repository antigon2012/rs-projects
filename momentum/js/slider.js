import { getTimeOfDay } from "./greeting.js";
export { setBg, getSlideNext, getSlidePrev };

const body = document.body;

const getRandomNum = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let randomNum = getRandomNum();

const setBg = () => {
  let timeOfDay = getTimeOfDay();
  let bgNum = (randomNum + "").padStart(2, "0");

  body.style.backgroundImage = `url('https://raw.githubusercontent.com/antigon2012/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
};

const getSlideNext = () => {
  if (randomNum === 20) {
    randomNum = 1;
  } else {
    randomNum = randomNum + 1;
  }
  setBg();
};

const getSlidePrev = () => {
  if (randomNum === 1) {
    randomNum = 20;
  } else {
    randomNum = randomNum - 1;
  }
  setBg();
};

import { getTimeOfDay } from "./greeting.js";

const body = document.body;

const getRandomNum = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const setBg = () => {
  let timeOfDay = getTimeOfDay();
  let bgNum = (getRandomNum() + "").padStart(2, "0");

  body.style.backgroundImage = `url('https://raw.githubusercontent.com/antigon2012/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
};

export { setBg };

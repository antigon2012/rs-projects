import { city } from "./weather.js";
import { currentVolume } from "./audio.js";
export { getLocalStorage, setLocalStorage };
const name = document.querySelector(".name");

const setLocalStorage = () => {
  localStorage.setItem("name", name.value);
  localStorage.setItem("city", city.value);
};

const getLocalStorage = () => {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
};

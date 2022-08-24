import { openModal, ancientSriptSelection } from "./modal.js";
import ancientsData from "../../data/ancients.js";
import { searchAncientsObject } from "../js/shuffle.js";

openModal();
// setTimeout(() => {
//   openModal();
// }, 1500);

let ancientDeckScript = "";

const card = document.querySelectorAll(".card");

document.querySelector(".card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    ancientSriptSelection(card);
    ancientDeckScript = e.target.dataset.ancients.slice(0, -4);
    searchAncientsObject(ancientDeckScript);
  }
});

export { ancientDeckScript };

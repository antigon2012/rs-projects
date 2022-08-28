const container = document.querySelector(".container");
const containerModal = document.createElement("div");
const modalTitle = document.createElement("h2");
const modalDescription = document.createElement("p");
const cardContainer = document.createElement("div");
import ancientsData from "../../data/ancients.js";

const ancients = [
  "Azathoth.jpg",
  "Cthulthu.jpg",
  "iogSothoth.jpg",
  "ShubNiggurath.jpg",
];

const difficulty = [
  "Вельмі просты",
  "Просты",
  "Сярэдні",
  "Складаны",
  "Вельмі складаны",
];

let indexOfCard = 0;

function createAncientCard(ancient) {
  const card = new Image();

  card.src = ancient.cardFace;
  card.classList.add("card");
  card.classList.add("active");
  card.setAttribute("data-ancients", ancient.name);
  return card;
}

const createGreetingsModal = () => {
  containerModal.classList.add("container-modal");
  modalTitle.classList.add("modal-title");
  cardContainer.classList.add("card-container");
  modalDescription.classList.add("modal-description");
  modalTitle.innerHTML = `Шаноўны гулец,<br> цябе вітае праграма-дапаможнік да гульні "Старажытны жах"!`;
  modalDescription.innerText =
    "Калі ласка, абяры адзін з прапанаваных сцэнароў:";

  containerModal.append(modalTitle);
  containerModal.append(modalDescription);
  containerModal.append(cardContainer);
  for (let i = 0; i < ancientsData.length; i++) {
    cardContainer.append(createAncientCard(ancientsData[i]));
  }
  container.prepend(containerModal);
};

function openModal() {
  containerModal.classList.add("active");
  modalTitle.classList.add("active");
  cardContainer.classList.add("active");
  modalDescription.classList.add("active");
  createGreetingsModal();
}

function changeModalAfterSeletAncient(element) {
  closeCardAncients(element);
  modalDescription.textContent = "А зараз абяры ўзровень складанaсці:";
}

function closeCardAncients(element) {
  element.forEach((el) => {
    el.classList.remove("active");
    el.style.display = "none";
  });
}

function createDifficultLevelCard(value) {
  const difficultyLevelCard = document.createElement("div");

  difficultyLevelCard.textContent = value;
  difficultyLevelCard.classList.add("difficult-level-card");
  difficultyLevelCard.classList.add("active");
  difficultyLevelCard.setAttribute("data-diff-Level", value);
  cardContainer.append(difficultyLevelCard);
}

function createDeckOfDifficultLevelCards() {
  for (let i = 0; i < difficulty.length; i++) {
    createDifficultLevelCard(difficulty[i]);
  }
}

function closeCardDifficult(el) {
  el.forEach((element) => {
    element.classList.remove("active");
    element.style.display = "none";
  });
  modalDescription.textContent = "Замешваем калоду!";
}

function closeModal() {
  containerModal.remove();
  modalTitle.remove();
  cardContainer.remove();
  modalDescription.remove();
}

function goPlay() {
  const playButton = document.createElement("div");
  playButton.classList.add("go-play-card");
  playButton.classList.add("active");
  playButton.textContent = "Пайшлі гуляць!";
  cardContainer.append(playButton);
}

function closePlayButton() {
  closeModal();
}

export {
  openModal,
  closeModal,
  changeModalAfterSeletAncient,
  indexOfCard,
  ancients,
  createAncientCard,
  createDeckOfDifficultLevelCards,
  closeCardDifficult,
  goPlay,
  closePlayButton,
};

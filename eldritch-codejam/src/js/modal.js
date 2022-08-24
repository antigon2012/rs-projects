const body = document.body;
const container = document.querySelector(".container");
const containerModal = document.createElement("div");
const modalTitle = document.createElement("h2");
const modalDescription = document.createElement("p");
const cardContainer = document.createElement("div");
const cardAncients = document.querySelectorAll(".card");

const ancients = [
  "Azathoth.jpg",
  "Cthulthu.jpg",
  "iogSothoth.jpg",
  "ShubNiggurath.jpg",
];

let indexOfCard = 0;

function createEldritchCard() {
  const card = new Image();

  card.src = `../../assets/Ancients/${ancients[indexOfCard]}`;
  card.classList.add("card");
  card.classList.add("active");
  card.setAttribute("data-ancients", ancients[indexOfCard]);
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
  for (let i = 0; i < ancients.length; i++) {
    indexOfCard = i;
    cardContainer.append(createEldritchCard());
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

function closeModal() {
  containerModal.classList.remove("active");
  modalTitle.classList.remove("active");
  cardContainer.classList.remove("active");
  modalDescription.classList.remove("active");
  cardAncients.forEach((el) => {
    console.log(cardAncients);
    el.classList.remove("active");
  });
}

export { openModal, closeModal, indexOfCard, ancients };

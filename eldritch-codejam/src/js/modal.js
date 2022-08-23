const body = document.body;

const ancients = [
  "Azathoth.jpg",
  "Cthulthu.jpg",
  "IogSothoth.jpg",
  "ShubNiggurath.jpg",
];

let indexOfCard = 0;

function createEldritchCard() {
  const card = new Image();

  card.src = `../../assets/Ancients/${ancients[indexOfCard]}`;
  card.style.cssText = "border-radius: 20px";
  return card;
}

const createGreetingsModal = () => {
  const containerModal = document.createElement("div");
  const modalTitle = document.createElement("h2");
  const modalDescription = document.createElement("p");
  const cardContainer = document.createElement("div");

  containerModal.style.cssText =
    "position: absolute; display: flex; flex-direction: column;align-items: center; height: 70%; padding: 15px 25px; background-color: #000; top: 15%; left: 15vw; min-width: 70vw; min-height: 70%; background-color: #000; opacity: 0.8; border-radius: 25px; letter-spacing: 1.2px;";
  modalTitle.style.cssText =
    "font-size: 2.5rem; color: #7d12ff; margin-bottom: 15px; text-align: center;";
  modalTitle.innerHTML = `Шаноўны гулец,<br> цябе вітае праграма-дапаможнік да гульні "Старажытны жах"!`;
  modalDescription.style.cssText = "font-size: 1.8rem; font-weight: 900;";
  modalDescription.innerText =
    "Калі ласка, абяры адзін з прапанаваных сцэнароў:";
  cardContainer.style.cssText =
    "display: flex; min-height: 50px; gap: 15px; justify-content: center; border-radius: 25px";

  containerModal.append(modalTitle);
  containerModal.append(modalDescription);
  containerModal.append(cardContainer);
  for (let i = 0; i < ancients.length; i++) {
    indexOfCard = i;
    cardContainer.append(createEldritchCard());
  }
  body.append(containerModal);
};

export default createGreetingsModal;

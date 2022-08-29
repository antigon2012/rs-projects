import {
  openModal,
  changeModalAfterSeletAncient,
  createAncientCard,
  createDeckOfDifficultLevelCards,
  closeCardDifficult,
  goPlay,
  closePlayButton,
} from "./modal.js";
import {
  searchCurrentAncientsObject,
  countOfColorCard,
  createGeneralDeck,
  createDeckByStage,
  firstStageDeck,
  secondStageDeck,
  thirdStageDeck,
} from "../js/shuffle.js";
import {
  createDifficultField,
  createCheckfieldDeckOfMyths,
  createDeckButton,
  counter,
} from "./playMode.js";

const container = document.querySelector(".container");

openModal();
// setTimeout(() => {
//   openModal();
// }, 1500);

let ancientCard = {};
let difficultScript = "";
let countOfGreenCards = 0,
  countOfBrownCards = 0,
  countOfBlueCards = 0,
  deckOfPlay = [];

const card = document.querySelectorAll(".card");

document.querySelector(".card-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    changeModalAfterSeletAncient(card);
    ancientCard = searchCurrentAncientsObject(e.target.dataset.ancients);

    countOfGreenCards = countOfColorCard(ancientCard, "green");
    countOfBrownCards = countOfColorCard(ancientCard, "brown");
    countOfBlueCards = countOfColorCard(ancientCard, "blue");

    createDeckOfDifficultLevelCards();

    console.log(ancientCard);
  }
  if (e.target.classList.contains("difficult-level-card")) {
    const diffCard = document.querySelectorAll(".difficult-level-card ");

    difficultScript = e.target.dataset.diffLevel;
    console.log(difficultScript);

    createGeneralDeck(difficultScript);
    closeCardDifficult(diffCard);
    console.log();

    setTimeout(() => {
      goPlay();
    }, 500);
  }
  if (e.target.classList.contains("go-play-card")) {
    deckOfPlay = createDeckByStage(ancientCard);
    closePlayButton();

    const cardAncient = createAncientCard(ancientCard);
    const wrapperAncient = document.createElement("div");

    wrapperAncient.classList.add("wrapper-ancient");
    cardAncient.classList.add("card-ancient");
    wrapperAncient.append(cardAncient);
    wrapperAncient.append(createDifficultField(difficultScript));

    wrapperAncient.append(createDifficultField(`Карт засталося:`));
    container.append(wrapperAncient);
    container.append(createCheckfieldDeckOfMyths(ancientCard));
    container.append(createDeckButton());
    console.log(deckOfPlay);
  }
});

let cardFace = document.querySelector(".card-face");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-shirt-background")) {
    let dataValue = document.querySelector("[data-value = 'Карт засталося:']"),
      flexRow = document.querySelectorAll(".flex-row"),
      countButton = 0;

    // Стартавае значэнне countButton
    for (let i = 0; i < deckOfPlay.length; i++) {
      countButton += deckOfPlay[i].length;
    }
    dataValue.textContent = `Карт засталося: ${countButton}`;

    // console.log((flexRow[2].childNodes[2].textContent -= 1));

    let popEl;
    if (deckOfPlay[deckOfPlay.length - 1].length > 0) {
      popEl = deckOfPlay[deckOfPlay.length - 1].pop();
      console.log(popEl.color);
      countButton = countButton - 1;
      dataValue.textContent = `Карт засталося: ${countButton}`;
    } else {
      deckOfPlay.pop();
      popEl = deckOfPlay[deckOfPlay.length - 1].pop();
      countButton = countButton - 1;
      dataValue.textContent = `Карт засталося: ${countButton}`;
    }
    counter(flexRow, popEl.color, deckOfPlay.length);

    document.querySelector(
      ".card-face"
    ).style.backgroundImage = `url('${popEl.cardFace}')`;
  }
});

export { countOfGreenCards, countOfBrownCards, countOfBlueCards, ancientCard };

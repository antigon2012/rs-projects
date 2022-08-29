import ancientsData from "../../data/ancients.js";
import { cardsDataBlue } from "../../data/mythicCards/blue/index.js";
import { cardsDataGreen } from "../../data/mythicCards/green/index.js";
import { cardsDataBrown } from "../../data/mythicCards/brown/index.js";
import {
  countOfGreenCards,
  countOfBrownCards,
  countOfBlueCards,
} from "../js/index.js";

const shuffleGreen = shuffle(cardsDataGreen),
  shuffleBrown = shuffle(cardsDataBrown),
  shuffleBlue = shuffle(cardsDataBlue);

let deckOfGreen = [],
  deckOfBrown = [],
  deckOfBlue = [];

let firstStageDeck = [],
  secondStageDeck = [],
  thirdStageDeck = [];

function createGeneralDeck(value) {
  const diff = ["easy", "normal", "hard"];

  switch (value) {
    case "Вельмі просты":
      deckOfGreen = createArrayByEasyHardDifficulty(
        shuffleGreen,
        diff[0],
        countOfGreenCards
      );
      deckOfBrown = createArrayByEasyHardDifficulty(
        shuffleBrown,
        diff[0],
        countOfBrownCards
      );
      deckOfBlue = createArrayByEasyHardDifficulty(
        shuffleBlue,
        diff[0],
        countOfBlueCards
      );
      break;

    case "Просты":
      deckOfGreen = createSubEasyHardDeck(
        shuffleGreen,
        diff[2],
        countOfGreenCards
      );
      deckOfBrown = createSubEasyHardDeck(
        shuffleBrown,
        diff[2],
        countOfBrownCards
      );
      deckOfBlue = createSubEasyHardDeck(
        shuffleBlue,
        diff[2],
        countOfBlueCards
      );
      break;

    case "Сярэдні":
      deckOfGreen = shuffleGreen.slice(shuffleGreen.length - countOfGreenCards);
      deckOfBrown = shuffleBrown.slice(shuffleBrown.length - countOfBrownCards);
      deckOfBlue = shuffleBlue.slice(shuffleBlue.length - countOfBlueCards);
      break;

    case "Складаны":
      deckOfGreen = createSubEasyHardDeck(
        shuffleGreen,
        diff[0],
        countOfGreenCards
      );
      deckOfBrown = createSubEasyHardDeck(
        shuffleBrown,
        diff[0],
        countOfBrownCards
      );
      deckOfBlue = createSubEasyHardDeck(
        shuffleBlue,
        diff[0],
        countOfBlueCards
      );
      break;

    case "Вельмі складаны":
      deckOfGreen = createArrayByEasyHardDifficulty(
        shuffleGreen,
        diff[2],
        countOfGreenCards
      );
      deckOfBrown = createArrayByEasyHardDifficulty(
        shuffleBrown,
        diff[2],
        countOfBrownCards
      );
      deckOfBlue = createArrayByEasyHardDifficulty(
        shuffleBlue,
        diff[2],
        countOfBlueCards
      );
      break;
  }
}

function createDeckByStage(ancientObj) {
  let { firstStage, secondStage, thirdStage } = ancientObj;
  function spliceToStage(stage) {
    return [
      ...deckOfGreen.splice(0, stage.greenCards),
      ...deckOfBrown.splice(0, stage.brownCards),
      ...deckOfBlue.splice(0, stage.blueCards),
    ];
  }

  firstStageDeck = [...shuffle(spliceToStage(firstStage))];
  secondStageDeck = [...shuffle(spliceToStage(secondStage))];
  thirdStageDeck = [...shuffle(spliceToStage(thirdStage))];
  console.log(firstStageDeck, secondStageDeck, thirdStageDeck);
  return [thirdStageDeck, secondStageDeck, firstStageDeck];
}

function createArrayByEasyHardDifficulty(arr, diff, countOfCards) {
  let resArr = [];

  const arrCopy = [...arr];

  let arrFilteredByDiff = arrCopy.filter((el) => {
    if (el.difficulty === diff) {
      return el;
    }
  });

  if (arrFilteredByDiff.length < countOfCards) {
    resArr = arrFilteredByDiff.concat(
      arrCopy
        .filter((el) => {
          if (el.difficulty === "normal") {
            return el;
          }
        })
        .slice(arrFilteredByDiff.length - countOfCards)
    );
  } else {
    resArr = [...arrFilteredByDiff.slice(0, countOfCards)];
  }

  return shuffle(resArr);
}

function createSubEasyHardDeck(arr, diff, countOfCards) {
  return arr
    .filter((el) => {
      if (el.difficulty !== diff) {
        return el;
      }
    })
    .slice(-countOfCards);
}

function searchCurrentAncientsObject(value) {
  for (let i = 0; i < ancientsData.length; i++) {
    if (ancientsData[i].name === value) {
      return ancientsData[i];
    }
  }
}

function countOfColorCard(obj, color) {
  return (
    obj.firstStage[`${color}Cards`] +
    obj.secondStage[`${color}Cards`] +
    obj.thirdStage[`${color}Cards`]
  );
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function flipCard() {}

export {
  searchCurrentAncientsObject,
  countOfColorCard,
  createGeneralDeck,
  createDeckByStage,
  firstStageDeck,
  secondStageDeck,
  thirdStageDeck,
};

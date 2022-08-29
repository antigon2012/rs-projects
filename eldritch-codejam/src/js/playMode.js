import { createAncientCard } from "./modal.js";
import { ancientCard } from "./index.js";

function createDifficultField(value) {
  const div = document.createElement("div");
  div.classList.add("difficult-level-card");
  div.classList.add("active");
  div.setAttribute("data-value", value);
  div.textContent = value;

  return div;
}

function createCheckfieldDeckOfMyths(obj) {
  let { firstStage, secondStage, thirdStage } = obj;

  const container = document.createElement("div"),
    containerTitle = document.createElement("h2"),
    subContainer = document.createElement("div"),
    flexRow = document.createElement("div"),
    flexRow1 = document.createElement("div"),
    flexRow2 = document.createElement("div"),
    rowTitle = document.createElement("h3"),
    rowTitle1 = document.createElement("h3"),
    rowTitle2 = document.createElement("h3"),
    cell = document.createElement("div");

  container.classList.add("container-of-deck-of-myths");
  containerTitle.classList.add("container-title");
  subContainer.classList.add("sub-container");
  flexRow.classList.add("flex-row");
  flexRow1.classList.add("flex-row");
  flexRow2.classList.add("flex-row");
  rowTitle.classList.add("row-title");
  rowTitle1.classList.add("row-title");
  rowTitle2.classList.add("row-title");
  cell.classList.add("cell");

  const cellgreen1 = cell.cloneNode(),
    cellgreen2 = cell.cloneNode(),
    cellgreen3 = cell.cloneNode(),
    cellgreen4 = cell.cloneNode(),
    cellgreen5 = cell.cloneNode(),
    cellgreen6 = cell.cloneNode(),
    cellgreen7 = cell.cloneNode(),
    cellgreen8 = cell.cloneNode(),
    cellgreen9 = cell.cloneNode();

  (cellgreen1.textContent = firstStage.greenCards),
    (cellgreen2.textContent = firstStage.brownCards),
    (cellgreen3.textContent = firstStage.blueCards),
    (cellgreen4.textContent = secondStage.greenCards),
    (cellgreen5.textContent = secondStage.brownCards),
    (cellgreen6.textContent = secondStage.blueCards),
    (cellgreen7.textContent = thirdStage.greenCards),
    (cellgreen8.textContent = thirdStage.brownCards),
    (cellgreen9.textContent = thirdStage.blueCards),
    (containerTitle.textContent = "Калода міфаў");
  rowTitle.textContent = "Эпізод I";
  rowTitle1.textContent = "Эпізод II";
  rowTitle2.textContent = "Эпізод III";

  flexRow.prepend(rowTitle, cellgreen1, cellgreen2, cellgreen3);
  flexRow1.append(rowTitle1, cellgreen4, cellgreen5, cellgreen6);
  flexRow2.append(rowTitle2, cellgreen7, cellgreen8, cellgreen9);
  subContainer.append(flexRow, flexRow1, flexRow2);
  rowTitle.cloneNode();
  container.append(containerTitle, subContainer);

  return container;
}

function counter(array, value, controlSum) {
  if (controlSum === 3) {
    switch (value) {
      case "green":
        array[0].childNodes[1].textContent -= 1;
        break;
      case "brown":
        array[0].childNodes[2].textContent -= 1;
        break;
      case "blue":
        array[0].childNodes[3].textContent -= 1;
        break;
    }
  } else if (controlSum === 2) {
    switch (value) {
      case "green":
        array[1].childNodes[1].textContent -= 1;
        break;
      case "brown":
        array[1].childNodes[2].textContent -= 1;
        break;
      case "blue":
        array[1].childNodes[3].textContent -= 1;
        break;
    }
  } else if (controlSum === 1) {
    switch (value) {
      case "green":
        array[2].childNodes[1].textContent -= 1;
        break;
      case "brown":
        array[2].childNodes[2].textContent -= 1;
        break;
      case "blue":
        array[2].childNodes[3].textContent -= 1;
        break;
    }
  }
  // array[index].childNodes;
}

function createDeckButton() {
  const container = document.createElement("div"),
    cardShirt = new Image(),
    cardFace = document.createElement("div");

  cardShirt.src = "../../assets/mythicCardBackground.jpg";

  container.classList.add("deck-of-cards-container");
  cardShirt.classList.add("card-shirt-background");
  cardFace.classList.add("card-face");

  container.append(cardShirt, cardFace);
  return container;
}

export {
  createDifficultField,
  createCheckfieldDeckOfMyths,
  createDeckButton,
  counter,
};

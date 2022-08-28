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

function createCheckfieldDeckOfMyths(array) {
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

  containerTitle.textContent = "Калода міфаў";
  rowTitle.textContent = "Эпізод I";
  rowTitle1.textContent = "Эпізод II";
  rowTitle2.textContent = "Эпізод III";

  flexRow.prepend(rowTitle, cell, cell.cloneNode(), cell.cloneNode());
  flexRow1.append(
    rowTitle1,
    cell.cloneNode(),
    cell.cloneNode(),
    cell.cloneNode()
  );
  flexRow2.append(
    rowTitle2,
    cell.cloneNode(),
    cell.cloneNode(),
    cell.cloneNode()
  );
  subContainer.append(flexRow, flexRow1, flexRow2);
  rowTitle.cloneNode();
  container.append(containerTitle, subContainer);

  return container;
}

function counter(array) {
  arr.forEach((el) => {
    if (el.color === "green") {
      cell.innerText = 1;
    }
  });
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

export { createDifficultField, createCheckfieldDeckOfMyths, createDeckButton };

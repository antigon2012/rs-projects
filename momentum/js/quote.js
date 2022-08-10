import { getRandomNum } from "./slider.js";
export { getQuotes, changeQuote };

const changeQuote = document.querySelector(".change-quote"),
  quote = document.querySelector(".quote"),
  author = document.querySelector(".author");

async function getQuotes() {
  const quotes = "./assets/json/quotes.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let jsonLength = data.length;
  let randomQuotesNum = getRandomNum(1, jsonLength - 1);

  quote.textContent = data[randomQuotesNum].text;
  author.textContent = data[randomQuotesNum].author;
}

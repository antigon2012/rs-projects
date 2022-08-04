const time = document.querySelector(".time");
const date = document.querySelector(".date");

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
};

const showDate = () => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString("en-Br", options);
  date.textContent = currentDate;
  console.log(currentDate);
};

export { showTime, showDate };

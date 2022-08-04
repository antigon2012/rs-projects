const time = document.querySelector(".time");
const dateLocal = document.querySelector(".date");

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
};

const showDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-En", options);
  dateLocal.textContent = currentDate;
};

export { showTime };

export { showGreeting, getTimeOfDay };

const greeting = document.querySelector(".greeting");
const timeOfDayArr = ["night", "morning", "afternoon", "evening"];

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours / 6 < 1) {
    return timeOfDayArr[0];
  } else if (hours / 6 >= 1 && hours / 6 < 2) {
    return timeOfDayArr[1];
  } else if (hours / 6 >= 2 && hours / 6 < 3) {
    return timeOfDayArr[2];
  } else if (hours / 6 >= 3 && hours / 6 < 4) {
    return timeOfDayArr[3];
  }
};

const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  greeting.textContent = `Good ${timeOfDay},`;
};

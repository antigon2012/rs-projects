export { getWeather, setCity, city };

const weatherIcon = document.querySelector(".weather-icon"),
  temperature = document.querySelector(".temperature"),
  weatherDescription = document.querySelector(".weather-description"),
  windDescription = document.querySelector(".wind-description"),
  humidityDescription = document.querySelector(".humidity-description"),
  city = document.querySelector(".city");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (res.status === 400 || res.status === 404) {
    alert("Enter the correct value, please");
  } else {
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    windDescription.textContent = `${Math.round(data.wind.speed)} m/s`;
    humidityDescription.textContent = `${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
  }
}

const setCity = (event) => {
  if (event.code === "Enter") {
    getWeather();
    city.blur();
  }
};

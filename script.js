const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

  const city = document.getElementById("cityInput").value;

  getWeather(city);

});

async function getWeather(city){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  document.getElementById("cityName").innerText = data.name;

  document.getElementById("temperature").innerText =
    Math.round(data.main.temp) + "°C";

  document.getElementById("description").innerText =
    data.weather[0].description;

  document.getElementById("humidity").innerText =
    data.main.humidity + "%";

  document.getElementById("wind").innerText =
    data.wind.speed + " km/h";

}
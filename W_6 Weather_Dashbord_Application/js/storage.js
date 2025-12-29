import { fetchWeather, fetchForecast } from "./api.js";
import { saveCity, getSavedCity } from "./storage.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("cityInput");
const currentWeatherEl = document.getElementById("currentWeather");
const forecastEl = document.getElementById("forecast");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

async function loadWeather(city) {
  try {
    errorEl.classList.add("hidden");
    loadingEl.classList.remove("hidden");

    const weather = await fetchWeather(city);
    const forecast = await fetchForecast(city);

    renderCurrentWeather(weather);
    renderForecast(forecast);
    saveCity(city);
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.classList.remove("hidden");
  } finally {
    loadingEl.classList.add("hidden");
  }
}

function renderCurrentWeather(data) {
  currentWeatherEl.innerHTML = `
    <div class="weather-card">
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    </div>
  `;
}

function renderForecast(data) {
  const days = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 5);

  forecastEl.innerHTML = `
    <h3>5-Day Forecast</h3>
    <div class="forecast-grid">
      ${days.map(day => `
        <div class="forecast-card">
          <p>${day.dt_txt.split(" ")[0]}</p>
          <p>${day.main.temp}°C</p>
        </div>
      `).join("")}
    </div>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadWeather(input.value.trim());
});

const savedCity = getSavedCity();
if (savedCity) {
  loadWeather(savedCity);
}

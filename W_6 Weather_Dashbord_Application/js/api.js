const API_KEY = "1caff8e820384aacbfb111936252912";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export async function fetchWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}

export async function fetchForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not available");
  }

  return response.json();
}

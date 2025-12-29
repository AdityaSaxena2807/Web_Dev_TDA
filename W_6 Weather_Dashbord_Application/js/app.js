const STORAGE_KEY = "preferredCity";
console.log("app.js loaded");

export function saveCity(city) {
  localStorage.setItem(STORAGE_KEY, city);
}

export function getSavedCity() {
  return localStorage.getItem(STORAGE_KEY);
}

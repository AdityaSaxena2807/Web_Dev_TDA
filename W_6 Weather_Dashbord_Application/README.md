# Weather Dashboard Application

## Project Overview

The Weather Dashboard Application is a responsive web app that allows users to search for weather information by city. It displays the current weather and a 5-day forecast using data fetched from a public weather API.

### Project Goals and Objectives
- Fetch real-time weather data using an external API
- Display current weather and forecast information
- Allow city-based searching
- Persist user preferences using Local Storage
- Handle loading states and API errors gracefully
- Ensure responsive and accessible UI

---

## Setup Instructions

### Installation Steps
1. Clone or download the project.
2. Maintain the folder structure as provided.
3. Obtain an API key from OpenWeatherMap.
4. Replace `YOUR_API_KEY_HERE` in `js/api.js`.
5. Open `index.html` in a browser.

No server or build tools are required.

---

## Code Structure

weather-dashboard/\
│\
├── index.html\
├── css/styles.css\
├── js/app.js\
├── js/api.js\
├── js/storage.js\
└── README.md


---

## Technical Details

### Architecture
- Frontend-only client-side architecture
- Modular JavaScript structure

### Algorithms and Logic
- Async/Await used for API calls
- Forecast filtering selects one record per day
- DOM manipulation updates UI dynamically

### Data Structures
- JSON objects returned by API
- Local Storage key-value storage

---

## Testing Evidence

### Sample Test Cases

| Test Case | Expected Result |
|---------|----------------|
| Search valid city | Weather data displayed |
| Search invalid city | Error message shown |
| Reload page | Last searched city loads |
| Slow network | Loading indicator visible |

---

## API Documentation

### Current Weather Endpoint

GET https://api.openweathermap.org/data/2.5/weather

**Parameters:**
- q: City name
- units: metric
- appid: API key

### Forecast Endpoint

GET https://api.openweathermap.org/data/2.5/forecast


**Example Response:**
```json
{
  "main": { "temp": 28 },
  "weather": [{ "description": "clear sky" }]
}


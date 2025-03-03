//https://home.openweathermap.org/api_keys
// I got the API from the link above, but it doesn't seem to work, I'm not sure if it's a problem in my code or in the API itself, but I'm not getting any response

// OpenWeatherMap API Key (Replace with your own API key)

const API_KEY = "38de881050fead2d02705f3e804a66a1";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(`${API_URL}&q=${city}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        updateWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Function to update the UI with weather data
function updateWeather(data) {
    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `Temperature: ${Math.round(
        data.main.temp
    )}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

// Optional: Fetch weather for a default city on page load
fetchWeather("London");

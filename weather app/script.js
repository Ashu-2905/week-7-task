const apiKey = "667314c3bb8f291a875f03ccf6d36bca"; // <-- put your real API key

const citySelect = document.getElementById("citySelect");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");
const errorMsg = document.getElementById("errorMsg");
const loadingMsg = document.getElementById("loadingMsg");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = citySelect.value;

    if (!city) {
        errorMsg.textContent = "Please select a city";
        return;
    }

    errorMsg.textContent = "";
    loadingMsg.textContent = "Loading...";
    weatherBox.style.display = "none";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        displayWeather(data);

    } catch (error) {
        errorMsg.textContent = "Error: " + error.message;
    } finally {
        loadingMsg.textContent = "";
    }
}

function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherBox.style.display = "block";
}

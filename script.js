/*const apiKey = "82d49e0b51b40ffc50e73f5a9dbc12b2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";  // Correct city name
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    // Correct the URL concatenation using template literals
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    var data = await response.json();
    

    // Update the DOM with the weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "img/cloudy.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "img/clear-sky.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png";
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "img/haze.png";
    }
    else if (data.weather[0].main == "sunny") {
        weatherIcon.src = "img/sun.png";
    }
    else if (data.weather[0].main == "night") {
        weatherIcon.src = "img/night.png";
    }

document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});*/
const apiKey = "82d49e0b51b40ffc50e73f5a9dbc12b2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";  // Correct city name
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    // Correct the URL concatenation using template literals
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    
    if (data.cod !== 200) {
        // Handle error if city is not found or invalid response
        alert("City not found, please try again.");
        return;
    }

    // Update the DOM with the weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Define a weather condition to icon mapping
    const weatherIcons = {
        "Clouds": "img/cloudy.png",
        "Clear": "img/clear-sky.png",
        "Rain": "img/clouds.png",
        "Drizzle": "img/drizzle.png",
        "Mist": "img/mist.png",
        "Haze": "img/haze.png",
        "Clear": "img/sun.png", // For sunny conditions
        "night" : "img/night.png",
        "sunny" : "img/sun.png",
        "cloudy" : "img/cloudy.png"

    };

    // Set the weather icon based on the current weather condition
    const condition = data.weather[0].main;
    weatherIcon.src = weatherIcons[condition] || "img/default.png";  // fallback if no match

    // Show the weather container
    document.querySelector(".weather").style.display = "block"; // corrected the display style
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});


const input = document.querySelector("input");
const btn = document.querySelector("button");
const displayContainer = document.querySelector(".display-container");
const apiKey = "d9395e43864942b9912151339242205";

// display container elements
const city = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const desc = document.querySelector(".description");
const emoji = document.querySelector(".emoji");

// window.addEventListener("click", (event) => {
//   displayContainer.style.display = "block";
// });

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const city = input.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
      input.value = ""; // to reset the input value after get city weather
    } catch (error) {
      console.error(error + "can't be empty");
      window.alert(error);
    }
  } else {
    window.alert("please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  const response = await fetch(apiUrl);

  console.log(response);

  if (!response.ok) {
    throw new Error("could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    location: { name },
    current: {
      temp_c,
      humidity,
      wind_kph,
      is_day,
      condition: { code, text, icon },
    },
  } = data;

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const windDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("img");

  displayContainer.textContent = "";

  cityDisplay.textContent = name;
  tempDisplay.textContent = temp_c + "°";
  windDisplay.textContent = `wind: ${wind_kph} K/H`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  weatherEmoji.textContent = getWeatherEmoji(code);
  descDisplay.textContent = text;

  displayContainer.appendChild(cityDisplay);
  displayContainer.appendChild(tempDisplay);
  displayContainer.appendChild(windDisplay);
  displayContainer.appendChild(humidityDisplay);
  displayContainer.appendChild(weatherEmoji);
  displayContainer.appendChild(descDisplay);

  displayContainer.style.visibility = "visible";

  function getWeatherEmoji(weatherId) {
    if (is_day) {
      switch (true) {
        case weatherId == 1000:
          return (weatherEmoji.src = "/day/113.png");
        case weatherId == 1003:
          return (weatherEmoji.src = "/day/116.png");
        case weatherId == 1006:
          return (weatherEmoji.src = "/day/119.png");
        case weatherId == 1009:
          return (weatherEmoji.src = "/day/122.png");
        case weatherId == 1030:
          return (weatherEmoji.src = "/day/143.png");
        case weatherId == 1063:
          return (weatherEmoji.src = "/day/176.png");
        case weatherId == 1066:
          return (weatherEmoji.src = "/day/179.png");
        case weatherId == 1069:
          return (weatherEmoji.src = "/day/182.png");
        case weatherId == 1072:
          return (weatherEmoji.src = "/day/185.png");
        case weatherId == 1087:
          return (weatherEmoji.src = "/day/200.png");
        case weatherId == 1114:
          return (weatherEmoji.src = "/day/227.png");
        case weatherId == 1117:
          return (weatherEmoji.src = "/day/230.png");
        case weatherId == 1135:
          return (weatherEmoji.src = "/day/248.png");
        case weatherId == 1147:
          return (weatherEmoji.src = "/day/260.png");
        case weatherId == 1150:
          return (weatherEmoji.src = "/day/263.png");
        case weatherId == 1153:
          return (weatherEmoji.src = "/day/266.png");
        case weatherId == 1168:
          return (weatherEmoji.src = "/day/281.png");
        case weatherId == 1171:
          return (weatherEmoji.src = "/day/284.png");
        case weatherId == 1180:
          return (weatherEmoji.src = "/day/293.png");
        case weatherId == 1183:
          return (weatherEmoji.src = "/day/296.png");
        case weatherId == 1186:
          return (weatherEmoji.src = "/day/299.png");
        case weatherId == 1189:
          return (weatherEmoji.src = "/day/302.png");
        case weatherId == 1192:
          return (weatherEmoji.src = "/day/305.png");
        case weatherId == 1195:
          return (weatherEmoji.src = "/day/308.png");
        case weatherId == 1198:
          return (weatherEmoji.src = "/day/311.png");
        case weatherId == 1201:
          return (weatherEmoji.src = "/day/314.png");
        case weatherId == 1204:
          return (weatherEmoji.src = "/day/317.png");
        case weatherId == 1207:
          return (weatherEmoji.src = "/day/320.png");
        case weatherId == 1210:
          return (weatherEmoji.src = "/day/323.png");
        case weatherId == 1213:
          return (weatherEmoji.src = "/day/326.png");
        case weatherId == 1216:
          return (weatherEmoji.src = "/day/329.png");
        case weatherId == 1219:
          return (weatherEmoji.src = "/day/332.png");
        case weatherId == 1222:
          return (weatherEmoji.src = "/day/335.png");
        case weatherId == 1225:
          return (weatherEmoji.src = "/day/338.png");
        case weatherId == 1237:
          return (weatherEmoji.src = "/day/350.png");
        case weatherId == 1240:
          return (weatherEmoji.src = "/day/353.png");
        case weatherId == 1243:
          return (weatherEmoji.src = "/day/356.png");
        case weatherId == 1246:
          return (weatherEmoji.src = "/day/359.png");
        case weatherId == 1249:
          return (weatherEmoji.src = "/day/362.png");
        case weatherId == 1252:
          return (weatherEmoji.src = "/day/365.png");
        case weatherId == 1255:
          return (weatherEmoji.src = "/day/368.png");
        case weatherId == 1258:
          return (weatherEmoji.src = "/day/371.png");
        case weatherId == 1261:
          return (weatherEmoji.src = "/day/374.png");
        case weatherId == 1264:
          return (weatherEmoji.src = "/day/377.png");
        case weatherId == 1273:
          return (weatherEmoji.src = "/day/386.png");
        case weatherId == 1276:
          return (weatherEmoji.src = "/day/389.png");
        case weatherId == 1279:
          return (weatherEmoji.src = "/day/392.png");
        case weatherId == 1282:
          return (weatherEmoji.src = "/day/395.png");
        default:
          return "🤷‍♂️";
      }
    } else {
      switch (true) {
        case weatherId == 1000:
          return (weatherEmoji.src = "/night/113.png");
        case weatherId == 1003:
          return (weatherEmoji.src = "/night/116.png");
        case weatherId == 1006:
          return (weatherEmoji.src = "/night/119.png");
        case weatherId == 1009:
          return (weatherEmoji.src = "/night/122.png");
        case weatherId == 1030:
          return (weatherEmoji.src = "/night/143.png");
        case weatherId == 1063:
          return (weatherEmoji.src = "/night/176.png");
        case weatherId == 1066:
          return (weatherEmoji.src = "/night/179.png");
        case weatherId == 1069:
          return (weatherEmoji.src = "/night/182.png");
        case weatherId == 1072:
          return (weatherEmoji.src = "/night/185.png");
        case weatherId == 1087:
          return (weatherEmoji.src = "/night/200.png");
        case weatherId == 1114:
          return (weatherEmoji.src = "/night/227.png");
        case weatherId == 1117:
          return (weatherEmoji.src = "/night/230.png");
        case weatherId == 1135:
          return (weatherEmoji.src = "/night/248.png");
        case weatherId == 1147:
          return (weatherEmoji.src = "/night/260.png");
        case weatherId == 1150:
          return (weatherEmoji.src = "/night/263.png");
        case weatherId == 1153:
          return (weatherEmoji.src = "/night/266.png");
        case weatherId == 1168:
          return (weatherEmoji.src = "/night/281.png");
        case weatherId == 1171:
          return (weatherEmoji.src = "/night/284.png");
        case weatherId == 1180:
          return (weatherEmoji.src = "/night/293.png");
        case weatherId == 1183:
          return (weatherEmoji.src = "/night/296.png");
        case weatherId == 1186:
          return (weatherEmoji.src = "/night/299.png");
        case weatherId == 1189:
          return (weatherEmoji.src = "/night/302.png");
        case weatherId == 1192:
          return (weatherEmoji.src = "/night/305.png");
        case weatherId == 1195:
          return (weatherEmoji.src = "/night/308.png");
        case weatherId == 1198:
          return (weatherEmoji.src = "/night/311.png");
        case weatherId == 1201:
          return (weatherEmoji.src = "/night/314.png");
        case weatherId == 1204:
          return (weatherEmoji.src = "/night/317.png");
        case weatherId == 1207:
          return (weatherEmoji.src = "/night/320.png");
        case weatherId == 1210:
          return (weatherEmoji.src = "/night/323.png");
        case weatherId == 1213:
          return (weatherEmoji.src = "/night/326.png");
        case weatherId == 1216:
          return (weatherEmoji.src = "/night/329.png");
        case weatherId == 1219:
          return (weatherEmoji.src = "/night/332.png");
        case weatherId == 1222:
          return (weatherEmoji.src = "/night/335.png");
        case weatherId == 1225:
          return (weatherEmoji.src = "/night/338.png");
        case weatherId == 1237:
          return (weatherEmoji.src = "/night/350.png");
        case weatherId == 1240:
          return (weatherEmoji.src = "/night/353.png");
        case weatherId == 1243:
          return (weatherEmoji.src = "/night/356.png");
        case weatherId == 1246:
          return (weatherEmoji.src = "/night/359.png");
        case weatherId == 1249:
          return (weatherEmoji.src = "/night/362.png");
        case weatherId == 1252:
          return (weatherEmoji.src = "/night/365.png");
        case weatherId == 1255:
          return (weatherEmoji.src = "/night/368.png");
        case weatherId == 1258:
          return (weatherEmoji.src = "/night/371.png");
        case weatherId == 1261:
          return (weatherEmoji.src = "/night/374.png");
        case weatherId == 1264:
          return (weatherEmoji.src = "/night/377.png");
        case weatherId == 1273:
          return (weatherEmoji.src = "/night/386.png");
        case weatherId == 1276:
          return (weatherEmoji.src = "/night/389.png");
        case weatherId == 1279:
          return (weatherEmoji.src = "/night/392.png");
        case weatherId == 1282:
          return (weatherEmoji.src = "/night/395.png");
        default:
          return "🤷‍♂️";
      }
    }
  }
}

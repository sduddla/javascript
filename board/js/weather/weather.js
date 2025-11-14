import { API_KEY } from './api.js';
const weatherTitle = document.querySelector('#weather-title');
const weatherButton = document.querySelector('#weather-button');
const weatherBox = document.querySelector('#weather-box');

const savedWeather = sessionStorage.getItem('weatherData');
if (savedWeather) {
  const { temp, icon, description } = JSON.parse(savedWeather);

  document.querySelector('#temp').textContent = `${temp}°C`;
  document.querySelector('#description').textContent = description;
  const iconBox = document.querySelector('#icon');
  iconBox.src = icon;
  iconBox.style.display = 'inline';

  weatherTitle.hidden = true;
  weatherButton.hidden = true;
}

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const temp = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      const tempBox = document.querySelector('#temp');
      const iconBox = document.querySelector('#icon');
      const descriptionBox = document.querySelector('#description');

      descriptionBox.textContent = weatherDescription;
      tempBox.textContent = `${temp}°C`;
      iconBox.src = iconUrl;
      iconBox.style.display = 'inline';

      sessionStorage.setItem(
        'weatherData',
        JSON.stringify({
          temp,
          icon: iconUrl,
          description: weatherDescription,
        })
      );
    })
    .catch((error) => {
      weatherBox.textContent = '날씨 정보를 가져올 수 없습니다.';
      console.log(error);
    });
}

function getPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  getWeather(lat, lon);
}

weatherButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(getPosition, (error) => {
    weatherTitle.textContent = '날씨 정보를 가져올 수 없습니다.';
    console.log('위치 정보 오류: ', error);
  });

  weatherTitle.hidden = true;
  weatherButton.hidden = true;
});

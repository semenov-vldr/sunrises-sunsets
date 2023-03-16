
const API_KEY = '&appid=fd04c038b4083dd0d159274298038549';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?id=';
const CITY_ID = 697530;


const headerWeather = document.querySelector('.header .header__weather');

if (headerWeather) {

  // Проверка знака температуры
  const checkPolarity = (value) => value <= 0 ? '' + value: '+' + value;

  const tempWater = headerWeather.querySelector('.header__weather-item-value--water');
  const tempAir = headerWeather.querySelector('.header__weather-item-value--clouds');


  fetch(API_URL + CITY_ID + API_KEY)
    .then((responce) => responce.json())
    .then(res => {
      console.log(res);
      //const waterValue = `${checkPolarity(Math.round(res.main.temp - 273))}°C`;
      const airValue = `${checkPolarity(Math.round(res.main.temp - 273))}°C`;
      //tempWater.textContent = waterValue
      tempAir.textContent = airValue
    })



}


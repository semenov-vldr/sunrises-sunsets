const API_KEY = '&appid=fd04c038b4083dd0d159274298038549';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?id=';
const CITY_ID = 697530;


const header = document.querySelector('.header');

const headerWeather = document.querySelector('.header .header__weather');

if (headerWeather) fetchWeatherValues();


  function fetchWeatherValues () {
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
  };


if (header) {

  let previousPosition = document.documentElement.scrollTop;
  function scrollHeader (header) {
    let currentPosition = document.documentElement.scrollTop;

    if (previousPosition > currentPosition || window.scrollY < 100) {
      header.classList.remove('js-scroll');
      header.classList.add('js-scroll-bg');

    } else {
      header.classList.add('js-scroll');
    }
    if (previousPosition === currentPosition || window.scrollY === 0) {
      header.classList.remove('js-scroll-bg');
    }
    previousPosition = currentPosition;
  }
  // scroll
  window.addEventListener('scroll', () => scrollHeader (header) );




  // ---Выпадающее меню-------
  const NavList = header.querySelectorAll('.header__nav-link, .header__tel-link');

  const subNavList = header.querySelectorAll('.subnav');

  const overlayBg = document.querySelector('.overlay-bg');

  function toggleActive (elem) {
    elem.addEventListener('mouseover', () => {
      overlayBg.classList.add('active');
      document.documentElement.classList.add('js-block-scroll')
    })
    elem.addEventListener('mouseout', () => {
      overlayBg.classList.remove('active');
      document.documentElement.classList.remove('js-block-scroll')
    })
  }

  NavList.forEach(navItem => {
    toggleActive(navItem);
  })

  subNavList.forEach(subNavItem => {
    toggleActive(subNavItem);
  })












}





import React, { useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';

const Weather = () => {
  const api_key = 'df834c31d603a0e29f3cdabf72993e65';
  const [icon, setIcon] = useState();

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value === '') {
      return 0;
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName('humidity');
    const wind = document.getElementsByClassName('wind-speed');
    const temp = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');
    humidity[0].innerHTML = data.main.humidity + ' %';
    wind[0].innerHTML = data.wind.speed + ' km/hr';
    temp[0].innerHTML = Math.floor(data.main.temp) + '°C';
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setIcon(clear);
    } else if (
      data.weather[0].icon === '02d' ||
      data.weather[0].icon === '02n'
    ) {
      setIcon(cloud);
    } else if (
      data.weather[0].icon === '03d' ||
      data.weather[0].icon === '03n'
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === '04d' ||
      data.weather[0].icon === '04n'
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === '09d' ||
      data.weather[0].icon === '09n'
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === '10d' ||
      data.weather[0].icon === '10n'
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === '13d' ||
      data.weather[0].icon === '13n'
    ) {
      setIcon(snow);
    } else {
      setIcon(clear);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='top-bar'>
          <input type='text' className='cityInput' placeholder='Search' />
          <div className='search-icon' onClick={() => search()}>
            <img src={search_icon} alt='search-icon' />
          </div>
        </div>
        <div className='weather-image'>
          <img src={icon} alt='clouds' />
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>New Delhi</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity} alt='' className='icon' />
            <div className='data'>
              <div className='humidity'>69%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={wind} alt='' className='icon' />
            <div className='data'>
              <div className='wind-speed'>69 km/hr</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

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
import thunder from '../assets/thunder.png';
import mist from '../assets/mist.png';

const Weather = () => {
  const api_key = 'df834c31d603a0e29f3cdabf72993e65';
  const [icon, setIcon] = useState(cloud);
  const [weatherInfo, setWeatherInfo] = useState({
    location: 'New Delhi',
    humidity: '69%',
    windSpeed: '69 km/hr',
    temperature: '69°C',
  });

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value === '') {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setWeatherInfo({
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed} km/hr`,
        temperature: `${Math.floor(data.main.temp)}°C`,
        location: data.name,
      });
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
        data.weather[0].icon === '11d' ||
        data.weather[0].icon === '11n'
      ) {
        setIcon(thunder);
      } else if (
        data.weather[0].icon === '13d' ||
        data.weather[0].icon === '13n'
      ) {
        setIcon(snow);
      } else if (
        data.weather[0].icon === '50d' ||
        data.weather[0].icon === '50n'
      ) {
        setIcon(mist);
      } else {
        setIcon(clear);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
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
          <img src={icon} alt='weather icon' />
        </div>
        <div className='weather-temp'>
          {weatherInfo && weatherInfo.temperature}
        </div>
        <div className='weather-location'>
          {weatherInfo && weatherInfo.location}
        </div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity} alt='' className='icon' />
            <div className='data'>
              <div className='humidity'>
                {weatherInfo && weatherInfo.humidity}
              </div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={wind} alt='' className='icon' />
            <div className='data'>
              <div className='wind-speed'>
                {weatherInfo && weatherInfo.windSpeed}
              </div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

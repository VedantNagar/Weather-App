import React from 'react';
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
  return (
    <>
      <div className='container'>
        <div className='top-bar'>
          <input type='text' className='cityInput' placeholder='Search' />
          <div className='search-icon'>
            <img src={search_icon} alt='search-icon' />
          </div>
        </div>
        <div className='weather-image'>
          <img src={cloud} alt='clouds' />
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

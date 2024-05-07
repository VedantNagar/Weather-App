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
      </div>
    </>
  );
};

export default Weather;

import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = ({ temperature }) => (
    <div className="weatherDataContainer">
        <WeatherTemperature 
            temperature={20} 
            weatherState={CLOUDY}
        />
        <WeatherExtraInfo humidity={80} wind={"10 ms/s"} />
    </div>
);

export default WeatherData;
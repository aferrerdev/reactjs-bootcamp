import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD, SUN, RAIN, SNOW, DRIZZLE, THUNDER 
} from './../../../constants/weathers';

const icons = {
    [SUN]: 'day-sunny',
    [CLOUD]: 'cloud',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [DRIZZLE]: 'day-showers',
    [THUNDER]: 'day-thunderstore'
};
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={'day-sunny'} size="2x"/>;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureContainer">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
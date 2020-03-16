import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
/**
 * First functional component
 * @param props 
 */
const WeatherLocation = (props) => (
    <div className="weatherLocationContainer">
        <Location city={"Buenos Aires"} />
        <WeatherData />
    </div>
);

export default WeatherLocation;

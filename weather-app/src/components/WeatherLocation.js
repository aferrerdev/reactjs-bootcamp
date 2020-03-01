import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

/**
 * First functional component
 * @param props 
 */
const WeatherLocation = (props) => (
    <div>
        <Location city={"Buenos Aires"} />
        <WeatherData />
    </div>
);

export default WeatherLocation;

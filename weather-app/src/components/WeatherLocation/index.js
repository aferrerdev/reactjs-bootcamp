import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { SUN } from '../../constants/weathers';

const data =  {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 ms/s'
}

/**
 * First functional component
 * @param props 
 */
const WeatherLocation = (props) => (
    <div className="weatherLocationContainer">
        <Location city={"Buenos Aires"} />
        <WeatherData data={data} />
    </div>
);

export default WeatherLocation;

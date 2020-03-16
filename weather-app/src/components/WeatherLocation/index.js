import React, { Component } from 'react';
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
 * Class component: we need to use class 
 * components when we need something to do in the lifecycle.
 * @param props 
 */
class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationContainer">
                <Location city={"Buenos Aires"} />
                <WeatherData data={data} />
            </div>
        );
    }
}

export default WeatherLocation;

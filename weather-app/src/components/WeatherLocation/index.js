import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { SUN, CLOUD } from '../../constants/weathers';

/**
 * Class component: we need to use class 
 * components when we need something to do in the lifecycle.
 * @param props 
 */
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: {
                temperature: 5,
                weatherState: SUN,
                humidity: 10,
                wind: '10 ms/s'
            }
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'Barcelona',
            data: {
                temperature: 20,
                weatherState: CLOUD,
                humidity: 80,
                wind: '10 ms/s'
            }
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationContainer">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;

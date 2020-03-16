import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import transformWeather from './../../services/transformWeather';
import { SUN } from './../../constants/weathers';
import { api_weather } from './../../constants/api_url';

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

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({ data: newWeather });
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

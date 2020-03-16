import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { SUN, CLOUD } from '../../constants/weathers';
import convert from 'convert-units';
const location = "Buenos Aires,ar";
const api_key = "";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`
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

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp)
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(1));
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({ data: newWeather });
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

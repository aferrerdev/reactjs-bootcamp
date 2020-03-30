import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import { url_base_forecast, api_key } from './../constants/api_url'
import transformForecast from './../services/transformForecast';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const url = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;
        fetch(url).then(response => response.json())
            .then(weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => {
            return <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                data={forecast.data}
                hour={forecast.hour}> 
                </ForecastItem>;
        });
    }

    renderProgress() {
        return (<CircularProgress size={50} />);
    }

    render() {
        const city = this.props.city;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para <br></br>{city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;
import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'

const renderForecastItemDays = forecastData => {
    return forecastData.map(forecast => {
        return <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            data={forecast.data}
            hour={forecast.hour}> 
            </ForecastItem>;
    });
}

const renderProgress = () => {
    return (<CircularProgress size={50} />);
};

const ForecastExtended = ({ city, forecastData }) => {
    return (
        <div>
            <h2 className="forecast-title">Pronóstico Extendido para <br></br>{city}</h2>
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()
            }
        </div>
    )
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;
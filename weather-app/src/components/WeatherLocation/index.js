import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => {
    return (
        <div className="weatherLocationContainer" 
             onClick={onWeatherLocationClick}>
            <Location city={city} />
            { data ? 
                <WeatherData data={data} /> : 
                <CircularProgress size={50} />}
        </div>
    )
};


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;

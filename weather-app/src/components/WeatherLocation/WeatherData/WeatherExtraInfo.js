import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfo">
        <span>{`${humidity} % -`}</span>
        <span>{`${wind} wind`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;
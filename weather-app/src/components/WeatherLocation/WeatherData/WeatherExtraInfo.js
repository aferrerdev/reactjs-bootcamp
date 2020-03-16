import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfo">
        <span className="extraInfoText">{`Humedad: ${humidity} % -`}</span>
        <span className="extraInfoText">{`Viento ${wind} wind`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component {
    render() {
        const city = this.props.city;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para <br></br>{city}</h2>
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;
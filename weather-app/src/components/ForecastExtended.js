import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
];
const data = {
    temperature: 10,
    humidity: 10,
    weaherState: 'normal',
    wind: 'normal'
};
class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map(day => {
            return <ForecastItem weekDay={day} data={data}></ForecastItem>;
        });
    }

    render() {
        const city = this.props.city;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para <br></br>{city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;
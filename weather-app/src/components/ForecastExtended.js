import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'

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

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    renderForecastItemDays() {
        return "Render items";
        /*
        return days.map(day => {
            return <ForecastItem weekDay={day} data={data}></ForecastItem>;
        });
        */
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
                    this.renderForecastItemDays() :
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
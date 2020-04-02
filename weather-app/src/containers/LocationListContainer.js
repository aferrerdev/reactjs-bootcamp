import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from './../reducers'

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
        this.props.setCity(this.props.city)
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
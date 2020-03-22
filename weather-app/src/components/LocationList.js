import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => {
    return cities.map(city => <WeatherLocation key={city} city={city} />);
}

const LocationList = ({ cities }) => {
    return(
        <div>
            {strToComponents(cities)}
        </div>
    )
};

Location.propTypes =  {
    cities: PropTypes.array.isRequired
}

export default LocationList;
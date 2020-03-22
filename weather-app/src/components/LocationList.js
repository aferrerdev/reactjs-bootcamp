import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={"Buenos Aires, ar"} />
        <WeatherLocation city={"Bogota"} />
        <WeatherLocation city={"Mexico"} />
        <WeatherLocation city={"Barcelona"} />
    </div>
);

export default LocationList;
import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={"Barcelona, es"} />
        <WeatherLocation city={"Buenos Aires, ar"} />
        <WeatherLocation city={"Bogota,col"} />
        <WeatherLocation city={"Mexico"} />
        <WeatherLocation city={"Washington, us"} />
    </div>
);

export default LocationList;
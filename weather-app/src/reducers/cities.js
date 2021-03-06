import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from './../actions'
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            const data = { ...state[city], forecastData, forecastDataDate: new Date() };
            return { ...state, [city]: data};
        } 
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return { ...state, [city]: { weather: null }};
        }
        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            return { ...state, [city]: { weather: weather }};
        }
        default:
            return state;
    }
};

/**
 * Get forecast information for a city
 * @param {*} state 
 * @param {*} city 
 */
export const getForecastDataFromCities = 
    createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));

export const getWeatherCities = 
    createSelector(state => fromObjToArray(state), cities => cities);
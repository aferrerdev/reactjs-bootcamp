import { SET_FORECAST_DATA } from './../actions'

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { forecastData, weather: null }};
        default:
            return state;
    }
};

/**
 * Get forecast information for a city
 * @param {*} state 
 * @param {*} city 
 */
export const getForecastDataFromCities = (state, city) => {
    return state[city] && state[city].forecastData;
};
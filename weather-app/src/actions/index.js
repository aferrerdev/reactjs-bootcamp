import { url_base_forecast, api_key } from './../constants/api_url';
import transformWeather from './../services/transformWeather';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload });
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });

/**
 * Set selected city
 * @param {*} payload 
 */
export const setSelectedCity = payload => {
    return dispatch => {
        const url = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
        
        // Activar en el estado un indiacdor de búsqueda de datos.
        dispatch(setCity(payload));

        return fetch(url)
            .then(response => response.json())
            .then(weather_data => {
                // Parsear pronóstico recibido desde la api
                const forecastData = transformForecast(weather_data);

                // Modificar el estado con el resultado de la promise del (fetch)
                dispatch(setForecastData({city: payload, forecastData }))
            });
    };
}

/**
 * Set Weather
 * @param {*} payload 
 */
export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then(resolve => {
                return resolve.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, data }))
            });
        });
        
    };
}
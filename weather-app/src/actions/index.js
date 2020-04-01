import { url_base_forecast, api_key } from './../constants/api_url'
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload });

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
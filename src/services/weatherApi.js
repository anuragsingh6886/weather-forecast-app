import axios from 'axios';

const API_KEY = '8d9f53d49641ff8af391647c3bff2868';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


const fetchWeatherData = async (city, endpoint) => {
    const params = {
      q: city,
      appid: API_KEY,
      units: 'metric',
    };

    const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
    return response.data;
};

export const getCurrentWeather = async (city) => {
    return fetchWeatherData(city, 'weather');
}

export const getFiveDayForecast = async (city) => {
    return fetchWeatherData(city, 'forecast');
};
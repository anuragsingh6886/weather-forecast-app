import React, { useState, useEffect } from 'react';
import { getCurrentWeather, getFiveDayForecast } from '../services/weatherApi';

const useWeather = (initialCity) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState(initialCity);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          setLoading(true);
          const [weather, forecast] = await Promise.all([
            getCurrentWeather(city),
            getFiveDayForecast(city)
          ]);
          setWeatherData(weather);
          setForecastData(forecast);
          setError(null);
        } catch (err) {
          setError("Error fetching weather data: " + err.message);
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchWeatherData();
    }, [city]);

    const updateCity = (newCity) => {
        setCity(newCity);
    };

  return { weatherData, forecastData, error, loading, updateCity };
};

export default useWeather;
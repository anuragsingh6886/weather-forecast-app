import React from 'react';
import useWeather from './hooks/useWeather';
import CitySearch from './components/CitySearch';
import { TemperatureProvider } from './TempratureContext';
import CurrentWeather from './components/CurrentWeatherCard';
import WeatherMoreInfo from './components/WeatherMoreInfo';
import ForecastCard from './components/ForecastCard';
import ErrorMessage from './components/ErrorPage';
import './scss/global.scss';

const App = () => {
  const { weatherData, forecastData, error, loading, updateCity } = useWeather('New York');

  const handleCitySelect = (selectedCity) => {
    updateCity(selectedCity);
  };

  if (error) return <ErrorMessage message={error} />;

  return (
    <TemperatureProvider>
      <div className="App container">
      <div className='lg-left'>
        <CitySearch onCitySelect={handleCitySelect} />
        {loading ? (
            <p className='loading-text'>Loading...</p>
          ) : (
            <CurrentWeather data={weatherData} />
        )}
      </div>
      <div className='lg-right'>
      {loading ? (
            <p className='loading-text'>Loading...</p>
          ) : (
            <>
              <WeatherMoreInfo data={weatherData} />
              <ForecastCard data={forecastData}  />
            </>
         )}
      </div>
    </div>
    </TemperatureProvider>
  );
}

export default App;
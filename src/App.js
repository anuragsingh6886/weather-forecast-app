import React from 'react';
import useWeather from './hooks/useWeather';
import CitySearch from './components/CitySearch';
import { TemperatureProvider } from './TempratureContext';
import CurrentWeather from './components/CurrentWeatherCard';
import WeatherMoreInfo from './components/WeatherMoreInfo';
import ForecastCard from './components/ForecastCard';
import './scss/global.scss';

const App = () => {
  const { weatherData, forecastData, error, loading, updateCity } = useWeather('New York');

  const handleCitySelect = (selectedCity) => {
    updateCity(selectedCity);
  };

  if (loading) return <div>Page is Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TemperatureProvider>
      <div className="App container">
      <div className='lg-left'>
        <CitySearch onCitySelect={handleCitySelect} />
        <CurrentWeather data={weatherData} />
      </div>
      <div className='lg-right'>
        <WeatherMoreInfo data={weatherData} />
        <ForecastCard data={forecastData} />
      </div>
    </div>
    </TemperatureProvider>
  );
}

export default App;


// VD Link Desktop = https://www.figma.com/design/Fg1zveVfFhT71zvSVTUoie/TypeWeather-(Community)?node-id=314-1304&node-type=frame&t=wM6PTCcOFN2UDB1Z-0
// VD link Mobile & Tab = https://www.figma.com/design/Fg1zveVfFhT71zvSVTUoie/TypeWeather-(Community)?node-id=314-581&node-type=frame&t=wM6PTCcOFN2UDB1Z-0
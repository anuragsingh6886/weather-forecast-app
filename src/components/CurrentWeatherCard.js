import React from 'react';
import { useTemperature } from '../TempratureContext';
import useTemperatureConverter from '../hooks/useTempConverter';

const CurrentWeather = ({ data }) => {

    const { isCelsius } = useTemperature();
    const { formatTemp } = useTemperatureConverter(isCelsius);

    if (!data) return null;

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const { name, main, weather, sys } = data;
    const { temp, feels_like } = main;
    const { description, icon } = weather[0];
    const { country } = sys;

    return (
        <div className="current-weather-card card">
            <div className='loaction-detail'>
                <div className='loaction'>
                    <h2>{name}, {country}</h2>
                </div>
                <div className='time'>
                    <p>{formatTime(data.dt)}</p>
                </div>
            </div>
            <div className="weather-details">
                <div className="temperature">
                    <h1>{formatTemp(temp)}</h1>
                    <p>Feels like {formatTemp(feels_like)}</p>
                    <p>{description}</p>
                </div>
                <div className="description">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;
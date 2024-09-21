import React from 'react';
import tempIcon from '../assetes/icons/temp.svg';
import rainIcon from '../assetes/icons/rain.svg';
import humidtyIcon from '../assetes/icons/humidity.svg';
import windIcon from '../assetes/icons/wind.svg';
import uvIcon from '../assetes/icons/uv-ind.svg';
import { useTemperature } from '../TempratureContext';
import useTemperatureConverter from '../hooks/useTempConverter';

const WeatherMoreInfo = ({ data }) => {
    const { main, wind, clouds } = data;
    const { feels_like, humidity } = main;
    const { speed } = wind;
    const { isCelsius } = useTemperature();

    const { formatTemp } = useTemperatureConverter(isCelsius);

    return (
        <div className="weather-more-info card">
            <h3>Today Weather Details</h3>
            <div className='temp weather-info-fields'>
                <img className='icons' src={tempIcon} alt="tempreture icon" />
                <div className='detail-text'>
                    <p className='head-text'>Feels Like</p>
                    <h4 className='field-val'>{formatTemp(feels_like)}</h4>
                </div>
            </div>
            <div className='rain-prob weather-info-fields'>
                <img className='icons' src={rainIcon} alt="rain icon" />
                <div className='detail-text'>
                    <p className='head-text'>Chance of Rain</p>
                    <h4 className='field-val'>{clouds.all}%</h4>
                </div>
            </div>
            <div className='wind-speed weather-info-fields'>
                <img className='icons' src={windIcon} alt="wind-speed icon" />
                <div className='detail-text'>
                    <p className='head-text'>Wind Speed</p>
                    <h4 className='field-val'>{speed} m/s</h4>
                </div>
            </div>
            <div className='air-humidity weather-info-fields'>
                <img className='icons' src={humidtyIcon} alt="humidty icon" />
                <div className='detail-text'>
                    <p className='head-text'>Humidity</p>
                    <h4 className='field-val'>{humidity}%</h4>
                </div>
            </div>
            <div className='uv-index weather-info-fields'>
                <img className='icons' src={uvIcon} alt="uv-index icon" />
                <div className='detail-text'>
                    <p className='head-text'>UV Index</p>
                    <h4 className='field-val'>N/A</h4>
                </div>
            </div>
        </div>
    )
}

export default WeatherMoreInfo;
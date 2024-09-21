import React from 'react';
import { useTemperature } from '../TempratureContext';
import useTemperatureConverter from '../hooks/useTempConverter';

const ForecastCard = ({ data }) => {

    const { isCelsius } = useTemperature();

    const getForecastFiveDay = (list) => {
        const daysData = {};
        list.forEach(day => {
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            if (!daysData[date]) {
                daysData[date] = day;
            }
        });
        return Object.values(daysData).slice(1, 6);
    }

    const fiveDayForecast = getForecastFiveDay(data.list);

    const { formatTemp } = useTemperatureConverter(isCelsius);

    return (
        <div className="forecast-card card d-flex w-100">
            <div>
                <h3>5 Day Forecast</h3>
            </div>
            <div className='d-flex w-100 mt-2'>
                {fiveDayForecast.map((day, index) => (
                    <div key={index} className='day'>
                        <p className='day-field d-none d-lg-block'>
                            {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                        </p>
                        <p className='day-field d-block d-lg-none'>
                            {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                        </p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                        <p className='description'>{day.weather[0].description}</p>
                        <span className='temp'>
                            <p className='max-temp'>{formatTemp(day.main.temp_max)}</p>
                            <p className='min-temp'>{formatTemp(day.main.temp_min)}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForecastCard;
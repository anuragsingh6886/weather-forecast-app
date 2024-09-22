# Weather Forecast Application

## Overview
This React-based weather forecast application allows users to view current weather conditions and a 5-day forecast for any city. It features a clean, responsive design with temperature unit conversion and city search functionality.

## Features
- Display current weather for a default city (New York)
- Search functionality to find weather information for any city
- 5-day weather forecast
- Temperature unit conversion (Celsius/Fahrenheit)
- Responsive design for various screen sizes
- Error handling for API calls and invalid inputs

![image](https://github.com/user-attachments/assets/e95587d9-aaf6-40bf-bc58-5b5cbd102d4d)

## Requirements
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation
1. Clone the repository:
    `git clone https://github.com/yourusername/weather-forecast-app.git`
    `cd weather-forecast-app`

2. Install dependencies:
    `npm install`

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    `REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here`

4. Start the development server:
    `npm start`

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## Components
- `App.js`: Main component that orchestrates the application
- `CurrentWeatherCard.js`: Displays current weather information
- `CitySearch.js`: Handles city search functionality
- `CityList.jsx`: Handles city suggestions based on user input (or predefined list of major cities)
- `ForecastCard.js`: Displays weather forecast for upcoming five days
- `TemperatureToggle.js`: Toggles between Celsius and Fahrenheit
- (Optional) `WeatherMoreInfo.js`: Displays additional weather details (if used)

## Custom Hooks
- `useWeather.js`: Manages weather data fetching and state
- `useTempConverter.js`: Converts and formats weather data from Celsius to Fahrenheit

## API Integration
This project uses the OpenWeatherMap API to fetch weather data. You need to sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file.

## Styling
The application uses SASS for styling, which is a CSS preprocessor. The main styles are defined in `src/scss/global.scss`. The design is responsive and adapts to different screen sizes.

## Figma Visual Design (VD)
- VD Link Desktop = `https://www.figma.com/design/Fg1zveVfFhT71zvSVTUoie/TypeWeather-(Community)?node-id=314-1304&node-type=frame&t=wM6PTCcOFN2UDB1Z-0`
- VD link Mobile & Tab = `https://www.figma.com/design/Fg1zveVfFhT71zvSVTUoie/TypeWeather-(Community)?node-id=314-581&node-type=frame&t=wM6PTCcOFN2UDB1Z-0`

## Lighthouse Performace report
![image](https://github.com/user-attachments/assets/1b30de47-01ff-411e-a1db-db2d28e216e0)

## License
This project is open source and available under the [MIT License](LICENSE).

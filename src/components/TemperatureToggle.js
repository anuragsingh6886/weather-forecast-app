import { useTemperature } from '../TempratureContext'

const TemperatureToggle = () => {

    const { isCelsius, toggleUnit } = useTemperature();

    return (
      <button onClick={toggleUnit} className="temp-toggle">
        {isCelsius ? '°F' : '°C'}
      </button>
    );
};

export default TemperatureToggle;
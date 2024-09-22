import React from 'react';

const useTemperatureConverter = (isCelsius) => {
  const convertTemp = (temp) => {
    if (isCelsius) {
      return temp;
    }
    return (temp * 9 / 5) + 32;
  };

  const formatTemp = (temp) => {
    const convertedTemp = convertTemp(temp);
    return `${Math.round(convertedTemp)}°${isCelsius ? 'C' : 'F'}`;
  };

  return { formatTemp };
};

export default useTemperatureConverter;
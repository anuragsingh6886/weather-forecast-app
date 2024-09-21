import React, { useState, createContext, useContext } from 'react';

const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
    const [isCelsius, setIsCelsius] = useState(true);

    const toggleUnit = () => {
        setIsCelsius(prev => !prev);
    };

    return (
        <TemperatureContext.Provider value={{ isCelsius, toggleUnit }}>
        {children}
        </TemperatureContext.Provider>
    );
}

export const useTemperature = () => useContext(TemperatureContext);
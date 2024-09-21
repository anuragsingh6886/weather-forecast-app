    import React, { useState } from 'react';
    import City from './CityList.js'
    import TemperatureToggle from './TemperatureToggle.js';


    const CitySearch = ({ onCitySelect }) => {
        const [search, setSearch] = useState('');
        const [suggestions, setSuggestions] = useState([]);

        const searchSuggestions = (term) => {
            return City.filter(city =>
                city.toLowerCase().includes(term.toLowerCase())
            );
        }

        const handleInputChange = (e) => {
            const value = e.target.value;
            setSearch(value);
            setSuggestions(searchSuggestions(value));
        };

        const handleCitySelect = (city) => {
            onCitySelect(city);
            setSearch('');
            setSuggestions([]);
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (search.trim() !== '') {
                    if (suggestions.length > 0) {
                        handleCitySelect(suggestions[0]);
                    } else {
                        handleCitySelect(search.trim());
                    }
                }
            }
        };

        return (
            <div className="city-search card">
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for Location..."
                />
                {suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.slice(0, 5).map(city => (
                        <li key={city} onClick={() => handleCitySelect(city)}>
                            {city}
                        </li>
                        ))}
                    </ul>
                )}
                <TemperatureToggle />
            </div>
        )
    }

    export default CitySearch;
import React from "react";

const CitySelector = ({ cities, selectedCity, onCityChange }) => (
  <div>
    <label htmlFor="city" className="mr-2">
      Select City:
    </label>
    <select
      id="city"
      onChange={(e) => onCityChange(e.target.value)}
      value={selectedCity}
      className="p-2 rounded text-black"
    >
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>
);

export default CitySelector;

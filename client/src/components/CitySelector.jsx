import React from "react";

const CitySelector = ({ cities, selectedCity, setSelectedCity }) => {
  return (
    <div className="mb-4">
      <label htmlFor="city" className="mr-2 text-white">
        Select City:
      </label>
      <select
        id="city"
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
        className="p-2 border rounded"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;

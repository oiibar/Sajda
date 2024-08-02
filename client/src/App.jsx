import React, { useState, useEffect, useCallback, useMemo } from "react";
import Time from "./components/Time";
import CitySelector from "./components/CitySelector";
import { getTime } from "./api/sajdaApi";
import { formatDateTime } from "./utils/formatDate";
import { cities } from "./constants";

// Create a cache for city data
const cache = new Map();

const App = () => {
  const [city, setCity] = useState(cities[0]);
  const [times, setTimes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dateDisplay, setDateDisplay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Check if data is in cache
        if (cache.has(city)) {
          const data = cache.get(city);
          setTimes(data);
          if (data?.date) {
            setDateDisplay(formatDateTime(data.date));
          }
        } else {
          // Fetch from API if not in cache
          const data = await getTime(city);
          cache.set(city, data);
          setTimes(data);
          if (data?.date) {
            setDateDisplay(formatDateTime(data.date));
          }
        }
      } catch (error) {
        console.error("Failed to fetch time data:", error.message || error);
        setTimes({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = useCallback((newCity) => {
    setCity(newCity);
  }, []);

  const memoizedDateDisplay = useMemo(() => dateDisplay, [dateDisplay]);

  return (
    <div className="relative h-screen flex items-center flex-col gap-10 justify-center bg-custom">
      <div className="absolute top-4 left-4">
        <pre className="font-montserrat">{memoizedDateDisplay}</pre>
      </div>
      <CitySelector
        cities={cities}
        city={city}
        onCityChange={handleCityChange}
      />
      <Time times={times} isLoading={isLoading} />
    </div>
  );
};

export default App;

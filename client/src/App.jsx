import React, { useState, useEffect } from "react";
import Time from "./components/Time";
import CitySelector from "./components/CitySelector";
import { getTime } from "./api/sajdaApi";
import { formatDateTime } from "./utils/formatDate";

const cities = ["Astana", "Almaty", "Oskemen", "Shymkent"];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [times, setTimes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTime(selectedCity);
        setTimes(data || {});
        if (data?.date) {
          setCurrentDateTime(formatDateTime(data.date));
        }
      } catch (error) {
        console.error("Failed to fetch time data:", error.message || error);
        setTimes({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCity]);

  return (
    <div className="relative h-screen flex items-center flex-col gap-10 justify-center bg-custom">
      <div className="absolute top-4 left-4">
        <pre className="font-montserrat">{currentDateTime}</pre>
      </div>
      <CitySelector
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />
      <Time times={times} isLoading={isLoading} />
    </div>
  );
};

export default App;

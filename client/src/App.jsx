import React, { useState, useEffect } from "react";
import Prayer from "./components/Prayer";
import CitySelector from "./components/CitySelector";
import { getTime } from "./api/sajdaApi";
import { formatDateTime } from "./utils/formatDate";

const cities = ["Astana", "Almaty", "Oskemen", "Shymkent"];

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchTime = async () => {
      try {
        const data = await getTime(selectedCity);
        setState(data || {});
        // Extract date from data and format it
        if (data && data.date) {
          setCurrentDateTime(formatDateTime(data.date));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchTime();
  }, [selectedCity]);

  return (
    <div className="relative h-screen text-black flex items-center flex-col justify-center bg-custom">
      {/* Render formatted date and time */}
      <div className="absolute top-4 left-4 text-white text-md">
        <pre className="font-montserrat">{currentDateTime}</pre>
      </div>
      <CitySelector
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Prayer state={state} isLoading={isLoading} />
    </div>
  );
}

export default App;

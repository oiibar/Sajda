import React, { useState, useEffect } from "react";
import Prayer from "./components/Prayer";
import CitySelector from "./components/CitySelector";
import { getTime } from "./api/sajdaApi";

const cities = ["Astana", "Almaty", "Oskemen", "Shymkent"];

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [state, setState] = useState({}); // Initialize state as an empty object
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchTime = async () => {
      try {
        const data = await getTime(selectedCity);
        setState(data || {}); // Ensure state is always an object
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({}); // Handle errors by setting state to an empty object
      } finally {
        setIsLoading(false);
      }
    };

    fetchTime();
  }, [selectedCity]);

  return (
    <div className="relative h-screen text-black flex items-center flex-col justify-center bg-red">
      <CitySelector
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {isLoading ? <div>Loading...</div> : <Prayer state={state} />}
    </div>
  );
}

export default App;

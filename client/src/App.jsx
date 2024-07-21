import React, { useState, useEffect } from "react";
import Time from "./components/Time";
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
    <div className="relative h-screen flex items-center flex-col gap-10 justify-center bg-custom">
      <div className="absolute top-4 left-4">
        <pre className="font-montserrat">{currentDateTime}</pre>
      </div>
      <CitySelector
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Time state={state} isLoading={isLoading} />
    </div>
  );
}

export default App;

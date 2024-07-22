import React from "react";

const Time = ({ times, isLoading }) => {
  const keys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const renderTimes = () =>
    keys.map((key) => (
      <div key={key} className="time">
        <p>{key}:</p>
        <p className="font-bold">
          {isLoading ? "--:--" : times[key] || "--:--"}
        </p>
      </div>
    ));

  return <div className="times">{renderTimes()}</div>;
};

export default Time;

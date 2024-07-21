import React from "react";

const Time = ({ times, isLoading }) => {
  const keys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  if (isLoading) {
    return (
      <div className="times">
        {keys.map((key) => (
          <div key={key} className="time">
            <p>{key}:</p>
            <p className="font-bold">--:--</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="times">
      {keys.map((key) => (
        <div key={key} className="time">
          <p>{key}:</p>
          <p className="font-bold">{times[key] || "--:--"}</p>
        </div>
      ))}
    </div>
  );
};

export default Time;

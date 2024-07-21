import React from "react";

function Time({ state, isLoading }) {
  const keys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const entries = Object.entries(state);
  const dataMap = new Map(entries);

  return (
    <div className="times">
      {isLoading
        ? keys.map((key, index) => (
            <div key={index} className="time">
              <p>{key}:</p> <p className="font-bold">--:--</p>
            </div>
          ))
        : keys.map((key, index) => (
            <div key={index} className="time">
              <p>{key}:</p>{" "}
              <p className="font-bold">{dataMap.get(key) || "--:--"}</p>
            </div>
          ))}
    </div>
  );
}

export default Time;

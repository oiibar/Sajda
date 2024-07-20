import React from "react";

function Prayer({ state, isLoading }) {
  const keys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const entries = Object.entries(state);
  const dataMap = new Map(entries);

  return (
    <div className="prayer">
      {isLoading
        ? keys.map((key, index) => (
            <div key={index} className="flex gap-10 justify-between mb-4">
              <p>{key}:</p> <p className="font-bold">--:--</p>
            </div>
          ))
        : keys.map((key, index) => (
            <div key={index} className="flex gap-10 justify-between mb-4">
              <p>{key}:</p>{" "}
              <p className="font-bold">{dataMap.get(key) || "--:--"}</p>
            </div>
          ))}
    </div>
  );
}

export default Prayer;

import React from "react";

function Prayer({ state }) {
  // Convert the object to an array of key-value pairs
  const entries = Object.entries(state);

  return (
    <div className="prayer">
      {entries.length > 0 ? (
        entries.map(([key, value], index) => (
          <div key={index} className="flex justify-between mb-4">
            <span>{key}:</span> <span>{value}</span>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default Prayer;

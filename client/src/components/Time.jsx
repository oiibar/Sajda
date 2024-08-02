import React from "react";
import { keys } from "../constants";

const Time = ({ times, isLoading }) => {
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

import React from "react";
import "@styles/EnvironmentSynthesis.css";

function EnvironmentSynthesis({ city }) {
  return (
    <div className="main-synthesis">
      <div className="city">{city}</div>
      <div className="weather">soleil</div>
      <div className="iqa">52</div>
      <div className="temperature">32°C</div>
    </div>
  );
}

export default EnvironmentSynthesis;

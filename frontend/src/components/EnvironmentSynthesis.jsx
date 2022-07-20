import React, { useEffect, useState } from "react";
import { api } from "@services/axios";
import "@styles/EnvironmentSynthesis.css";

function EnvironmentSynthesis({ city }) {
  const [aqiData, setAqiData] = useState();
  useEffect(() => {
    const ENDPOINT =
      "https://api.waqi.info/feed/Montpellier/?token=830b0f5628f9c274bebec5286621dcb6e38dd0f0";
    api
      .get(ENDPOINT)
      .then((result) => setAqiData(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main-synthesis">
      <div className="city">{city}</div>
      <div className="weather">soleil</div>
      <div className="iqa">Index pollution : {aqiData.data.aqi}</div>
      <div className="temperature">32°C</div>
    </div>
  );
}

export default EnvironmentSynthesis;

import React, { useEffect, useState } from "react";
import api from "@services/axios";
import "@styles/EnvironmentSynthesis.css";

function EnvironmentSynthesis({ city }) {
  const [aqiData, setAqiData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const BASE = `https://api.waqi.info/feed/${city}/?token=`;
    const ENDPOINT = BASE + import.meta.env.VITE_WAQI_TOKEN;
    const fetchAqi = async () => {
      try {
        const result = await api.get(ENDPOINT);
        setAqiData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAqi();
  }, []);

  useEffect(() => {
    const BASE = `http://api.openweathermap.org/data/2.5/weather?q=${city},fr&units=metric&lang=fr&APPID=`;
    const ENDPOINTWEATHER = BASE + import.meta.env.VITE_OPENWEATHERMAP_TOKEN;
    const fetchWeather = async () => {
      try {
        const result = await api.get(ENDPOINTWEATHER);
        setWeatherData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    if (aqiData.length !== 0 && weatherData.length !== 0) {
      setIsLoading(false);
    }
  }, [aqiData, weatherData]);

  return (
    <div>
      {isLoading ? (
        "Loading ..."
      ) : (
        <div className="main-synthesis">
          <div className="city">{city}</div>
          <div className="weather">
            {weatherData.data.weather[0].description}
          </div>
          <div className="iqa">IQA : {aqiData.data.aqi}</div>
          <div className="temperature">T°C : {weatherData.data.main.temp}</div>
        </div>
      )}
    </div>
  );
}

export default EnvironmentSynthesis;

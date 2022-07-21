import React, { useContext, useEffect, useState } from "react";
import api from "@services/axios";
import UserContext from "@contexts/UserContext";
import "@styles/EnvironmentSynthesis.css";

function EnvironmentSynthesis({ favorite }) {
  const city = favorite.name;
  const [aqiData, setAqiData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { updateMapedFavorites, setUpdateMapedFavorites } =
    useContext(UserContext);

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
    const BASE = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&APPID=`;
    const ENDPOINTWEATHER = BASE + import.meta.env.VITE_OPENWEATHERMAP_TOKEN;
    const fetchWeather = async () => {
      try {
        const result = await api.get(ENDPOINTWEATHER);
        if (result.status === 200) {
          setWeatherData(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    if (aqiData.length !== 0 && weatherData.length !== 0) {
      setIsLoading(false);
      console.error(aqiData);
      console.error(weatherData);
    }
  }, [aqiData, weatherData]);

  const handleClick = (e) => {
    console.error(e.target.value);
    const ENDPOINT = `/favorite/${e.target.value}`;
    const deleteFavorite = async () => {
      try {
        const result = await api.delete(ENDPOINT);
        if (result.status === 204) {
          console.error("Favoris bien supprimé");
          setUpdateMapedFavorites(!updateMapedFavorites);
        }
      } catch (err) {
        console.error(err);
      }
    };
    deleteFavorite();
  };

  const imgSrc = `https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`;

  return (
    <div className="environment-container">
      {isLoading ? (
        "Loading ..."
      ) : (
        <>
          <div className="main-synthesis">
            <div className="city">{city}</div>
            <div className="weather">
              <div>
                <img src={imgSrc} alt={weatherData.data.weather[0].icon} />
              </div>
              <div>{weatherData.data.weather[0].description}</div>
            </div>
            <div className="iqa">IQA : {aqiData.data.aqi}</div>
            <div className="temperature">
              T°C : {weatherData.data.main.temp}
            </div>
          </div>
          <div className="delete-favorite">
            <button
              type="button"
              className="orange-button"
              value={favorite.idfavorite_places}
              onClick={handleClick}
            >
              -
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EnvironmentSynthesis;

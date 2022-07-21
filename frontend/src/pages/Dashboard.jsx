import EnvironmentSynthesis from "@components/EnvironmentSynthesis";
import React, { useEffect, useState } from "react";
import api from "@services/axios";
import AddFavorite from "@components/AddFavorite";
import "@styles/Dashboard.css";

export default function Dashboard() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const ENDPOINTFAVORITES = "/favorite";
    const fetchFavorites = async () => {
      try {
        const result = await api.get(ENDPOINTFAVORITES);
        setFavorites(result.data);
        console.error(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, []);

  const handleClick = () => {
    console.error("click");
  };

  return (
    <>
      <div className="main-dashboard">
        {favorites.map((favorite) => (
          <EnvironmentSynthesis
            city={favorite.name}
            key={favorite.idfavorite_places}
          />
        ))}
      </div>
      <div className="add-favorite">
        <label htmlFor="add" onClick={handleClick}>
          <button type="button" className="button-blue" id="add">
            +
          </button>
          <span id>Ajouter un lieu favori</span>
        </label>
      </div>
      <AddFavorite />
    </>
  );
}

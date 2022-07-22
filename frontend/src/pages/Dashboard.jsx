import EnvironmentSynthesis from "@components/EnvironmentSynthesis";
import React, { useContext, useEffect, useState } from "react";
import api from "@services/axios";
import AddFavorite from "@components/AddFavorite";
import "@styles/Dashboard.css";
import UserContext from "@contexts/UserContext";

export default function Dashboard() {
  const {
    isAddFavoriteDisplayed,
    setIsAddFavoriteDisplayed,
    updateMapedFavorites,
  } = useContext(UserContext);
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
  }, [updateMapedFavorites]);

  const handleClick = () => {
    setIsAddFavoriteDisplayed(!isAddFavoriteDisplayed);
  };

  return (
    <div className="main-dashboard">
      {favorites.map((favorite) => (
        <EnvironmentSynthesis
          favorite={favorite}
          key={favorite.idfavorite_places}
        />
      ))}
      <div className="add-favorite">
        <label htmlFor="add" onClick={handleClick}>
          <button type="button" className="button-blue" id="add">
            {isAddFavoriteDisplayed ? "-" : "+"}
          </button>
          <span>Ajouter un lieu favori</span>
        </label>
      </div>
      {isAddFavoriteDisplayed ? <AddFavorite /> : null}
    </div>
  );
}

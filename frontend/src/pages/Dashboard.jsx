import EnvironmentSynthesis from "@components/EnvironmentSynthesis";
import React, { useEffect, useState } from "react";
import "@styles/Dashboard.css";
import api from "@services/axios";

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

  useEffect(() => {}, [favorites]);

  return (
    <div className="main-dashboard">
      {favorites.map((favorite) => (
        <EnvironmentSynthesis
          city={favorite.name}
          key={favorite.idfavorite_places}
        />
      ))}
    </div>
  );
}

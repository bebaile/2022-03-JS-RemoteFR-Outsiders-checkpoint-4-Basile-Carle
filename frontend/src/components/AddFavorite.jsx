import React, { useContext, useState } from "react";
import api from "@services/axios";
import "@styles/AddFavorite.css";
import UserContext from "@contexts/UserContext";

export default function AddFavorite() {
  const [addFavorite, setAddFavorite] = useState();
  const {
    isAddFavoriteDisplayed,
    setIsAddFavoriteDisplayed,
    updateMapedFavorites,
    setUpdateMapedFavorites,
  } = useContext(UserContext);

  const handleSubmit = () => {
    const ENDPOINT = "/favorite";
    const postFavorite = async () => {
      try {
        const result = await api.post(ENDPOINT, { favorite: addFavorite });
        if (result.status === 201) {
          console.error("création réussie");
          setIsAddFavoriteDisplayed(false);
          setUpdateMapedFavorites(!updateMapedFavorites);
        }
        console.error(result);
      } catch (err) {
        console.error(err);
      }
    };
    postFavorite();
  };

  const handleChange = (e) => {
    setAddFavorite(e.target.value);
  };

  return (
    <div className="main-add-favorite">
      <form action="" method="" className="form">
        <label htmlFor="new-favorite">
          <input
            type="text"
            name="new-favorite"
            id="new-favorite"
            className="input"
            onChange={handleChange}
          />
        </label>
        <button type="button" className="button-blue" onClick={handleSubmit}>
          valider
        </button>
      </form>
    </div>
  );
}

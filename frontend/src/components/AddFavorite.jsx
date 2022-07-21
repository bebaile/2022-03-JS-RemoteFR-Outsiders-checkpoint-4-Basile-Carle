import React, { useState } from "react";
import api from "@services/axios";
import "@styles/AddFavorite.css";

export default function AddFavorite() {
  const [addFavorite, setAddFavorite] = useState();

  const handleSubmit = () => {
    console.error(addFavorite);
    const ENDPOINT = "/favorite";
    const postFavorite = async () => {
      try {
        const result = await api.post(ENDPOINT, { favorite: addFavorite });
        if (result.status === 201) {
          console.error("création réussie");
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

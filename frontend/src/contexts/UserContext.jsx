import React, { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

function UserContextProvider({ children }) {
  const [user, setUser] = useState("basile");
  const [isAddFavoriteDisplayed, setIsAddFavoriteDisplayed] = useState(false);
  const [updateMapedFavorites, setUpdateMapedFavorites] = useState(true);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAddFavoriteDisplayed,
        setIsAddFavoriteDisplayed,
        updateMapedFavorites,
        setUpdateMapedFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider };

import React, { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

function UserContextProvider({ children }) {
  const [user, setUser] = useState("basile");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContextProvider };

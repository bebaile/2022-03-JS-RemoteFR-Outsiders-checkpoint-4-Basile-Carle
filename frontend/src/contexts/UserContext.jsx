import React, { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("basile");
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>;
};

export { UserContextProvider };

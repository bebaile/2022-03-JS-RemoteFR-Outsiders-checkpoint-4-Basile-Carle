import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserContextProvider } from "@contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContextProvider>
  </BrowserRouter>
);

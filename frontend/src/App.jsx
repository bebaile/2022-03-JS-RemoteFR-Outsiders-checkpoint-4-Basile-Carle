import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "@pages/LandingPage";
import Dashboard from "@pages/Dashboard";
import Connexion from "@pages/Connexion";
import LocationPage from "@pages/LocationPage";
import "@styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </div>
  );
}

export default App;

import EnvironmentSynthesis from "@components/EnvironmentSynthesis";
import React from "react";
import "@styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="main-dashboard">
      <EnvironmentSynthesis city="Montpellier" />
    </div>
  );
}

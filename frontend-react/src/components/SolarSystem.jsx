import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuSistemaSolar } from "../data/planetaryData";

const SolarSystem = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="☀️ Sistema Solar"
        items={menuSistemaSolar}
        onBack={() => navigate("/app/planetary-information")}
        />
      </main>
    </div>
  )
}
export default SolarSystem;
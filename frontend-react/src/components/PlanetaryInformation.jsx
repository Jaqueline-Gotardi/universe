import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { informacoesPlanetarias } from "../data/planetaryData";

const PlanetaryInformation = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🪐 Informações Planetárias"
        items={informacoesPlanetarias}
        onBack={() => navigate("/app/menu")}
        />
      </main>
    </div>
  )
}
export default PlanetaryInformation; 
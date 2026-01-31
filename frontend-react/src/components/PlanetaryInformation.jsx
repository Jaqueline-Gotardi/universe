import React from "react";
import { useNavigate } from "react-router-dom";

import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { informacoesPlanetarias } from "../data/menuData";

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
/* import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuLuasESatelites } from "../data/planetaryData";

const MoonsAndSatellites = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌙 Luas e Satélites"
        items={menuLuasESatelites}
        onBack={() => navigate("/app/planetary-information")}
        />
      </main>
    </div>
  )
}
export default MoonsAndSatellites;  */
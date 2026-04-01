import React from "react";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { constelacaoFamosas } from "../../data/menuData";

const ConstellationsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌟 As Famosas"
        items={constelacaoFamosas}
        onBack={() => navigate("/app/constellations-menu")}
        />
      </main>
    </div>
  )
}
export default ConstellationsMenu; 
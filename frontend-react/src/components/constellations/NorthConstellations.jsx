import React from "react";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { hemisferioNorte } from "../../data/menuData";

const ConstellationsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🧭 Hemisfério Norte"
        items={hemisferioNorte}
        onBack={() => navigate("/app/constellations-menu")}
        />
      </main>
    </div>
  )
}
export default ConstellationsMenu; 
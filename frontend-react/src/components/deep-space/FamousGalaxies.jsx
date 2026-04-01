import React from "react";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { galaxiasFamosas } from "../../data/menuData";
const FamousGalaxies = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🔭 Galáxias Famosas"
        items={galaxiasFamosas}
        onBack={() => navigate("/app/galaxies-menu")}
        />
      </main>
    </div>
  )
}
export default FamousGalaxies;
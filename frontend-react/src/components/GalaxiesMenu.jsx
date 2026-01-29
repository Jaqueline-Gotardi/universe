import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuGalaxias } from "../data/menuData";

const Galaxies = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌌 Galáxias"
        items={menuGalaxias}
        onBack={() => navigate("/app/astros-menu")}
        />
      </main>
    </div>
  )
}
export default Galaxies;
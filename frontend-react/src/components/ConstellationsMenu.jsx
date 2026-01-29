import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuConstellations } from "../data/menuData";

const ConstellationsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="✨ Constelações"
        items={menuConstellations}
        onBack={() => navigate("/app/astros-menu")}
        />
      </main>
    </div>
  )
}
export default ConstellationsMenu;
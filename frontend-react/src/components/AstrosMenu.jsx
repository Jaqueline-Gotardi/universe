import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuAstros } from "../data/menuData";

const AstrosMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="✨ Exploração espacial"
        items={menuAstros}
        onBack={() => navigate("/app/menu")}
         />
      </main>
    </div>
  )
}
export default AstrosMenu;
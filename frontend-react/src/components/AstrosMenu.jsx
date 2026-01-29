import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { astrosMenu } from "../data/menuData";

const MenuPrincipalPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="✨ Exploração espacial"
        items={astrosMenu}
        onBack={() => navigate("/app/menu")}
         />
      </main>
    </div>
  )
}
export default MenuPrincipalPage;
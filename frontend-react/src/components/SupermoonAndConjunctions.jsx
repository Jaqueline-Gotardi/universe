import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { superluasEConjuncoes } from "../data/menuData";

const SuperluasEConjuncoes = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🪐 Superlua e Conjunções"
        items={superluasEConjuncoes}
        onBack={() => navigate("/app/events-menu")}
        />
      </main>
    </div>
  )
}
export default SuperluasEConjuncoes;
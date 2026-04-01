import React from "react";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { cometasEOutros } from "../../data/menuData";

const CometsAndOthers = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="☄️ Cometas e outros"
        items={cometasEOutros}
        onBack={() => navigate("/app/events-menu")}
        />
      </main>
    </div>
  )
}
export default CometsAndOthers;
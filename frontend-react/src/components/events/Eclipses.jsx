import React from "react";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { eclipses } from "../../data/menuData";

const Eclipses = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌕🌑 Eclipses"
        items={eclipses}
        onBack={() => navigate("/app/events-menu")}
        />
      </main>
    </div>
  )
}
export default Eclipses;
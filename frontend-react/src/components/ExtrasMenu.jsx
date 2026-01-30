import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuExtras } from "../data/menuData";
const ExtrasMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="📂 Extras"
        items={menuExtras}
        onBack={() => navigate("/app/menu")}
        />
      </main>
    </div>
  )
}
export default ExtrasMenu;


/* outra coisa interessante no react: quando vamos colocar propriedades do css, como "justify-content", deve-se escrever juntos e não com "-" no meio */ 
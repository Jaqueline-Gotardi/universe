/* import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuSistemaSolar } from "../../data/planetaryData";

const SolarSystem = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="☀️ Sistema Solar"
        items={menuSistemaSolar}
        onBack={() => navigate("/app/planetary-information")}
        />
      </main>
    </div>
  )
}
export default SolarSystem;   */
import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { hemisferioSul } from "../../data/menuData";

const ConstellationsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌍 Hemisfério Sul"
        items={hemisferioSul}
        onBack={() => navigate("/app/constellations-menu")}
        />
      </main>
    </div>
  )
}
export default ConstellationsMenu;  
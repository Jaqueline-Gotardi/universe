import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { menuPrincipal } from "../../data/menuData";

const InfoMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🛰️🌌 Centro de Exploração"
        items={menuPrincipal}
        onBack={() => navigate("/app/exploracao")}
        />
      </main>
    </div>
  )
}
export default InfoMenu;  
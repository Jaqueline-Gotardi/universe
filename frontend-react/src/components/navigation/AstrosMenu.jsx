import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { menuAstros } from "../../data/menuData";

const AstrosMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="✨ Informações Astronômicas"
        items={menuAstros}
        onBack={() => navigate("/app/menu")}
        />
      </main>
    </div>
  )
}
export default AstrosMenu;
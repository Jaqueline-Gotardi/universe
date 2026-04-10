import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { superluasEConjuncoes } from "../../data/menuData";

const SupermoonAndConjuncoes = () => {
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
export default SupermoonAndConjuncoes;
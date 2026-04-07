import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { tiposDeGalaxias } from "../../data/menuData";

const TypeGalaxies = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌌 Tipos de Galáxias"
        items={tiposDeGalaxias}
        onBack={() => navigate("/app/galaxies-menu")}
        />
      </main>
    </div>
  )
}
export default TypeGalaxies;
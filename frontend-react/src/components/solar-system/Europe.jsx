import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate";

const Europe = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "europa(jupiter)"
        onBack={() => navigate("/app/constellations-menu")} //isso não está sendo usado (é descnecessário)
        />
      </main>
    </div>
  )
}
export default Europe;  
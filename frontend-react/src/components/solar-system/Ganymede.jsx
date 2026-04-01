import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate";

const Ganymede = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "ganimedes(jupiter)"
        onBack={() => navigate("/app/constellations-menu")} 
        />
      </main>
    </div>
  )
}
export default Ganymede;  
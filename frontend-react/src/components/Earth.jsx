import { useNavigate } from "react-router-dom";
import CosmicBackground from "./CosmicBackground";
import { PlanetaTemplate } from "./PlanetaTemplate";

const Earth = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "terra"
        onBack={() => navigate("/app/constellations-menu")}
        />
      </main>
    </div>
  )
}
export default Earth;  
import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate";

function Pluto() {
    const navigate = useNavigate();

    return (
      <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "plutao"
        onBack={() => navigate("/app/planetary-menu")}
        />
      </main>
    </div>
    )
}
export default Pluto; 
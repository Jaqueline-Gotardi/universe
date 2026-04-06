import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Triton = () => {

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "tritao(netuno)"
        />
      </main>
    </div>
  )
}
export default Triton;  
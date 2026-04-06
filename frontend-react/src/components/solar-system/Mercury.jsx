import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Mercury = () => {

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "mercurio"
        />
      </main>
    </div>
  )
}
export default Mercury;   
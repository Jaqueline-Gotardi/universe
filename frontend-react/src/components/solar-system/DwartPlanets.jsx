import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const DwartPlanets = () => {

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "planetas-anoes"
        />
      </main>
    </div>
  )
}
export default DwartPlanets; 
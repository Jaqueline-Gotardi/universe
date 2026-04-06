import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Europe = () => {

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "europa(jupiter)"
        />
      </main>
    </div>
  )
}
export default Europe;  
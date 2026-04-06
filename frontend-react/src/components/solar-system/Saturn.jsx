import CosmicBackground from "../layout/CosmicBackground";
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Saturn = () => {

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <PlanetaTemplate
        planetaId= "saturno"
        />
      </main>
    </div>
  )
}
export default Saturn;  
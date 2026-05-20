import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const AndromedaConstellation = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-constelacao">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaConstellation;
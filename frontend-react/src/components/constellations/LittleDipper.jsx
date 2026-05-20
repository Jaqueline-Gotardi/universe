import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const LitteDipper = () => {
  return (
  
  <section className="telaDetalhe"id="detalhe-ursa-menor">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main> 
       <PlanetaTemplate
        planetaId= "ursa-menor"
        />
        </main>
        
  </section> 
  )
}
export default LitteDipper;
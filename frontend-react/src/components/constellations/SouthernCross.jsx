import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const SouthernCross = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cruzeiro-do-sul">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "cruzeiro-do-sul"
        />
        </main>
        
  </section>
  )
}
export default SouthernCross;
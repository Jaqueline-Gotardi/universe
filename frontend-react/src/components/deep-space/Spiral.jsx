import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Spiral = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-espiral">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "espiral"
        />
        </main>
        
  </section>
  )
}
export default Spiral;
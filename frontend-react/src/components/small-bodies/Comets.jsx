import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Comets = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cometas">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
        <PlanetaTemplate
        planetaId= "cometas"
        />
        </main>
        
  </section>
  )
}
export default Comets;
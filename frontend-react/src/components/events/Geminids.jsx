import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Geminids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-geminideas">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "geminideas"
        />
        </main>
        
  </section>
  )
}
export default Geminids;
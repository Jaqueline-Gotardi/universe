import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Phoenix = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-fenix">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "fenix"
        />
        </main>
        
  </section>
  )
}
export default Phoenix;
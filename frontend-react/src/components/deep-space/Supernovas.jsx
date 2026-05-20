import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Supernovas = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-supernovas">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "supernovas"
        />
        </main>
        
  </section>
  )
}
export default Supernovas;
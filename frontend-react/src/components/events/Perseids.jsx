import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Perseids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-perseidas">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "perseidas"
        />
        </main>
        
  </section>
  )
}
export default Perseids;
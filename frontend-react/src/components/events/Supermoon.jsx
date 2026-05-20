import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Supermoon = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-superlua">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "superlua"
        />
        </main>
        
  </section>
  )
}
export default Supermoon;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Irregular = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-irregular">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "irregular"
        />
        </main>
        
  </section>
  )
}
export default Irregular;
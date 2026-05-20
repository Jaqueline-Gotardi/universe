import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";


const AndromedaGalaxy = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-galaxia">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "galaxia-andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaGalaxy;
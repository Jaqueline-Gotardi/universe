import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Centaur = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-centauro">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "centauro"
        />
        </main>
        
  </section>
  )
}
export default Centaur;
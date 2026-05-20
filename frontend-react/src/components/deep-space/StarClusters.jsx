import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const StarClusters = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-agrupamentos-estelares">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "agrupamentos-estelares"
        />
        </main>
        
  </section>
  )
}
export default StarClusters;
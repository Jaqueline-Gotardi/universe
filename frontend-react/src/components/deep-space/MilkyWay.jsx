import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const MilkyWay = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-via-lactea">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "via-lactea"
        />
        </main>
        
  </section>
  )
}
export default MilkyWay;
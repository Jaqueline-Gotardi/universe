import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const GreaterCanis = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cao-maior">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "cao-maior"
        />
        </main>
        
  </section>
  )
}
export default GreaterCanis;
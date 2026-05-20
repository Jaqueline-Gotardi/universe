import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const SolarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-solar">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "eclipse-solar"
        />
        </main>
        
  </section>
  )
}
export default SolarEclipse;
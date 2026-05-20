import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const LunarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-lunar">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" /> 
      
      <main>
       <PlanetaTemplate
        planetaId= "eclipse-lunar"
        />
        </main>
        
  </section>
  )
}
export default LunarEclipse;
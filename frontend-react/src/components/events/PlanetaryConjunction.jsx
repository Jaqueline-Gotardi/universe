import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const PlanetaryConjunction = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-conjuncao-planetaria">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "conjuncao-planetaria"
        />
        </main>
        
  </section>
  )
}
export default PlanetaryConjunction;
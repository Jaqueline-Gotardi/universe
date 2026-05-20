import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const BigDipper = () => {
  return ( 
  
  <section className="telaDetalhe" id="detalhe-ursa-maior">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "ursa-maior"
        />
        </main>
        
  </section>
  )
}
export default BigDipper;
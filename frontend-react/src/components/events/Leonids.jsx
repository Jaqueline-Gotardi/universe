import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Leonids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-leonideas">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "leonideas"
        />
        </main>
        
  </section>
  )
}
export default Leonids;
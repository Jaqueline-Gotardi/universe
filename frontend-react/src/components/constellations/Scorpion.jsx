import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const Scorpion = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-escorpiao">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "escorpiao"
        />
        </main>
        
  </section>
  )
}
export default Scorpion; 
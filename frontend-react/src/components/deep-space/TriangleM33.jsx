import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
import StaticStarsBackground from "../layout/StaticStarsBackground";

const TriangleM33 = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-triangulo">
    <StaticStarsBackground customBackground="radial-gradient(circle at center, #0a0a25 0%, #020205 100%)" />
      
      <main>
       <PlanetaTemplate
        planetaId= "triangulo-m33"
        />
        </main>
        
  </section>
  )
}
export default TriangleM33;
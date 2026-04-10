import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Comets = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cometas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
        <PlanetaTemplate
        planetaId= "cometas"
        />
        </main>
        
  </section>
  )
}
export default Comets;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Phoenix = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-fenix">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "fenix"
        />
        </main>
        
  </section>
  )
}
export default Phoenix;
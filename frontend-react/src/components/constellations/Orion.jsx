import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Orion = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-orion">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "orion"
        />
        </main>
        
  </section>
  )
}
export default Orion;
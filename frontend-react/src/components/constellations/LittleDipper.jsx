import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const LitteDipper = () => {
  return (
  
  <section className="telaDetalhe"id="detalhe-ursa-menor">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main> 
       <PlanetaTemplate
        planetaId= "ursa-menor"
        />
        </main>
        
  </section> 
  )
}
export default LitteDipper;
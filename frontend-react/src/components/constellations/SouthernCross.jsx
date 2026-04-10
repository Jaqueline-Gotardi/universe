import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const SouthernCross = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cruzeiro-do-sul">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "cruzeiro-do-sul"
        />
        </main>
        
  </section>
  )
}
export default SouthernCross;
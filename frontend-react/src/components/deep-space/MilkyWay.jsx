import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const MilkyWay = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-via-lactea">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "via-lactea"
        />
        </main>
        
  </section>
  )
}
export default MilkyWay;
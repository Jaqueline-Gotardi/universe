import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const SolarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-solar">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "eclipse-solar"
        />
        </main>
        
  </section>
  )
}
export default SolarEclipse;
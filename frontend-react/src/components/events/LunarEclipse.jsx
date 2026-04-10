import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const LunarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-lunar">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "eclipse-lunar"
        />
        </main>
        
  </section>
  )
}
export default LunarEclipse;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const AndromedaConstellation = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-constelacao">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaConstellation;
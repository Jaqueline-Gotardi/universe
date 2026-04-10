import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";


const AndromedaGalaxy = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-galaxia">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "galaxia-andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaGalaxy;
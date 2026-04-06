import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const AndromedaGalaxy = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-galaxia">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "galaxia-andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaGalaxy;
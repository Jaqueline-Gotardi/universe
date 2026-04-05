import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";
//import styles from "./AndromedaConstellation.module.css"

//import "../../style/tela-menu.css"
//import "../../style/tela-informacoes-planetarias.css"


const AndromedaConstellation = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-andromeda-constelacao">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaConstellation;
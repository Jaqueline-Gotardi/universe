import { PlanetaTemplate } from "../solar-system/PlanetaTemplate";
//import styles from "./AndromedaConstellation.module.css"

//import "../../style/tela-menu.css"
//import "../../style/tela-informacoes-planetarias.css"


const AndromedaConstellation = () => {
  return (
  
  <section id="detalhe-andromeda-constelacao" className="telaDetalhe">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerConstellation">

       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaConstellation;
import { PlanetaTemplate } from "../../solar-system/PlanetaTemplate";
import styles from "./AndromedaConstellation.module.css"

//import "../../style/tela-menu.css"
//import "../../style/tela-informacoes-planetarias.css"


const AndromedaConstellation = () => {
  return (
  
  <section id="detalhe-andromeda-constelacao" className={styles.telaDetalhe} style={{position: "relative", minHeight: "100vh"}}>
    <div className={styles.spaceBackground}>
      <div className={styles.stars}></div>
      </div> 
      
      <main className={styles.containerAndromeda}>

       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default AndromedaConstellation;
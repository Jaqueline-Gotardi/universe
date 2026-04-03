import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 
//import styles from "../../../style/globals.css"


//import "../../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const BigDipper = () => {
  return ( 
  
  <section className="telaDetalhe" id="detalhe-ursa-maior">
    <div className="spaceBackground">
        <div className="stars"></div>
      </div> 
      
      <main className="containerConstellation">

       <PlanetaTemplate
        planetaId= "ursa-maior"
        />
        </main>
        
  </section>
  )
}
export default BigDipper;
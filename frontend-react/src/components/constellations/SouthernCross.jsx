import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const SouthernCross = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cruzeiro-do-sul">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "cruzeiro-do-sul"
        />
        </main>
        
  </section>
  )
}
export default SouthernCross;
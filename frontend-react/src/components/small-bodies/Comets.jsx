import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Comets = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cometas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "cometas"
        />
        </main>
        
  </section>
  )
}
export default Comets;
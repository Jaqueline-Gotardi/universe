import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Geminids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-geminideas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "geminideas"
        />
        </main>
        
  </section>
  )
}
export default Geminids;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Phoenix = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-fenix">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "fenix"
        />
        </main>
        
  </section>
  )
}
export default Phoenix;
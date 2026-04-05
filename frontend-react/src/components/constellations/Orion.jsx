import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Orion = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-orion">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "orion"
        />
        </main>
        
  </section>
  )
}
export default Orion;
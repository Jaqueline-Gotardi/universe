import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Supermoon = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-superlua">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "superlua"
        />
        </main>
        
  </section>
  )
}
export default Supermoon;
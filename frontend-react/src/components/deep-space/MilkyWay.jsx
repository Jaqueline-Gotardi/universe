import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const MilkyWay = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-via-lactea">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "via-lactea"
        />
        </main>
        
  </section>
  )
}
export default MilkyWay;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const LitteDipper = () => {
  return (
  
  <section className="telaDetalhe"id="detalhe-ursa-menor">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "ursa-menor"
        />
        </main>
        
  </section> 
  )
}
export default LitteDipper;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const SolarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-solar">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "eclipse-solar"
        />
        </main>
        
  </section>
  )
}
export default SolarEclipse;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const StarClusters = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-agrupamentos-estelares">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "agrupamentos-estelares"
        />
        </main>
        
  </section>
  )
}
export default StarClusters;
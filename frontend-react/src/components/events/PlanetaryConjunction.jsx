import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const PlanetaryConjunction = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-conjuncao-planetaria">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "conjuncao-planetaria"
        />
        </main>
        
  </section>
  )
}
export default PlanetaryConjunction;
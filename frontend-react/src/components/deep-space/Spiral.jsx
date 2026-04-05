import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Spiral = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-espiral">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "espiral"
        />
        </main>
        
  </section>
  )
}
export default Spiral;
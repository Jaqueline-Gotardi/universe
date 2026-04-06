import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Centaur = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-centauro">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "centauro"
        />
        </main>
        
  </section>
  )
}
export default Centaur;
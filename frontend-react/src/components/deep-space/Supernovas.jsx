import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Supernovas = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-supernovas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "supernovas"
        />
        </main>
        
  </section>
  )
}
export default Supernovas;
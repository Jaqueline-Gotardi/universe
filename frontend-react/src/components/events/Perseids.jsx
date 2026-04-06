import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Perseids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-perseidas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "perseidas"
        />
        </main>
        
  </section>
  )
}
export default Perseids;
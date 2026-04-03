import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Centaur = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-centauro">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerConstellation">

       <PlanetaTemplate
        planetaId= "centauro"
        />
        </main>
        
  </section>
  )
}
export default Centaur;
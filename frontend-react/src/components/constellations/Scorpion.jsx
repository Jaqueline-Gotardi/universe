import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Scorpion = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-escorpiao">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "escorpiao"
        />
        </main>
        
  </section>
  )
}
export default Scorpion;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const GreaterCanis = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-cao-maior">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "cao-maior"
        />
        </main>
        
  </section>
  )
}
export default GreaterCanis;
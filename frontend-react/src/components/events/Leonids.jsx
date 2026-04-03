import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Leonids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-leonideas">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "leonideas"
        />
        </main>
        
  </section>
  )
}
export default Leonids;
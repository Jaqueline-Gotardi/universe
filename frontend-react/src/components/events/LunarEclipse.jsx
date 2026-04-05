import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const LunarEclipse = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eclipse-lunar">
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "eclipse-lunar"
        />
        </main>
        
  </section>
  )
}
export default LunarEclipse;
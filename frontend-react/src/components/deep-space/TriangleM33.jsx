import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const TriangleM33 = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-triangulo">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main className="containerAstro">

       <PlanetaTemplate
        planetaId= "triangulo-m33"
        />
        </main>
        
  </section>
  )
}
export default TriangleM33;
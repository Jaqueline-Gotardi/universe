import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Spiral = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-espiral">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "espiral"
        />
        </main>
        
  </section>
  )
}
export default Spiral;
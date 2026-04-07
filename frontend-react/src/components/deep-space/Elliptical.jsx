import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Elliptical = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-eliptica">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "eliptica"
        />
        </main>
        
  </section>
  )
}
export default Elliptical;
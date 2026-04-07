import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Irregular = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-irregular">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "irregular"
        />
        </main>
        
  </section>
  )
}
export default Irregular;
import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Centaur = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-centauro">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "centauro"
        />
        </main>
        
  </section>
  )
}
export default Centaur;
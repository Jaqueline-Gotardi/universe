import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const Perseids = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-perseidas">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "perseidas"
        />
        </main>
        
  </section>
  )
}
export default Perseids;
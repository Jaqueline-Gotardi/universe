import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const PlanetaryConjunction = () => {
  return (
  
  <section className="telaDetalhe" id="detalhe-conjuncao-planetaria">
    <div className="spaceBackground">
      <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "conjuncao-planetaria"
        />
        </main>
        
  </section>
  )
}
export default PlanetaryConjunction;
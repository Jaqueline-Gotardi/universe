import { PlanetaTemplate } from "../solar-system/PlanetaTemplate/PlanetaTemplate";

const BigDipper = () => {
  return ( 
  
  <section className="telaDetalhe" id="detalhe-ursa-maior">
    <div className="spaceBackground">
        <div className="stars"></div>
      </div> 
      
      <main>
       <PlanetaTemplate
        planetaId= "ursa-maior"
        />
        </main>
        
  </section>
  )
}
export default BigDipper;
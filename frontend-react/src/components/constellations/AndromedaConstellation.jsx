import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

import "../../style/tela-menu.css"
import "../../style/tela-informacoes-planetarias.css"


const Andromeda = () => {
  return (
  
  <section className="tela-eventos-detalhe" id="detalhe-andromeda-constelacao" style={{position: "relative", minHeight: "100vh"}}>
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="container-andromeda">
       <style>{`
        .container-andromeda img {
        width: 100%; 
        max-width: 800px;       
        transform: scale(1.1);      
        transition: all 0.3s ease;
        object-fit: contain;
        margin: 0px; 
        border-radius: 25px;
        }
        @media (max-width: 768px) {
        .container-big-dipper img {
        width: 100%;
        transform: scale(1);
        }
        `}
        </style>

       <PlanetaTemplate
        planetaId= "andromeda"
        />
        </main>
        
  </section>
  )
}
export default Andromeda;
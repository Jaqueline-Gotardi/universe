import { PlanetaTemplate } from "../solar-system/PlanetaTemplate"; 

//import "../style/eventos-astronomicos.css"
//import "../style/tela-informacoes-planetarias.css"


const Scorpion = () => {
  return (
  
  <section className="tela-eventos-detalhe" id="detalhe-escorpiao" style={{position: "relative", minHeight: "100vh"}}>
    <div className="space-background">
      <div className="stars"></div>
      </div> 
      
      <main className="container-scorpion">
       <style>{`
        .container-scorpion img {
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
        planetaId= "escorpiao"
        />
        </main>
        
  </section>
  )
}
export default Scorpion;
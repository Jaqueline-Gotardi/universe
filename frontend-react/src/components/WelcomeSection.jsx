import "../style/tela-principal.css"
import "../style/globals.css"
import "../style/informacoes-extras.css"

import { useNavigate } from "react-router-dom";

function WelcomeSection() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const navigate = useNavigate();

    return (
    <section className="tela-principal" id="tela-principal-inicial" >
    <div className="text">
      <h2>O que vamos explorar hoje?</h2>
      <p>Selecione seu destino</p>
    </div>
    <div className="informacoes-extras">
      <button type="button" className="btn-cosmic" id="btn-iniciar-exploracao" 
      onClick={() => navigate('/app/exploracao')}>Iniciar Exploração</button>
      
      <button type="button" className="btn-cosmic" 
      id="btn-tutorial" 
      onClick={() => navigate('/app/tutorial')}>Briefing da Nave</button>

    </div> 
  </section> 
    );  
} 

export default WelcomeSection;
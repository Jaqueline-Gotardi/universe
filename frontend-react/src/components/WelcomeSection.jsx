import "../style/tela-principal.css"
import "../style/globals.css"
import "../style/informacoes-extras.css"


function WelcomeSection({onClicarIniciar, onClicarTutorial}) { //nome de componentes/funções em React deve-se começar com letras maiúsculas
    return (
    <section className="tela-principal" id="tela-principal-inicial" >
    <div className="text">
      <h2>O que vamos explorar hoje?</h2>
      <p>Selecione seu destino</p>
    </div>
    <div className="informacoes-extras">
      <button type="button" className="btn-cosmic" id="btn-iniciar-exploracao" 
      onClick={() => onClicarIniciar('tela-inicial')}>Iniciar Exploração</button>
      
      <button type="button" className="btn-cosmic" 
      id="btn-tutorial" 
      onClick={() => onClicarTutorial('tutorial')}>Briefing da Nave</button>

    </div> 
  </section> 
    );  
} 

export default WelcomeSection;
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





/*  ---> ESTRELAS PISCANDO NO FUNDO:
<div className="min-h-screen bg-cosmic overflow-hidden relative">
  {/* Stars background *
  <div className="stars-container absolute inset-0 overflow-hidden">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="star absolute rounded-full bg-white"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          opacity: Math.random() * 0.8 + 0.2,
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>

  {/* Animação twinkle *
  <style>{`
    @keyframes twinkle {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
  `}</style>
</div>





---> TÍTUTLO FLUTUANDO COM GRADIENTE ESPACIAL
<div className="animate-float">
  <h1 className="text-5xl md:text-7xl font-bold text-cosmic-text mb-4 tracking-tight">
    <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
      Explore o Universo
    </span>
  </h1>
</div>

<style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>

*/
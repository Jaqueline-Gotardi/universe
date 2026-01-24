import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "../style/tela-principal.css";
import "../style/globals.css";
import "../style/informacoes-extras.css";
import "../style/tela-menu.css";

function WelcomeSection() {
  //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const navigate = useNavigate();

  const cosmicBackground = useMemo(() => {
    const stars = Array.from({ length: 150 }, (_, i) => ({
      //para as estrelas
      id: `star-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5, //atraso
    }));
    const comets = Array.from({ length: 6 }, (_, i) => ({
      //para os cometas (posição e animação)
      id: `comet-${i}`,
      top: `${Math.random() * 40}%`,
      delay: Math.random() * 20,
      duration: Math.random() * 4 + 3,
    }));
    return { stars, comets };
  }, []);

  return (
    <section
      className="tela-principal"
      id="tela-principal-inicial"
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <div className="cosmic-engine">
        {cosmicBackground.stars.map(
          (
            star, //animação para as estrelas
          ) => (
            <div
              key={star.id}
              className="star-field"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `star-animation ${star.duration}s infinite ease-in-out ${star.delay}s`,
              }}
            />
          ),
        )}
        {cosmicBackground.comets.map(
          (
            comet, //animação para os cometas
          ) => (
            <div
              key={comet.id}
              className="comet-trail"
              style={{
                top: comet.top,
                animation: `commet-animation ${comet.duration}s infinite linear ${comet.delay}s`,
              }}
            />
          ),
        )}
      </div>
      <div className="text container-titulo-flutuante" style={{ position: "relative", zIndex: 1 }}>
        <h2 className="titulo-flutuante">O que vamos explorar hoje?</h2>
        <p>Selecione seu destino</p>
      </div>
      <div
        className="informacoes-extras"
        style={{ position: "relative", zIndex: 1 }}
      >
        <button
          type="button"
          className="btn-cosmic"
          id="btn-iniciar-exploracao"
          onClick={() => navigate("/app/exploracao")}
        >
          Iniciar Exploração
        </button>

        <button
          type="button"
          className="btn-cosmic"
          id="btn-tutorial"
          onClick={() => navigate("/app/tutorial")}
        >
          Briefing da Nave
        </button>
      </div>
    </section>
  );
}

export default WelcomeSection;

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/tela-principal.css";
import "../style/globals.css";
import "../style/informacoes-extras.css";
import "../style/tela-menu.css";

function WelcomeSection() {
  //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

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
            
      <div
        className="text container-titulo-flutuante"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2 className="titulo-flutuante" style={{marginBottom: "50px"}}>O que vamos explorar hoje?</h2>
        <p>Selecione seu destino</p>
      </div>
      <div style={styles.buttonContainer}>
        {/* Botão Iniciar Exploração */}
        <button
          style={{
            ...styles.cosmicButton,
            ...(hoveredButton === "exploracao" ? styles.buttonHovered : {}),
            background:
              hoveredButton === "exploracao"
                ? "linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.5) 100%)"
                : "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.25) 100%)",
            borderColor:
              hoveredButton === "exploracao"
                ? "#06b6d4"
                : "rgba(6, 182, 212, 0.5)",
            boxShadow:
              hoveredButton === "exploracao"
                ? "0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)"
                : "0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)",
            transform:
              hoveredButton === "exploracao"
                ? "translateY(-5px) scale(1.02)"
                : "translateY(0) scale(1)",
          }}
          onClick={() => navigate("/app/exploracao")}
          onMouseEnter={() => setHoveredButton("exploracao")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <div style={styles.buttonIconWrapper}>
            <span style={styles.buttonMainIcon}>🛸</span>
            <div style={styles.buttonIconGlow} />
          </div>
          <div style={styles.buttonTextWrapper}>
            <span style={styles.buttonTitle}>INICIAR EXPLORAÇÃO</span>
            <span style={styles.buttonSubtitle}>
              Navegue pelo universo NASA
            </span>
          </div>
          <span style={styles.buttonArrow}>→</span>
        </button>

        {/* Separador decorativo */}
        <div style={styles.separator}>
          <div style={styles.separatorLine} />
          <span style={styles.separatorIcon}>⭐</span>
          <div style={styles.separatorLine} />
        </div>

        {/* Botão Briefing */}
        <button
          style={{
            ...styles.cosmicButton,
            ...(hoveredButton === "tutorial" ? styles.buttonHovered : {}),
            background:
              hoveredButton === "tutorial"
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)"
                : "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.2) 100%)",
            borderColor:
              hoveredButton === "tutorial"
                ? "#a855f7"
                : "rgba(168, 85, 247, 0.5)",
            boxShadow:
              hoveredButton === "tutorial"
                ? "0 0 40px rgba(168, 85, 247, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)"
                : "0 0 20px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)",
            transform:
              hoveredButton === "tutorial"
                ? "translateY(-5px) scale(1.02)"
                : "translateY(0) scale(1)",
          }}
          onClick={() => navigate("/app/tutorial")}
          onMouseEnter={() => setHoveredButton("tutorial")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <div
            style={{
              ...styles.buttonIconWrapper,
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            }}
          >
            <span style={styles.buttonMainIcon}>📋</span>
            <div
              style={{
                ...styles.buttonIconGlow,
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
              }}
            />
          </div>
          <div style={styles.buttonTextWrapper}>
            <span style={styles.buttonTitle}>BRIEFING DA NAVE</span>
            <span style={styles.buttonSubtitle}>Conheça nossa missão</span>
          </div>
          <span style={{ ...styles.buttonArrow, color: "#a855f7" }}>→</span>
        </button>
      </div>

    </section>
  );
}

export default WelcomeSection;
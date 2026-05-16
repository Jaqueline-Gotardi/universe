import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CosmicScrollBar from "../CosmicScrollBar/CosmicScrollBar";
import styles from "./WelcomeSection.module.css";

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
    <>
    <CosmicScrollBar />
    <section className={styles.telaPrincipal} id="tela-principal-inicial">
      <div className={styles.cosmicEngine}>
        {cosmicBackground.stars.map((star) => (
          <div
            key={star.id}
            className={styles.starField}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
        {cosmicBackground.comets.map((comet) => (
          <div
            key={comet.id}
            className={styles.cometTrail}
            style={{
              top: comet.top,
              animationDelay: `${comet.delay}s`,
              animationDuration: `${comet.duration}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.planetWrapper}>
        <div className={styles.orbitContainer}>
          <div className={styles.orbitRing1}>
            <div className={styles.orbitDot1} />
          </div>
          <div className={styles.orbitRing2}>
            <div className={styles.orbitDot2} />
          </div>
          <div className={styles.planet}>🪐</div>
        </div>
      </div>

      <div className={`${styles.text} ${styles.containerTituloFlutuante}`}>
        <h2 className={styles.tituloFlutuante}>O que vamos explorar hoje?</h2>
        <p>Selecione seu destino</p>
      </div>
      <div className={styles.buttonContainer}>
        {/* Botão Iniciar Exploração */}
        <button
          className={styles.cosmicButton}
          style={{
            background:
              hoveredButton === "exploracao"
                ? "linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.5) 100%)"
                : "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.25) 100%)",
            borderColor: hoveredButton === "exploracao" ? "#06b6d4" : "rgba(6, 182, 212, 0.5)",
            boxShadow:
              hoveredButton === "exploracao"
                ? "0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)"
                : "0 0 20px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)",
            transform: hoveredButton === "exploracao" ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
          }}
          onClick={() => navigate("/app/exploracao")}
          onMouseEnter={() => setHoveredButton("exploracao")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <div className={styles.buttonIconWrapper}>
            <span className={styles.buttonMainIcon}>🛸</span>
            <div className={styles.buttonIconGlow} />
          </div>
          <div className={styles.buttonTextWrapper}>
            <span className={styles.buttonTitle}>INICIAR EXPLORAÇÃO</span>
            <span className={styles.buttonSubtitle}>
              Navegue pelo universo NASA
            </span>
          </div>
          <span className={styles.buttonArrow}>→</span>
        </button>

        {/* Separador decorativo */}
        <div className={styles.separator}>
          <div className={styles.separatorLine} />
          <span className={styles.separatorIcon}>⭐</span>
          <div className={styles.separatorLine} />
        </div>

        {/* Botão Briefing */}
        <button
          className={styles.cosmicButton}
          style={{ 
            background:
              hoveredButton === "tutorial"
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)"
                : "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.2) 100%)",
            borderColor: hoveredButton === "tutorial" ? "#a855f7" : "rgba(168, 85, 247, 0.5)",
            boxShadow:
              hoveredButton === "tutorial"
                ? "0 0 40px rgba(168, 85, 247, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)"
                : "0 0 20px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)",
            transform: hoveredButton === "tutorial" ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
          }}
          onClick={() => navigate("/app/tutorial")}
          onMouseEnter={() => setHoveredButton("tutorial")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <div
            className={styles.buttonIconWrapper}
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            }}
          >
            <span className={styles.buttonMainIcon}>📋</span>
            <div
              className={styles.buttonIconGlow}
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
              }}
            />
          </div>
          <div className={styles.buttonTextWrapper}>
            <span className={styles.buttonTitle}>BRIEFING DA NAVE</span>
            <span className={styles.buttonSubtitle}>Conheça nossa missão</span>
          </div>
          <span className={styles.buttonArrow} style={{ color: "#a855f7" }}>→</span>
        </button>
      </div>
    </section>
    </>
  );
}

export default WelcomeSection;
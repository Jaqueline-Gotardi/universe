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

  const styles = {
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
      maxWidth: "420px",
      padding: "30px",
      background:
        "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "24px",
      backdropFilter: "blur(20px)",
      boxShadow:
        "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    },

    cosmicButton: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "18px 24px",
      fontFamily: "'Orbitron', sans-serif",
      color: "#ffffff",
      border: "2px solid",
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      textAlign: "left",
      position: "relative",
      overflow: "hidden",
    },

    buttonHovered: {},

    buttonIconWrapper: {
      position: "relative",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
      borderRadius: "12px",
      flexShrink: 0,
    },

    buttonMainIcon: {
      fontSize: "28px",
      position: "relative",
      zIndex: 1,
    },

    buttonIconGlow: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background:
        "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
      borderRadius: "12px",
      animation: "portalPulse 2s ease-in-out infinite",
    },

    buttonTextWrapper: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },

    buttonTitle: {
      fontSize: "15px",
      fontWeight: 600,
      letterSpacing: "2px",
    },

    buttonSubtitle: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "11px",
      color: "rgba(255, 255, 255, 0.5)",
      letterSpacing: "1px",
    },

    buttonArrow: {
      fontSize: "24px",
      color: "#06b6d4",
      fontWeight: 300,
      transition: "transform 0.3s ease",
    },

    separator: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "5px 0",
    },

    separatorLine: {
      flex: 1,
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    },

    separatorIcon: {
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.4)",
      animation: "sparkle 3s ease-in-out infinite",
    },

    bottomDecoration: {
      marginTop: "40px",
      position: "relative",
    },

    orbitingDots: {
      display: "flex",
      gap: "8px",
      animation: "subtitleFloat 3s ease-in-out infinite",
    },

    orbitDot1: {
      color: "#06b6d4",
      fontSize: "6px",
      animation: "sparkle 2s ease-in-out infinite",
    },

    orbitDot2: {
      color: "#a855f7",
      fontSize: "8px",
      animation: "sparkle 2s ease-in-out infinite 0.3s",
    },

    orbitDot3: {
      color: "#ec4899",
      fontSize: "6px",
      animation: "sparkle 2s ease-in-out infinite 0.6s",
    },
  };

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

      {/* bolinha espacial */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-30px",
          /* padding: "40px 20px", */
          animation: "fade-in 0.8s ease-out",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "180px",
            height: "180px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "50%",
              animation: "orbit-spin 20s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "50%",
                width: "10px",
                height: "10px",
                background: "#8b5cf6",
                borderRadius: "50%",
                boxShadow: "0 0 15px #8b5cf6",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: "25px",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              borderRadius: "50%",
              animation: "orbit-spin 15s linear infinite reverse",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "50%",
                width: "8px",
                height: "8px",
                background: "#06b6d4",
                borderRadius: "50%",
                boxShadow: "0 0 12px #06b6d4",
              }}
            />
          </div>
          {/* Centro */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "60px",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            🪐
          </div>
        </div>
      </div>

      <div
        className="text container-titulo-flutuante"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2 className="titulo-flutuante" style={{ marginBottom: "50px" }}>
          O que vamos explorar hoje?
        </h2>
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

      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
            @keyframes portalPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
          @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
          @keyframes subtitleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
            `}
      </style>
    </section>
  );
}

export default WelcomeSection;
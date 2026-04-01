import { useNavigate } from "react-router-dom";
import { conteudosPlanetarios } from "../../data/planetaryData";
import { conteudosAstronomicos } from "../../data/menuData";

export const PlanetaTemplate = ({planetaId}) => {
  const navigate = useNavigate();
  const conteudo =  conteudosPlanetarios[planetaId] || conteudosAstronomicos[planetaId];
  

  if (!conteudo) return <div>Carregando. . .</div>;

  const cornerStyle = {
    position: "absolute",
    width: "30px",   
    height: "30px",
    animation: "borderGlow 2s ease-in-out infinite",
  }

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      overflow: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
 
    content: {
      position: "relative",
      zIndex: 10,
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px 60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    card: {
      position: "relative",
      background: "rgba(20, 10, 50, 0.7)",
      border: "2px solid rgba(168, 85, 247, 0.3)",
      borderRadius: "24px",
      padding: "40px 35px",
      backdropFilter: "blur(15px)",
      boxShadow: "0 15px 50px rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(168, 85, 247, 0.05)",
      width: "100%",
    },

    cornerTopLeft: {
      ...cornerStyle,
     top: "-2px",
     left: "-2px",
     borderTop: "3px solid #06b6d4",
     borderLeft: "3px solid #06b6d4",
     borderRadius: "24px 0 0 0",
     animationDelay: "0.2s",
    },

    cornerTopRight: {
      ...cornerStyle,
      top: "-2px",
      right: "-2px",
      borderTop: "3px solid #06b6d4", 
      borderRight: "3px solid #06b6d4",
      borderRadius: "0 24px 0 0",
      animationDelay: "0.5s",
    },

    cornerBottomLeft: {
      ...cornerStyle,
      bottom: "-2px",
      left: "-2px",
      borderBottom: "3px solid #06b6d4",
      borderLeft: "3px solid #06b6d4",
      borderRadius: "0 0 0 24px",
      animationDelay: "1s",
    },

    cornerBottomRight: {
      ...cornerStyle,
      bottom: "-2px",
      right: "-2px",
      borderBottom: "3px solid #06b6d4",
      borderRight: "3px solid #06b6d4",
      borderRadius: "0 0 24px 0",
      animationDelay: "1.5s",
    },

    imageContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },

    imagePlaceholder: {
      width: "200px",
      height: "192px",
      background: "linear-gradient(135deg, rgba(30, 20, 70, 0.8) 0%, rgba(10, 5, 30, 0.9) 100%)",
      border: "2px solid rgba(6, 182, 212, 0.5)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(6, 182, 212, 0.1)",
      overflow: "hidden",
      animation: "imageFloat 3s ease-in-out infinite",
    },

    imageElement: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10px",
    },

    imageGlow: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "150%",
      height: "150%",
      background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
      filter: "blur(30px)",
      pointerEvents: "none",
    },

    title: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(22px, 4vw, 32px)",
      fontWeight: 700,
      color: "#ffffff",
      textAlign: "center",
      marginBottom: "25px",
      letterSpacing: "2px",
      animation: "titleGlow 4s ease-in-out infinite",
    },

    descriptionContainer: {
      marginBottom: "30px",
    },

    paragraph: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "14px",
      lineHeight: 1.9,
      color: "rgba(255, 255, 255, 0.85)",
      textAlign: "justify",
      marginBottom: "20px",
    },

    backButtonCard: {
      display: "block",
      margin: "20px auto 0",
      padding: "15px 60px",
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "3px",
      color: "#ffffff",
      background: "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.5) 100%)",
      border: "2px solid rgba(168, 85, 247, 0.6)",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 5px 30px rgba(168, 85, 247, 0.4)",
      textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Card principal */}
        <div style={styles.card}>
          {/* Decoração de canto */}
          <div style={styles.cornerTopLeft} />
          <div style={styles.cornerTopRight} />
          <div style={styles.cornerBottomLeft} />
          <div style={styles.cornerBottomRight} />

          {/* Imagem/Ícone */}
          <div style={styles.imageContainer}>
            <div style={styles.imagePlaceholder}>
              <img
                src={conteudo.imagem}
                alt={conteudo.titulo}
                style={styles.imageElement}
                loading="lazy"
              />
            </div>
            <div style={styles.imageGlow} /> 
          </div>

          {/* Título */}
          <h1 style={styles.title}>{conteudo.titulo}</h1>

          {/* Descrição */}
          <div style={styles.descriptionContainer}>
            {conteudo.descricao.split("\n\n").map((paragrafo, index) => (
              <p key={index} style={styles.paragraph}>
                {paragrafo}
              </p>
            ))} 
          </div>
          {/* Botão voltar */}
        <button
          style={styles.backButtonCard}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 35px rgba(168, 85, 247, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 5px 30px rgba(168, 85, 247, 0.4)";
          }}
        >
          VOLTAR
        </button>
        </div>

        
      </div>
      <style>{`
    @keyframes imageFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.02); }
    }

    @keyframes borderGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { box-shadow: 0 0 45px rgba(6, 182, 212, 0.7), 0 0 30px rgba(6, 182, 212, 0.5); }
    }

    @keyframes titleGlow {
    0%, 100% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3); }
    50% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.5); }
    }
    `}</style>
    </div>
  );
};
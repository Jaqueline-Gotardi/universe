import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { menuPrincipal } from "../../data/menuData";

const InfoMenu = () => {
  const navigate = useNavigate();

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "auto",
      width: "100%",
      position: "relative",
      zIndex: 10,
    },

    tituloPrincipal: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
      fontWeight: 900,
      color: "#ffffff",
      paddingBottom: "0.625rem",
      textShadow: "0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.5)",
      letterSpacing: "3px",
      textAlign: "center",
      padding: "0 1rem",
      animation: "flutuarTitulo 3s ease-in-out infinite"
    },

    paragrafo: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
      color: "rgba(255, 255, 255, 0.8)",
      textAlign: "center",
      maxWidth: "90%",
      width: "100%",
      lineHeight: "1.6",
      paddingBottom: "3.125rem",
      padding: "0 1rem 3.125rem",
      boxSizing: "border-box",
      animation: " flutuarDescricao 5s ease-in-out infinite",
    }
  }

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />     

      <main style={{ overflow: "visible", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px"}}>

        <div style={style.container}>
          <h1 style={{ ...style.tituloPrincipal, marginBottom: "2rem" }}>
            🛰️🌌 Centro de Exploração
          </h1>
          <p style={style.paragrafo}>
            Bem-vindo ao coração do Universe! Aqui, você desvenda os mistérios cósmicos e embarca em jornadas inesquecíveis pelo espaço infinito.
          </p>

          <CosmicCard
            items={menuPrincipal}
            onBack={() => navigate("/app/exploracao")}
            style={{ minHeight: "auto" }}
          />
          </div>
       
      </main>

      <style>{`
        @keyframes flutuarTitulo { 
        0%, 100% { transform: translateY(0px) rotate(-3deg); } 
        50% { transform: translateY(-10px) rotate(3deg); } 
        }
        @keyframes flutuarDescricao { 
        0%, 100% { transform: translateY(0); opacity: 0.8; }
        50% { transform: translateY(-10px); opacity: 1; } 
        }
      `}</style>
    </div>
  )
}
export default InfoMenu;   
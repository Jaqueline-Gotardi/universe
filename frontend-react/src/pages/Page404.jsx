// página 404 espacial

import { useNavigate } from "react-router-dom";
import CosmicBackground from "../components/CosmicBackground";

function Page404() {
    const navigate = useNavigate()
    
    const styles = { 
      containerNotFound: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        //essas duas propriedades centralizam o conteúdo considerando a tela inteira
        position: "fixed",
        inset: 0,
          
        fontFamily: "System-ui, sans-serif",
        //animation: showScreen ? "offlineFadeIn 0.5s ease forwards" : "offlineFadeOut 0.5s ease forwards", //se a tela não estiver sendo exibida VS /se tiver...
        zIndex: "9999", //garante que a tela 404 fique por cima de todas as outras quando a internet cair
      },
      titulo: {
        color: "#ffffff",
        fontSize: "2.2rem",
        fontWeight: "800",
        margin: "0 0 0.5rem",
      },
      paragrafo: {
        color: "rgba(255,255,255,0.5)",
        maxWidth: "420px",
        fontSize: "1.1rem",
        lineHeight: "1",
        paddingBottom: "20px",
      },
      botaoVoltar: {
        padding: "12px",
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.4) 100%)",
        border: "2px solid rgba(168, 85, 247, 0.5)",
        borderRadius: "50px",
        color: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "2px",
        transition: "all 0.3s ease",
        boxShadow: "0 5px 25px rgba(168, 85, 247, 0.3)",
        textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
        cursor: "pointer",
      }
    }
    return (
    <div style={styles.containerNotFound}>
      <CosmicBackground />
        
        <h1 style={styles.titulo}>Coordenadas inválidas 🛰️</h1>
        <p style={styles.paragrafo}>Rota não encontrada, você viajou para além do mapa conhecido</p>
        
        <button onClick={() => navigate("/app")} 
        style={styles.botaoVoltar}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
          e.currentTarget.style.boxShadow = "0 0 18px rgba(168, 85, 247, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 5px 25px rgba(168, 85, 247, 0.3)";
        }}>Volte para a Nave mãe</button>
        
          {/* <style>{`
          @keyframes offlineFadeIn {
          from { opacity: 1; }
          to { opacity: 0; }
          }
          @keyframes offlineFadeOut {
          from { opacity: 0; }
          to { opacity: 1; }
          }
          @keyframes signalPulse {
          0%, 100% {opacity: 0.3; transform: scale(1)}
          50% {opacity: 1; tranform: scale(1.1)}
          }
          @keyframes bhPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
          }
          @keyframes accretionFlow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
          }
          @keyframes wifiFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-4px, -6px) rotate(-8deg); }
          }
          `}</style> */}
          </div>
          )
        }
export default Page404;
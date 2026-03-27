//essa tela é exibida quando o usuário digita uma rota desconhecida

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CosmicBackground from "../components/CosmicBackground";

function Page404() {
    const navigate = useNavigate()
    const [ isOnline, setIsOnline ] = useState(navigator.onLine); //está online

    //lógica de mostrar a tela somente quando a internet cair (precisamos trocar a tela Page404.jsx pela OfflineScreen.jsx, já que o problema não é mais de rota desconhecida, mas sim de conexão)
    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
    
      //ouvir quando a internet cair ou voltar
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    
      //limpar os eventos de escuta
      return() => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  },[])
  
  //se não estiver online, retorna nulo (essa tela tem que sumir para a tela OfflineScreen aparecer)
  if (!isOnline) return null;
    
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
        animation: "opacidadeDaTela 0.5s ease forwards", //mudar a opacidade da tela (quando a rota for desconhecida)
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

        <style>{`@keyframes opacidadeDaTela {
          from { opacity: 0; }
          to { opacity: 1; }
          }`}
        </style>
      </div>
      )
    }
export default Page404;
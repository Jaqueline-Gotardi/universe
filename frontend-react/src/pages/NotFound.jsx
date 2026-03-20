// página 404 espacial

import { useEffect, useState } from "react"
import CosmicBackground from "./CosmicBackground";

export const NotFound = () => {
    const [ isOffline, setIsOffline ] = useState(!navigator.onLine); //não está online
    const [ showScreen, setShowScreen ] = useState(false);

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
          animation: showScreen ? "offlineFadeIn 0.5s ease forwards" : "offlineFadeOut 0.5s ease forwards", //se a tela não estiver sendo exibida VS /se tiver...
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
        },
        containerInfoAdicional: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        },
        bolinhaDeConexao: {
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#ff4a6e",
          animation: "signalPulse 1.5s ease-in-out infinite",
        },
        paragrafoExtra: {
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.85rem",
          letterSpacing: "1px",
        },
    }

    return (
        <div style={styles.containerNotFound}>
            <CosmicBackground />
        
    <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem" }}>
        {/* Astronaut SVG vem aqui */}

            </div>

            <h1 style={styles.titulo}>Conexão Perdida no Espaço</h1>
            <p style={styles.paragrafo}>Parece que seu sinal se perdeu entre as estrelas. Verifique sua conexão e tente novamente.</p>

            <div style={styles.containerInfoAdicional}>
              <div style={styles.bolinhaDeConexao} />
              <span style={styles.paragrafoExtra}>Aguardando reconexão. . .</span>
            </div>
            <style>{`
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
              `}</style>
        </div>
    )
}
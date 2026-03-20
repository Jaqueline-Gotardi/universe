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
          justityContent: "center",
          alignItems: "center",
          fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
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
              <div />
                <span style={styles.paragrafoExtra}>Aguardando reconexão. . .</span>
            </div>
        </div>
    )
}
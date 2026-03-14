import { useNavigate } from "react-router-dom"

export const AgentBadge = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      position: "fixed",
      bottom: "24px",
      left: "24px",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, rgba(88,28,135,0.8), rgba(15,23,42,0.9)",
      border: "1px solid rgba(168,85,247,0.5)",
      borderRadius: "50px",
      padding: "8px 16px 8px 8px",
      zIndex: 1,
      gap: "10px",
      boxShadow: "0 0 22px rgba(168,85,247,0.3), inset 0 0 15px rgba(168,85,247,0.1)",
      backdropFilter: "blur(10px)", //embaça o fundo
      cursor: "pointer",
    },

    brilho: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "110%",
      height: "100%",
      borderRadius: "50px",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent",
      animation: "brilho 3s infinite",
    },

    avatarWrapper: {
      position: "relative",
      width: "42px",
      height: "42px",
      borderRadius: "50%", 
      border: "2px solid rgba(168,85,247,0.7)",
      boxShadow: "0 0 12px rgba(168,15,247,0.5)",
    },

    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },

    anelOnline: {
      position: "absolute",
      background: "#22c55e",
      width: "12px",
      height: "12px",
      bottom: "-2px",
      right: "-2px",
      borderRadius: "50%",
      border: "2px solid rgba(15,23,42,0.9)",
      animation: "pulsacao 2s infinite",
    },

    info: {
      display: "flex",
      flexDirection: "column",
      position: "relative",   
    },

    nameAgent: {
      color: "#e2e8f0",
      fontSize: "13px",
      fontWeight: "700",
      fontFamily: "'Segoe UI', sans-serif",
      letterSpacing: "0.5px",
    },

    paragraph: {
      color: "#a78bfa",
      fontSize: "11px",
      letterSpacing: "1.5px",
    },

  }

  return (
  <div style={styles.container} onClick={() => navigate("/app/profile")}>
    <div style={styles.brilho} />
    
    <div style={{position: "relative"}}>
      <div style={styles.avatarWrapper}>
        <img src="/imagens/avatar-nova.webp" alt="avatar" style={styles.avatar} />
        </div>
        <div style={styles.anelOnline} />
        </div>

        <div style={styles.info}>
          <span style={styles.nameAgent}>Agente Espacial</span>
          <span style={styles.paragraph}>★ EXPLORER</span>
        </div>
        
        <style>{`
        @keyframes brilho {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
        }
        @keyframes pulsacao {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.3); } 
        `}</style>

      </div>
  )
}
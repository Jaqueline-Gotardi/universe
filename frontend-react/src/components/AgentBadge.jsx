import { useNavigate } from "react-router-dom"

export const AgentBadge = () => {
  const navigate = useNavigate();

  const styles = {

    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, rgba(88,28,135,0.8), rgba(15,23,42,0.9)",
      border: "1px solid rgba(168,85,247,0.5)",
      borderRadius: "50px",
      padding: "8px 16px 8px 8px",
      cursor: "pointer",
    },

    brilho: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "200%",
      height: "100%",
    },

    avatarWrapper: {
      position: "relative",
      width: "42px",
      height: "42px",
      borderRadius: "50%", 
      border: "2px solid rgba(168,5,247,0.7)",
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
    }

  }

  return (
  <div style={styles.container} onClick={() => navigate("/profile")}>
    <div style={styles.brilho} />
    
    <div style={{position: "relative"}}>
      <div style={styles.avatarWrapper}>
        <img src="/imagens/sol.webp" alt="avatar" style={styles.avatar}/>
        </div>
        <div style={styles.anelOnline} />
        </div>

        <div style={styles.info}>
          <span style={styles.nameAgent}>Nome do Agente Espacial</span>
        </div>

        </div>
  )
}
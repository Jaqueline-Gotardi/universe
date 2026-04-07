import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CosmicCard = ({ items, title, onBack }) => {
    const navigate = useNavigate(); 
    const [ hoveredIndex ] = useState(null);
        
  return (

    <div style={styles.container}>
      { title && (
        <h2 style={styles.title}>{title}</h2>
        )}
        
    <div style={styles.card}>

        {items.map((item, index) => (
          <button 
          type="button" 
          id="btn-informacoes-astronomicas"
          key={item.id}
          style={{
            ...styles.menuButton,
            ...hoveredIndex === index ? styles.menuButtonHover : {},
      }}
      onClick={() => navigate(item.route)}
      onMouseEnter={(e) => {
        e.target.style.borderColor = "#a747e2";
        e.target.style.boxShadow = "0 0 15px #A020F0";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = "#ffffff";
        e.target.style.boxShadow = "0 4px 20px rgba(168, 85, 247, 0.2)";
        e.target.style.transform = "scale(1)";
      }}
      >
       <span>{item.icon}</span>
       <span style={styles.buttonLabel}>{item.label}</span> 
        </button>
        ))}

    </div> 

    <button 
    type="button"
    className="botao-voltar"
    id="btn-voltar-info-menu"
    style={styles.backButton} 
    onClick={onBack}
    onMouseEnter={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 0 30px rgba(168, 85, 247, 0.5)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 5px 25px rgba(168, 85, 247, 0.3)";
      }}>      
      Voltar
      </button>

     <style>{`
        @keyframes cardFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
        }
        `}
        </style>
        </div>
  );
};

const styles = {
    container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
    zIndex: 10,
  },
  title: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: "30px",
    textAlign: "center",
    textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
    letterSpacing: "2px",
    zIndex: "1",
  },
  card: {
    position: "relative",
    background: "rgba(100, 80, 150, 0.15)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "24px",
    padding: "30px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    minWidth: "340px",
    maxWidth: "450px",
    animation: "cardFloat 6s ease-in-out infinite",
  },
  menuButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "18px 30px",
    width: "100%",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#ffffff", 
    background: "linear-gradient(135deg, rgba(88, 28, 135, 0.6) 0%, rgba(126, 34, 206, 0.4) 100%)",
    border: "2px solid #ffffff",
    borderRadius: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)",
    textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
  },
  menuButtonHover: {
    transform: "translateY(-3px) scale(1.02)",
    boxShadow: "0 8px 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.2)",
    borderColor: "rgba(168, 85, 247, 0.8)",
    background: "linear-gradient(135deg, rgba(126, 34, 206, 0.7) 0%, rgba(168, 85, 247, 0.5) 100%)",
  },
  buttonLabel: {
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    marginTop: "30px",
    padding: "15px 50px",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "3px",
    color: "#ffffff",
    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.4) 100%)",
    border: "2px solid rgba(168, 85, 247, 0.5)",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 25px rgba(168, 85, 247, 0.3)",
    textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
    zIndex: "1",
  }
}
export default CosmicCard;
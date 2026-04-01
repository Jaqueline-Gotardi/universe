import { useNavigate } from "react-router-dom";
/* import CosmicBackground from "./CosmicBackground"; */
import CosmicBackground from "../layout/CosmicBackground";
import { useMemo, useState } from "react";



function DeleteAccount() {
  const [confirmText, setConfirmText] = useState("");
  
  const canDelete = useMemo(
    () => confirmText.trim().toUpperCase() === "APAGAR", [confirmText]
  );

  const navigate = useNavigate();

  const styles = {
    telaApagarConta: {
      // position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 20px",
      boxSizing: "border-box",
    },

    containerConteudo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      maxWidth: "500px",
      padding: "50px 40px",
      borderRadius: "20px",
      background: "linear-gradient(135deg, rgba(20, 10, 10, 0.95), rgba(30, 15, 15, 0.9))",
      boxShadow: "0 0 30px rgba(239, 68, 68, 0.2)",
      animation: "dangerCardGlow 6s ease-in-out infinite",
      marginBottom: "30px"
    },

    iconeAlerta: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      width: "100px",
      padding: "20px",
      border: "2px solid rgb(124, 38, 38)",
      borderRadius: "50%",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      boxShadow: "0 0 18px rgba(239, 68, 68, 0.22)",
      animation: "warningPulse 5s ease-in-out infinite"
    },

    painelConfirmacao: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      color: "rgba(252, 165, 165, 0.7)",
    },

    titleApagarConta: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(24px, 4vw, 32px)",
      fontWeight: 700,
      color: "rgb(252, 165, 165)",
      textShadow: "rgba(239, 68, 68, 0.5) 0px 0px 30px",
      marginBottom: "10px"
    },

    mensagemPersuasiva: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "14px",
      marginBottom: "30px",
    },

    mensagensAlerta: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "30px",
      textAlign: "left",
    },

    mensagensAlertaItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "'Space Mono', monospace",
      fontSize: "13px",
      padding: "12px 15px",
      border: "1px solid rgb(124, 38, 38)",
      borderRadius: "10px",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
    },

    confirmarcaoApagarConta: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      fontFamily: "'Space Mono', monospace",
      fontSize: "14px",
      width: "100%",
    },

    spanConfirmacao: {
      color: "rgb(239, 68, 68)",
      fontWeight: "bold"
    },

    confirmacaoInput: {
      width: "100%",
      backgroundColor: "rgba(239, 68, 68, 0.1)",
      color: "rgb(255, 255, 255)",
      border: "2px solid rgba(239, 68, 68, 0.3)",
      borderRadius: "12px",
      padding: "15px 20px",
      fontFamily: "'Space Mono', monospace",
      fontSize: "16px",
      textAlign: "center",
    },
    
    botaoVoltarHome: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "15px 25px",
      background: "rgba(34, 197, 94, 0.2)",
      border: "1px solid rgba(34, 197, 94, 0.4)",
      borderRadius: "12px",
      color: "rgb(134, 239, 172)",
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "14px",
      cursor: "pointer",
    },

    botaoApagarConta: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "15px 25px",
      background: "linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(185, 28, 28, 0.8))",
      border: "1px solid rgba(239, 68, 68, 0.6)",
      borderRadius: "12px",
      color: "rgb(255, 255, 255)",
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "14px",
      opacity: 0.5,
      cursor: "not-allowed",
    },

    textoSeguranca: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 20px",
      background: "rgba(139, 92, 246, 0.1)",
      borderRadius: "20px",
      color: "rgba(167, 139, 250, 0.7)",
      fontFamily: "'Space Mono', monospace",
      fontSize: "12px",
    }
  }

  return (
    <section id="detalhe-apagar-conta" style={styles.telaApagarConta}>
      <CosmicBackground />
      
      <button style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 20px",
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.4) 100%)",
        border: "2px solid rgba(168, 85, 247, 0.5)",
        borderRadius: "50px",
        color: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "3px",
        transition: "all 0.3s ease",
        boxShadow: "0 5px 25px rgba(168, 85, 247, 0.3)",
        textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
        cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
          e.currentTarget.style.boxShadow = "0 0 18px rgba(168, 85, 247, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 5px 25px rgba(168, 85, 247, 0.3)";
        }}
        onClick={() => navigate("/app/extras-menu")}
        aria-label="Voltar para a página anterior"
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          Voltar
      </button>

      <div style={styles.containerConteudo} className="container-apagar-conta">
        <div style={styles.iconeAlerta}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
        </div>

        <div style={styles.painelConfirmacao}>
          <h2 style={styles.titleApagarConta}>Apagar Conta</h2>

          <p style={styles.mensagemPersuasiva}>Esta ação é irreversível e removerá permanentemente todos os seus dados</p>

          <div style={styles.mensagensAlerta}>
            <div style={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Todos os seus dados serão excluídos permanentemente</p>
            </div>

            <div style={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Seu histórico de exploração será perdido</p>
            </div>

            <div style={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Não será possível recuperar sua conta</p>
            </div>
          </div>

          <div style={styles.confirmarcaoApagarConta}>
            <label htmlFor="confirmacao-apagar-conta">Digite <span style={styles.spanConfirmacao}>"APAGAR"</span> para confirmar:</label>
            <input 
              type="text"
              id="confirmacao-apagar-conta"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Digite aqui..." 
              style={styles.confirmacaoInput} />
          </div>
        </div>

        <button type="button" aria-label="Voltar para a página inicial" onClick={() => navigate("/app/extras-menu")} style={styles.botaoVoltarHome}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          Manter conta segura
        </button>

        <button 
          type="button"
          aria-label="Apagar conta"
          disabled={!canDelete}
          style={{
            ...styles.botaoApagarConta,
            opacity: canDelete ? 1 : 0.5,
            cursor: canDelete ? "pointer" : "not-allowed",
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
          Apagar conta
        </button>
      </div>

      <span style={styles.textoSeguranca}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
        Sua segurança é nossa prioridade no cosmos
      </span>

      <style>{`
        @media (max-width: 870px) {
          .container-apagar-conta {
            margin-top: 60px;
          }
        }

        @keyframes dangerCardGlow {
          0%, 100% {
            box-shadow: 0 0 28px rgba(239, 68, 68, 0.16);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.28);
          }
        }

        @keyframes warningPulse {
          0%, 100% {
            box-shadow: 0 0 16px rgba(239, 68, 68, 0.16);
          }
          50% {
            box-shadow: 0 0 24px rgba(239, 68, 68, 0.24);
          }
        }
        `}</style>
    </section>
  )
}

export default DeleteAccount; 

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./UniverseAgents.module.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const DEFAULT_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle />
  <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 17.2C10.1 17.2 8.4 16.3 7.3 14.9C7.3 13.3 10.4 12.4 12 12.4C13.6 12.4 16.7 13.3 16.7 14.9C15.6 16.3 13.9 17.2 12 17.2Z" fill="#94a3b8"/>
</svg>
`)}`;

function UniverseAgents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/agents`, {
          credentials: "include"
        });
        if (!response.ok) throw new Error("Falha ao sintonizar base de dados.");
        const data = await response.json();
        setAgents(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAgents();
  }, []);

  return (
    <section className={styles.pageContainer}>
      <CosmicBackground />
      
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Comando Estelar</h1>
          <p className={styles.subtitle}>Diretório oficial de agentes em missão no Universe.</p>
        </header>

        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.scanner}></div>
            <p>Escaneando assinaturas biométricas...</p>
          </div>
        ) : error ? (
          <div className={styles.errorCard}>{error}</div>
        ) : (
          <div className={styles.list}>
            {agents.map((agent, index) => (
              <div key={agent.id || index} className={styles.agentRow}>
                <div className={styles.avatarSection}>
                  <img 
                    src={agent.avatar || DEFAULT_AVATAR} 
                    alt={agent.username} 
                    className={styles.agentAvatar} 
                  />
                  <span className={styles.rankLabel}>AGENTE</span>
                </div>

                <div className={styles.detailsSection}>
                  <div className={styles.mainInfo}>
                    <h3 className={styles.agentName}>{agent.username || "Explorador Anônimo"}</h3>
                    <div className={styles.badge}>Ativo</div>
                  </div>
                  
                  <p className={styles.agentBio}>
                    {agent.bio || "Este agente ainda não transmitiu seus dados biográficos para o comando central."}
                  </p>

                  {agent.interests && (
                    <div className={styles.interestsContainer}>
                      {agent.interests.split(',').map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className={styles.footer}>
          <button className={styles.backButton} onClick={() => navigate("/app/extras-menu")}>
            Retornar ao Centro de Comando
          </button>
        </footer>
      </div>
    </section>
  );
}

export default UniverseAgents;
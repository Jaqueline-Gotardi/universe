import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./UniverseAgents.module.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const default_avatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#94a3b8" stroke-width="1"/>
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
        if (!response.ok) throw new Error("Falha ao carregar a tripulação.");
        const data = await response.json();
        setAgents(data);
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
          <h1 className={styles.title}>Tripulação Universe</h1>
          <p className={styles.subtitle}>Conheça os agentes que exploram as fronteiras do cosmos conosco.</p>
        </header>

        {loading ? (
          <div className={styles.loader}>Sintonizando sinais dos agentes...</div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <div className={styles.grid}>
            {agents.map((agent, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.avatarWrapper}>
                  <img 
                    src={agent.avatar || default_avatar} 
                    alt={agent.username} 
                    className={styles.avatar} 
                  />
                  <div className={styles.statusBadge}></div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.agentName}>{agent.username}</h3>
                  <p className={styles.bio}>{agent.bio || "Agente em missão silenciosa..."}</p>
                  {agent.interests && (
                    <div className={styles.interests}>
                      <span className={styles.interestLabel}>Interesses:</span>
                      <p className={styles.interestTags}>{agent.interests}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <button 
          className={styles.backButton} 
          onClick={() => navigate("/app/extras-menu")}
        >
          Voltar ao Menu
        </button>
      </div>
    </section>
  );
}

export default UniverseAgents;
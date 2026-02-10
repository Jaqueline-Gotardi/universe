import React from "react";
import { useNavigate } from "react-router-dom";
import CosmicBackground from "./CosmicBackground";

import { Github, Linkedin, Mail, } from "lucide-react";
/* import "../style/criadores.css" */


const Creators = () => {
  const navigate = useNavigate();

  const criadores = [
    {
      id: 1,
      nome: "Jaqueline Gotardi",
      cargo: "Fundadora e CEO do Universe",
      bio: "Criadora do Universe, responsável por toda a transição tecnológica para React e pela nova identidade visual do ecossistema. No Universe, minha missão é unir estética e performance em uma experiência espacial única.",
      avatar: "/imagens/lua.pn",
      github: "https://github.com/Jaqueline-Gotardi",
      linkedin: "https://www.linkedin.com/in/jaqueline-gotardi-833454365/",
      email: "jaquelineribeirogotardi@gmail.com"
    },
    {
      id: 2,
      nome: "Giliany Silva",
      cargo: "Co-fundadora do Protótipo original (2022)",
      bio: "Co-autora da ideia original em 2022. Fundamental na concepção do primeiro protótipo que deu origem a esta jornada pelo cosmos. Acredito que as melhores ideias nascem da colaboração e da vontade de criar algo novo do zero.",
      avatar: "/imagens/lua.pn",
      github: "",
      linkedin: "", 
      email: "gilianysilva@gmail.com"
    },
    {
      id: 3,
      nome: "Grazielle Martins",
      cargo: "Desenvolvedora Assistente",
      bio: "Desenvolvedora colaboradora, focada na otimização final e suporte técnico para o lançamento da nova versão. Minha motivação é garantir que cada linha de código contribua para um sistema robusto e sem falhas.",
      avatar: "/imagens/lua.pn",
      github: "https://github.com/grazielle-marttdev",
      linkedin: "https://www.linkedin.com/in/grazielle-martins-557b61334/",
      email: "gzassuncaomartins@gmail.com"
    }
  ]

  const cardStyle = {
    position: "absolute",
    width: "30px",
    height: "30px",
  }

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      overflow: "hidden",
    },

    content: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px 20px",
      zIndex: 1,
      minHeight: "100vh",
    },

    header: {
      textAlign: "center",
      marginTop: "15px",
      marginBottom: "50px",
    },

    iconRocket: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "80px",
      height: "80px",
      margin: "0 auto 20px",
      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
      borderRadius: "50px",
      border: "2px solid rgba(139, 92, 246, 0.5)",
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
    },

    rocket: {
      fontSize: "40px",
    },

    title: {
      background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #06b6d4 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "clamp(28px, 5vw, 42px)",
      marginBottom: "15px",
      fontFamily: "Orbitron, sans-serif",
      textShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
    },

    subtitle: {
      fontSize: "16px",
      color: "rgba(224, 224, 255, 0.7)",
      fontFamily: "Space mono, monospace",
      maxWidth: "400px",
      margin: "0 auto",
    },

    criadoresGrid:{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "25px",
      maxWidth: "1200px",
      width: "100%",
      padding: "0 20px",
    }, 

    criadorCard: {
      position: "relative",
      background: "linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(25, 25, 55, 0.8))",
      padding: "40px 30px",
      backdropFilter: "blur(20px)", //deixa o fundo "fosco", mantendo o conteúdo da frente legível
      textAlign: "center",
      borderRadius: "24px",
      border: "1px solid rgba(139, 92, 246, 0.3)",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },

    cardGlow: {
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
      pointerEvents: "none", //evita o impedimento do clique nos elementos do card
    },

    cardDecoration1: {
      ...cardStyle,
      borderTop: "2px solid rgba(139, 92, 246, 0.6)",
      borderLeft: "2px solid rgba(139, 92, 246, 0.6)",
      top: "10px",
      left: "10px",
      borderRadius: "5px 0 0 0",
    },

    cardDecoration2: {
      ...cardStyle,
      borderBottom: "2px solid rgba(6, 182, 212, 0.6)",
      borderRight: "2px solid rgba(6, 182, 212, 0.6)",
      bottom: "10px",
      right: "10px",
      /* top: "-10px",
      left: "-10px", */
      borderRadius: "0 0 5px 0",
    },

    containerAvatar: {
      position: "relative",
      width: "140px",
      height: "140px",
      margin: "0 auto 25px",
    },

    avatarDecoration: {
      position: "absolute",
      width: "155px",
      height: "155px",
      top: "-8px",
      left: "-8px",
      borderRadius: "50%",
      border: "2px dashed rgba(139, 92, 246, 0.5)", //dashed -> tracejado
      animation: "rotate 18s linear infinite",
    },

    avatar: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      border: "3px solid rgba(139, 92, 246, 0.6)",
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
      objectFit: "cover",
    },

    criadorNome: {
      fontSize: "22px",
      fontFamily: "Orbitron, sans-serif",
      color: "#ffffff",
      fontWeight: "600",
      textShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
      marginBottom: "8px",
    },

    criadorCargo: {
      fontSize: "14px",
      fontFamily: "Space mono, monospace",
      color: "#a78bfa",
      marginBottom: "15px",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },

    criadorBio: {
      fontSize: "14px",
      color: "rgba(224, 224, 255, 0.7)",
      marginBottom: "25px",
      lineHeight: "1.6",
      fontFamily: "Space mono, monospace",
    },

    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },

    socialLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "45px",
      height: "45px",
      background: "rgba(139, 92, 246, 0.2)",
      border: "1px solid rgba(139, 92, 246, 0.4)",
      color: "#e0e0ff",
      borderRadius: "12px",
      textDecoration: "none",
      transition: "all 0.3s ease",
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
  },

  footer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "60px",
  },

  footerLine: {
    background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
    width: "60px",
    height: "1px",
  },

  footerText: {
    fontSize: "14px",
    color: "rgba(224, 224, 255, 0.5)",
    fontFamily: "Space mono, monospace"
  },
  }

  return (
    <div style={styles.container}> 
      <CosmicBackground />
      
      <main style={styles.content}>
        <div style={styles.header}>
          <div style={styles.iconRocket}>
            <span style={styles.rocket}>🚀</span>
          </div>
          <h1 style={styles.title}>Agentes Especiais do Universe</h1>
          <p style={styles.subtitle}>
            Conheça os criadores por trás desta jornada pelo universo e descubra o papel fundamental que cada um desempenhou
          </p>
        </div>

        {/* cards dos criadores */}
        <div style={styles.criadoresGrid}>
          {criadores.map((criador) => (
            <div key={criador.id} style={styles.criadorCard}>
              <div style={styles.cardGlow} />
              <div style={styles.cardDecoration1} />
              <div style={styles.cardDecoration2} />

              
              <div style={styles.containerAvatar}>
                <div style={styles.avatarDecoration} />
                <img 
                  src={criador.avatar} 
                  alt={criador.nome} 
                  style={styles.avatar} 
                />
                </div>

                {/* dados dos criadores */}
                <h2 style={styles.criadorNome}>{criador.nome}</h2>
                <p style={styles.criadorCargo}>{criador.cargo}</p>
                <p style={styles.criadorBio}>{criador.bio}</p>

                {/* links das redes sociais */}
                <div style={styles.socialLinks}>
                  {criador.github && criador.github !== "..." && (
                    <a href={criador.github} style={styles.socialLink} className="efeito-hover-icons" target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                  )}
                  {criador.linkedin && criador.linkedin !== "..." && (
                    <a href={criador.linkedin} style={styles.socialLink} className="efeito-hover-icons" target="_blank" rel="noreferrer">
                    <Linkedin size={20} />
                    </a>
                  )}
                  {criador.email && criador.email !== "..." && (
                    <a href={criador.email} style={styles.socialLink} className="efeito-hover-icons">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
          ))}

          <style>
            {`
            .efeito-hover-icons:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.7)
            }

            @keyframes rotate {
            from { transform: translate(1%, 1%) rotate(0deg);}
            to { transform: translate(1%, 1%) rotate(360deg);}}
            `}
          </style>
        </div>
        
  <button 
    type="button"
    className="botao-voltar"
    id="btn-voltar-info-menu"
    style={styles.backButton} 
    onClick={() => navigate("/app/extras-menu")}
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

      {/* rodapé */}
        <footer style={styles.footer}>
          <div style={styles.footerLine} />
          <span style={styles.footerText}>✨ Explorando o infinito juntos ✨</span>
          <div style={styles.footerLine} />
        </footer>

      </main>
    </div>
  )
}
export default Creators; 
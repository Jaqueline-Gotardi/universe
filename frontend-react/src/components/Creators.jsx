import React from "react";
import { useNavigate } from "react-router-dom";
import CosmicBackground from "./CosmicBackground";

import { Github, Linkedin, Mail } from "lucide-react";
/* import "../style/criadores.css" */


const Creators = () => {
  const navigate = useNavigate();

  const criadores = [

  ]

  const styles = {
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

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
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
                <div style={styles.avatarDecoration}>
                <img 
                  src={criador.avatar} 
                  alt={criador.nome} 
                  style={styles.avatar} 
                />
                </div>

                {/* dados dos criadores */}
                <h2 style={styles.criadorNome}>{criador.nome}</h2>
                <p style={styles.criadorFuncao}>{criador.funcao}</p>
                <p style={styles.criadorBio}>{criador.bio}</p>

                {/* links das redes sociais */}
                <div style={styles.socialLinks}>
                  <a href={criador.github} style={styles.socialLink}>
                    <GitH size={20} />
                  </a>
                  <a href={criador.linkedin} style={styles.socialLink}>
                    <Linkedin size={20} />
                    </a>
                    <a href={criador.email} style={styles.socialLink}>
                      <Mail size={20} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

  


    {/* <section className="tela-criadores" id="detalhe-criadores">
  <div className="background-overlay"></div>
  <h1 className="titulo-criadores">Agentes Especiais do Projeto</h1>
  <div className="container-criadores">
    
    <div className="card">
      <div className="imagem-perfil">
        <img src="" alt="Foto de Perfil de Giliany" />
      </div>
      <div className="informacoes-perfil">
        <h2 className="nome-criador">Giliany Do Carmo</h2>
        <p className="role-projeto">Líder do Protótipo Original (2022)</p>
        <ul className="contribuicoes">
          <li>
            <span className="marcador-neon"></span>
            Líder da criação do protótipo original do projeto em 2022 (tema infantil), como uma atividade escolar.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Desenvolveu a estrutura de design e UI/UX do protótipo infantil.
          </li>
        </ul>
      </div>
    </div>

    <div className="card">
      <div className="imagem-perfil">
        <img src="/imagens/jaque.jpg" alt="Foto de Perfil de Jaqueline" />
      </div>
      <div className="informacoes-perfil">
        <h2 className="nome-criador">Jaqueline Gotardi</h2>
        <p className="role-projeto">Líder do Protótipo e Designer (2025)</p>
        <ul className="contribuicoes">
          <li>
            <span className="marcador-neon"></span>
            Liderou a criação do protótipo original do projeto em 2022 (tema infantil), como uma atividade escolar.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Liderou a evolução do design, transformando a estética original para uma interface moderna e profissional.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Atualmente responsável pela codificação e implementação de novas funcionalidades.
          </li>
        </ul>
      </div>
    </div> 
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
</section> */}


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
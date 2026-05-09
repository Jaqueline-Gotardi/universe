import { useNavigate } from "react-router-dom";
import CosmicBackground from "../../layout/CosmicBackground";
import styles from "./Creators.module.css";
import { Github, Linkedin, Mail, } from "lucide-react";


const Creators = () => {
  const navigate = useNavigate();

  const criadores = [
    {
      id: 1,
      nome: "Jaqueline Gotardi",
      cargo: "Fundadora e CEO do Universe",
      bio: "Criadora do Universe, responsável por toda a transição tecnológica para React e pela nova identidade visual do ecossistema. No Universe, minha missão é unir estética e performance em uma experiência espacial única.",
      avatar: "/images/jaque.webp",
      github: "https://github.com/Jaqueline-Gotardi",
      linkedin: "https://www.linkedin.com/in/jaqueline-gotardi-833454365/",
      email: "jaquelineribeirogotardi@gmail.com"
    },
    {
      id: 2,
      nome: "Giliany Silva",
      cargo: "Co-fundadora do Protótipo original (2022)",
      bio: "Co-autora da ideia original em 2022. Fundamental na concepção do primeiro protótipo que deu origem a esta jornada pelo cosmos. Acredito que as melhores ideias nascem da colaboração e da vontade de criar algo novo do zero.",
      avatar: "/images/giliany.webp",
      github: "",
      linkedin: "", 
      email: ""
    },
    {
      id: 3,
      nome: "Grazielle Martins",
      cargo: "Desenvolvedora Assistente",
      bio: "Desenvolvedora colaboradora, focada na otimização final e suporte técnico para o lançamento da nova versão. Minha motivação é garantir que cada linha de código contribua para um sistema robusto e sem falhas.",
      avatar: "/images/grazielle.webp",
      github: "https://github.com/grazielle-marttdev",
      linkedin: "https://www.linkedin.com/in/grazielle-martins-557b61334/",
      email: "gzassuncaomartins@gmail.com"
    }
  ]

  return (
    <div className={styles.container}> 
      <CosmicBackground />
      
      <main className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconRocket}>
            <span className={styles.rocket}>🚀</span>
          </div>
          <h1 className={styles.title}>Agentes Especiais do Universe</h1>
          <p className={styles.subtitle}>
            Conheça os criadores por trás desta jornada pelo universo e descubra o papel fundamental que cada um desempenhou
          </p>
        </div>

        {/* cards dos criadores */}
        <div className={styles.criadoresGrid}>
          {criadores.map((criador) => (
            <div key={criador.id} className={styles.criadorCard}>
              <div className={styles.cardGlow} />
              <div className={styles.cardDecoration1} />
              <div className={styles.cardDecoration2} />

              
              <div className={styles.containerAvatar}>
                <div className={styles.avatarDecoration} />
                <img 
                  src={criador.avatar} 
                  alt={criador.nome}
                  className={styles.avatar}
                />
                </div>

                {/* dados dos criadores */}
                <h2 className={styles.criadorNome}>{criador.nome}</h2>
                <p className={styles.criadorCargo}>{criador.cargo}</p>
                <p className={styles.criadorBio}>{criador.bio}</p>

                {/* links das redes sociais */}
                <div className={styles.socialLinks}>
                  {criador.github && criador.github !== "..." && (
                    <a href={criador.github} className={styles.socialLink} target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                  )}
                  {criador.linkedin && criador.linkedin !== "..." && (
                    <a href={criador.linkedin} className={styles.socialLink} target="_blank" rel="noreferrer">
                    <Linkedin size={20} />
                    </a>
                  )}
                  {criador.email && criador.email !== "..." && (
                    <a href={`mailto:${criador.email}`} className={styles.socialLink}>
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
          ))}
        </div>
        
  <button 
    type="button"
    className={styles.backButton}
    id="btn-voltar-info-menu"
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
        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <span className={styles.footerText}>✨ Explorando o infinito juntos ✨</span>
          <div className={styles.footerLine} />
        </footer>

      </main>
    </div>
  )
}
export default Creators; 
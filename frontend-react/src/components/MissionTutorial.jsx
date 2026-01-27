import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../style/tutorial.css"

function MissionTutorial() {

  const navigate = useNavigate();

  // Gera estrelas aleatórias
  const cosmicBackground = useMemo(() => {
    const stars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
    return { stars};
  }, []);

  const styles = {
    sectionHeader: {
    textAlign: "center",
    marginBottom: "30px",
  },

  mainTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 700,
    color: "#ffffff",
    margin: 0,
    letterSpacing: "3px",
    lineHeight: 1.3,
    textShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
  },

  titleHighlight: {
    background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "titleGlow 4s ease-in-out infinite",
  },

  container: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    fontFamily: "'Space Mono', monospace",
    overflowX: "hidden",
  },
  storyCard: {
    background: "rgba(20, 10, 50, 0.6)",
    border: "1px solid rgba(168, 85, 247, 0.2)",
    borderRadius: "20px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(168, 85, 247, 0.05)",
  },
  emotionalText: {
    display: "block",
    marginTop: "15px",
    color: "#75c7caff",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },

  missionCard: {
    background: "rgba(20, 10, 50, 0.6)",
    border: "1px solid rgba(168, 85, 247, 0.2)",
    borderRadius: "20px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(6, 182, 212, 0.05)",
  },

  missionTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(22px, 3vw, 30px)",
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 30px 0",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
  },

  missionIcon: {
    fontSize: "30px",
  },

  missionStrong: {
    color: "#06b6d4",
    fontWeight: 700,
  },

  missionNote: {
    display: "block",
    marginTop: "8px",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.5)",
    fontStyle: "italic",
  },

  exploreButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
    maxWidth: "300px",
    margin: "0 auto 60px",
    padding: "20px 30px",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "17px",
    fontWeight: 700,
    letterSpacing: "3px",
    color: "#ffffff",
    /* background: "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.5) 100%)", */
    backgroundColor: "rgb(36, 12, 36)",
    border: "2px solid rgba(168, 85, 247, 0.7)",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    boxShadow: "0 5px 30px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)",
    textTransform: "uppercase",
  },

  buttonRocket: {
    fontSize: "24px",
  },

  footer: {
    textAlign: "center",
    paddingTop: "40px",
    borderTop: "1px solid rgba(168, 85, 247, 0.2)",
  },

  footerStars: {
    fontSize: "20px",
    marginBottom: "15px",
    letterSpacing: "10px",
  },

  footerText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.4)",
    margin: 0,
  },
      }
    
return (
<section id="tela-tutorial" className="tela-tutorial" style={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        overflowX: "hidden",
      }}>

<div className="cosmic-engine">
        {cosmicBackground.stars.map(
          (
            star, //animação para as estrelas
          ) => (
            <div
              key={star.id}
              className="star-field"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `star-animation ${star.duration}s infinite ease-in-out ${star.delay}s`,
              }}
            />
          ),
        )}
      </div>

    <div className="container-conteudo"  style={{ position: "relative", zIndex: 1 }}>

      <div style={styles.sectionHeader}>
        <h1 className="titulo-criadores" style={styles.mainTitle}>Uma Jornada que
          <br />
        <span style={styles.titleHighlight}>Começou Sob as Estrelas</span>
        </h1>
        </div>
        
        <div className="jornada-projeto" style={styles.storyCard}>
          <p>
            Toda grande jornada tem um ponto de partida. A nossa começou em 2022, lá no IF Campus - Eirunepé. Eu e minha colega de classe: Giliany Do Carmo, embarcamos na aventura de criar um protótipo de aplicativo como parte de um projeto escolar. Na época, ele tinha uma pegada mais infantil, mas já era cheio das nossas ideias e da nossa paixão pelo espaço. Foi uma aventura de aprendizado e, honestamente, muuuitaaa empolgação a cada pequena conquista!✨
          </p>
          <p>
            Em 2025, decidi reativar o projeto por conta própria, com um novo desafio: reescrever todo o código e transformar a identidade visual. O objetivo era trocar a estética original por um design moderno e profissional e, ao mesmo tempo, ir além. Implementei novas tecnologias, como o JavaScript, e hoje estou explorando a inteligência artificial para expandir ainda mais o nosso universo de possibilidades. . . . 👩‍💻
          </p>
          <p>
            Mas o combustível por trás de tudo é algo mais profundoo... É a imensa saudade de um momento simples: as noites em que a luz acabava e eu e meu cachorro nos sentávamos do lado de fora para admirar as estrelas e o brilho da lua. A paixão pelo espaço sempre existiu, mas ao lado dele, cada noite se tornava mágica e incrivelmente especial.
            Este projeto é a minha forma de honrar e eternizar essa memória. É um pedaço do nosso tempo juntos, transformado em código.
            <br />
            <span style={styles.emotionalText}>Quer se juntar a mim nessa jornada? 💜🚀</span>
          </p>
        </div>

        <img src="/imagens/ilustration.png" alt="Foto ilustrativa de mim e meu cachorro" className="imagem-adaptavel"/>
 
        <div className="card" style={styles.missionCard}>
            <h2 className="titulo-missao" style={styles.missionTitle}>
              <span style={styles.missionIcon}>🎯</span>
              Sua Missão
              </h2>
            <ul className="lista-passos">
                <li>
                    <span className="marcador-neon"></span>
                    <p><strong style={styles.missionStrong}>Navegue pelo Espaço:</strong> Use a barra de pesquisa para encontrar astros ou clique no menu para acessar as áreas de exploração. 
                        <br/>
                        <span style={styles.missionNote}>
                        OBS: Para obter mais informações pesquise os termos em Inglês.
                        </span> 
                        </p>
                </li>
                <li>
                    <span className="marcador-neon"></span>
                    <p><strong style={styles.missionStrong}>Conheça os Astros:</strong> Explore planetas, galáxias e constelações. Cada um esconde informações fascinantes!</p>
                </li>
                <li>
                    <span className="marcador-neon"></span>
                    <p><strong style={styles.missionStrong}>Volte à Base:</strong> Use o botão de voltar ou o ícone da casinha para retornar à tela principal sempre que precisar.</p>
                </li>
            </ul>
        </div>

        <button
          style={styles.exploreButton}
          onClick={() => navigate("/app/exploracao")}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05) translateY(-3px)";
            e.target.style.background = "rgba(168, 85, 247, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1) translateY(0)";
            e.target.style.background = "rgb(36, 12, 36)";
          }}
        >
          <span style={styles.buttonRocket}>🚀</span>
          INICIAR EXPLORAÇÃO
        </button>

        <footer style={{ position: "relative", zIndex: 1 }}>
    <div style={styles.footer}>
          <div style={styles.footerStars}>⭐ ✨ 🌟 ✨ ⭐</div>
          <p style={styles.footerText}>Desenvolvido por Jaqueline, com 💜 e muita paixão pelo cosmos</p>
        </div>
        </footer>
    </div>

</section>

)}; 
export default MissionTutorial;
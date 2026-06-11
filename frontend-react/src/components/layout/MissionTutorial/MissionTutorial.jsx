import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TimelineItem from "./TimelineItem";
import styles from "./MissionTutorial.module.css"

function MissionTutorial() {

  const navigate = useNavigate();

  //gera estrelas aleatórias
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

return (
<section id="tela-tutorial" className={styles.telaTutorial}>

<div className={styles.cosmicEngine}>
        {cosmicBackground.stars.map(
          (
            star, //animação para as estrelas
          ) => (
            <div
              key={star.id}
              className={styles.starField}
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

    <div className={styles.containerConteudo}>

      <div className={styles.sectionHeader}>
        <h1 id="titulo-criadores" className={styles.mainTitle}>Uma Jornada que
          <br />
        <span className={styles.titleHighlight}>Começou Sob as Estrelas</span>
        </h1>
        </div>
         
        <div id="jornada-projeto" className={styles.storyCard}>
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
            <span className={styles.emotionalText}>Quer se juntar a mim nessa jornada? 💜🚀</span>
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <span className={styles.timelineStarArchive}>📡 Arquivo Estelar</span>
          <h2 className={styles.timelineTitle}>Linha do Tempo do Projeto</h2>
          <p className={styles.timelineDescription}>Clique nas fotos para explorar a galeria de cada era</p>

          <div className={styles.timelineOrnament}>
            <span className={styles.ornamentLine}></span>
            <span className={styles.ornamentStar}>✦</span>
            <span className={styles.ornamentLine}></span>
          </div>
          
          <img src="/images/ilustracao-menina-e-cao.webp" alt="Foto ilustrativa de mim e meu cachorro" className={styles.imagemAdaptavel}/>

          <div className={styles.timelineCards}>
            <TimelineItem
              year="2022"
              location="IF Campus Eirunepé"
              title="🌱 O Início"
              description="Primeiro protótipo criado em HTML e PowerPoint como projeto escolar, em parceria com Giliany Do Carmo."
              tags={["HTML", "PowerPoint", "Projeto Escolar"]}
              side="right"
              color="purple"
              images={[
                { src: "/images/tela-principal-2022.webp", caption: "Tela principal do protótipo em 2022" },
                { src: "/images/tela-inicial-2022.webp", caption: "Tela inicial do protótipo em 2022" },
                { src: "/images/tela-menu-2022.webp", caption: "Tela de menu do protótipo em 2022" },
                { src: "/images/tela-de-opcoes-2022.webp", caption: "Tela de opções do protótipo em 2022" },
                { src: "/images/tela-info-extra-2022.webp", caption: "Tela de informações extras do protótipo em 2022" },
                { src: "/images/tela-apagar-conta-2022.webp", caption: "Tela de apagar conta do protótipo em 2022" },
                { src: "/images/tela-menu-astros-2022.webp", caption: "Tela de menu de astros do protótipo em 2022" },
                { src: "/images/tela-astros-2022.webp", caption: "Tela de astros do protótipo em 2022" },
                { src: "/images/tela-orion-2022.webp", caption: "Tela da constelação de Orion do protótipo em 2022" },
                { src: "/images/tela-planetas-2022.webp", caption: "Tela dos planetas do protótipo em 2022" },
                { src: "/images/tela-venus-2022.webp", caption: "Tela de Vênus do protótipo em 2022" },
              ]}
            />
            <TimelineItem
              year="2025"
              location="Versões Intermediárias"
              title="⚡ A Transição"
              description="Reescrita do código com JavaScript moderno. Novas funcionalidades e experimentação visual."
              tags={["JavaScript", "CSS3", "Redesign"]}
              side="left"
              color="pink"
              images={[
                { src: "/images/tela-login-2025.webp", caption: "Tela de login em 2025" },
                { src: "/images/tela-principal-2025.2.webp", caption: "Tela principal em 2025" },
                { src: "/images/tela-menu-2025.webp", caption: "Tela de menu em 2025" },
                { src: "/images/tela-central-2025.webp", caption: "Tela central em 2025" },
                { src: "/images/tela-central-2025.2.webp", caption: "Tela central em 2025" },
                { src: "/images/tela-briefing-2025.webp", caption: "Tela de briefing em 2025" },
                { src: "/images/tela-briefing-b-2025.webp", caption: "Tela de briefing em 2025" },
                { src: "/images/tela-apagar-conta-2025.webp", caption: "Tela de apagar conta em 2025" },
                { src: "/images/tela-de-opcoes-2025.webp", caption: "Tela de opções em 2025" },
                { src: "/images/tela-opcoes-astros-2025.webp", caption: "Tela de opções de astros em 2025" },
                { src: "/images/tela-astros-2025.webp", caption: "Tela de astros em 2025" },
                { src: "/images/tela-planetas-2025.webp", caption: "Tela de planetas em 2025" },
                { src: "/images/tela-planetas-2025.2.webp", caption: "Tela de planetas em 2025" },
                { src: "/images/tela-terra-2025.webp", caption: "Tela da Terra em 2025" },
              ]}
            />
            <TimelineItem
              year="2025-2026"
              location="Era Atual"
              title="🚀 O Futuro"
              description="React + IA + Identidade visual cósmica moderna. Uma nova era de exploração profissional e imersiva."
              tags={["React", "IA", "Glassmorphism"]}
              side="right"
              color="cyan"
            />
          </div>
        </div>

        <div id="card" className={styles.missionCard}>
            <h2 id="titulo-missao" className={styles.missionTitle}>
              <span className={styles.missionIcon}>🎯</span>
              Sua Missão
              </h2>
            <ul className={styles.listaPassos}>
                <li>
                    <span className={styles.marcadorNeon}></span>
                    <p><strong className={styles.missionStrong}>Navegue pelo Espaço:</strong> Use a barra de pesquisa para encontrar astros ou clique no menu para acessar as áreas de exploração. 
                        <br/>
                        <span className={styles.missionNote}>
                        OBS: Para obter mais informações pesquise os termos em Inglês.
                        </span> 
                        </p>
                </li>
                <li>
                    <span className={styles.marcadorNeon}></span>
                    <p><strong className={styles.missionStrong}>Conheça os Astros:</strong> Explore planetas, galáxias e constelações. Cada um esconde informações fascinantes!</p>
                </li>
                <li>
                    <span className={styles.marcadorNeon}></span>
                    <p><strong className={styles.missionStrong}>Volte à Base:</strong> Use o botão de voltar ou o ícone da casinha para retornar à tela principal sempre que precisar.</p>
                </li>
            </ul>
        </div>

        <button
          className={styles.exploreButton}
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
          <span className={styles.buttonRocket}>🚀</span>
          INICIAR EXPLORAÇÃO
        </button>

        <footer>
    <div className={styles.footer}>
          <div className={styles.footerStars}>⭐ ✨ 🌟 ✨ ⭐</div>
          <p className={styles.footerText}>Desenvolvido com 💜 e muita paixão pelo cosmos</p>
        </div>
        </footer>
    </div>

</section>

)}; 
export default MissionTutorial;
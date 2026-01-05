import "../style/tutorial.css"
import { useNavigate } from "react-router-dom";

function MissionTutorial() {

  const navigate = useNavigate();
    
return (
<section id="tela-tutorial" className="tela-tutorial">
    <div className="background-overlay"></div>
    <div className="container-conteudo">
        <h1 className="titulo-criadores">Uma Jornada que Começou Sob as Estrelas</h1>
        
        <div className="jornada-projeto">
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
            Quer se juntar a mim nessa jornada? 💜🚀
          </p>
        </div>

        <img src="/imagens/jovem-e-dog.jpg" alt="Foto ilustrativa de mim e meu cachorro" className="imagem-adaptavel"/>
 
        <div className="card">
            <h2 className="titulo-missao">Sua Missão</h2>
            <ul className="lista-passos">
                <li>
                    <span className="marcador-neon"></span>
                    <p>Navegue pelo Espaço: Use a barra de pesquisa para encontrar astros ou clique no menu para acessar as áreas de exploração. 
                        <br/>
                        OBS: Para obter mais informações pesquise os termos em Inglês.</p>
                </li>
                <li>
                    <span className="marcador-neon"></span>
                    <p>Conheça os Astros: Explore planetas, galáxias e constelações. Cada um esconde informações fascinantes!</p>
                </li>
                <li>
                    <span className="marcador-neon"></span>
                    <p>Volte à Base: Use o botão de voltar ou o ícone da casinha para retornar à tela principal sempre que precisar.</p>
                </li>
            </ul>
        </div>
        
        <button type="button" className="botao-iniciar-jornada" id="iniciar-exploracao" onClick={() => navigate('/app/menu') }>Iniciar Exploração</button>
    </div>
</section>
);
} 
export default MissionTutorial;
import { useNavigate } from "react-router-dom";

import "../style/eventos-astronomicos.css"
import "../style/tela-informacoes-planetarias.css"

function Andromeda() {
     
    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-andromeda">
    <div className="space-background">
      <div className="stars"></div> 
    </div>
    <div className="info-card">
    <img src="/imagens/andromeda.png" alt="Constelação Andrômeda" class="celestial-image" />
    <h3 className="titulo-missao">Constelação de Andrômeda</h3>
    <div className="jornada-projeto">
    <p className="descricao">A constelação de Andrômeda é famosa por abrigar um dos objetos mais fascinantes do nosso céu noturno: a Galáxia de Andrômeda (M31). Para um verdadeiro explorador, este é um alvo de missão prioritário. M31 é a nossa vizinha galáctica mais próxima e, de uma perspectiva na Terra, é o objeto mais distante que pode ser visto a olho nu. <br></br>
      Imagine isto: mesmo sem o auxílio de telescópios, você está olhando para uma galáxia inteira que está a impressionantes 2,5 milhões de anos-luz de distância. A luz que você vê saiu de Andrômeda há 2,5 milhões de anos, quando os primeiros humanos andavam pela Terra.
      <br></br>
      Explorar Andrômeda é mais do que observar estrelas; é uma viagem no tempo. É a prova de que, com a orientação certa, você pode ver a história do universo se desdobrando diante dos seus olhos.
    </p>
    </div>
  </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-andromeda"
    onClick={() => navigate("/app/hemisferio-norte")}>Voltar</button>
  </section> 
    )
}
export default Andromeda;
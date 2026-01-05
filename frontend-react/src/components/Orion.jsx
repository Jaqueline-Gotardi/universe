import { useNavigate } from "react-router-dom";

function Orion() {

    const navigate = useNavigate();

    return (
        <section class="tela-eventos-detalhe" id="detalhe-orion">
    <div class="space-background">
      <div class="stars"></div>
    </div>
    <div class="info-card">
    <img src="/imagens/orion.jpg" alt="Constelação Órion" class="celestial-image" />
    <h3 class="titulo-missao">Constelação de Órion</h3>
    <div class="jornada-projeto">
    <p class="descricao">Órion, o Caçador, é uma das constelações mais famosas e fáceis de reconhecer no céu. Sua forma imponente é um guia perfeito para qualquer explorador.
      <br />
      O Cinturão de Órion: Formado por três estrelas em linha reta, o cinturão de Órion é o ponto de partida ideal para localizar outras estrelas e constelações.
      <br />
      Berçário de Estrelas: Logo abaixo do cinturão, está a Nebulosa de Órion, um espetacular berçário onde novas estrelas estão nascendo. É um dos objetos mais incríveis que se pode ver a olho nu.
      <br />
      Ao explorar Órion, você está olhando para o berço de futuras estrelas.</p>
    </div>
    </div>
    <button type="button" class="botao-voltar botao-opcao-menu" id="btn-voltar-orion"
    onClick={() => navigate("/app/constellations-famous")}>Voltar</button>
  </section>
    )
}
export default Orion;
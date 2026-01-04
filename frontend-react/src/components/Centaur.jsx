import { useNavigate } from "react-router-dom";

function Centaur() {
    const navigate = useNavigate();

    return (
    <section class="tela-eventos-detalhe" id="detalhe-centauro">
    <div class="space-background">
      <div class="stars"></div>
    </div>
    <div class="info-card">
    <img src="/imagens/centauro.png" alt="Constelação Centauro" class="celestial-image" />
    <h3 class="titulo-missao">Constelação de Centauro</h3>
    <div class="jornada-projeto">
    <p class="descricao">Centauro é uma das maiores e mais brilhantes constelações do Hemisfério Sul, servindo como um guia majestoso para os exploradores. Ela não é apenas notável por seu tamanho, mas por abrigar dois dos objetos mais fascinantes do nosso céu.
      <br></br>
      Alpha Centauri: Esta é a estrela mais importante para qualquer agente espacial, pois se trata do sistema estelar mais próximo do nosso Sol. Ela é nossa vizinha imediata, um destino de exploração prioritário no futuro da humanidade.
      <br></br>
      Omega Centauri: A constelação também abriga o maior aglomerado globular da Via Láctea. Este aglomerado é uma densa esfera de estrelas antigas, contendo milhões de sóis em um espaço relativamente pequeno, um espetáculo de luz para se maravilhar.
      <br></br>
      Observar Centauro é uma missão que te conecta a dois extremos do universo: o ponto mais próximo de nós e uma das maiores concentrações de estrelas em nossa própria galáxia.
      </p>
    </div>
  </div> 
    <button type="button" class="botao-voltar botao-opcao-menu" id="btn-voltar-centauro"
    onClick={() => navigate("/app/hemisferio-sul")}>Voltar</button>
  </section>
    )
}
export default Centaur;
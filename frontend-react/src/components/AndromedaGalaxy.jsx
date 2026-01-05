import { useNavigate } from "react-router-dom";

function AndromedaGalaxy() {

    const navigate = useNavigate();

    return(
    <section className="tela-eventos-detalhe" id="detalhe-andromeda-galaxia">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/galaxia-andromeda.png" alt="Galáxia de Andrômeda" className="celestial-image" />
    
      <h3 className="titulo-criadores">Galáxia de Andrômeda</h3>
      <p className="descricao">
        A Galáxia de Andrômeda <strong>é nossa vizinha galáctica mais próxima e o objeto mais distante que você pode ver a olho nu.</strong> Localizada a cerca de 2,5 milhões de anos-luz de distância, a luz que vemos hoje dela saiu de lá quando os primeiros ancestrais humanos já caminhavam na Terra. Ela é uma galáxia espiral ainda maior que a nossa, com um diâmetro de 220.000 anos-luz e cerca de 1 trilhão de estrelas.
        <br />
        Observar isto te conecta com uma viagem no tempo e nos prepara para o encontro que acontecerá com a nossa galáxia em bilhões de anos.
      </p>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-galaxia-andromeda"
    onClick={() => navigate("/app/famous-galaxies")}>Voltar</button>
  </section>
    )
}
export default AndromedaGalaxy;
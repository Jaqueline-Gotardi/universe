import { useNavigate } from "react-router-dom";

function Supernovas() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-supernovas">
    <div className="space-background">
      <div className="stars"></div>
    </div> 
   <div className="info-card">
    <img src="/imagens/supernovas.png" alt="Supernovas" className="celestial-image" />
    
      <h3 className="titulo-missao">Supernovas</h3>
      <p className="descricao">
        Supernovas são os eventos mais poderosos e luminosos do universo. Elas <strong>marcam o fim catastrófico da vida de estrelas extremamente massivas, que entram em colapso e explodem com uma força inimaginável. Essa explosão pode brilhar mais do que uma galáxia inteira, sendo visível a bilhões de anos-luz de distância.</strong>
        <br></br>
        Além de seu brilho, as supernovas são as forjas cósmicas que criam e espalham elementos pesados pelo universo. Elementos como o ferro, o ouro e a prata são criados durante essas explosões e então lançados no cosmos, se dispersando pela vastidão do espaço.
        <br></br>
        Observá-la te conecta com o ciclo da vida e morte de uma estrela, um evento que nos lembra que do brilho final pode surgir a semente de novas criações.
      </p>
    
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-supernovas"
    onClick={() => navigate("/app/comets-and-others")}>Voltar</button>
  </section>
    )
}
export default Supernovas;
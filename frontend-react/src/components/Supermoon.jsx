import { useNavigate } from "react-router-dom";

function Supermoon() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-superlua">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/superlua.png" alt="Superlua" className="celestial-image" />
     
      <h3 className="titulo-missao">Superlua</h3>
     
      <p className="descricao">
        A Superlua <strong>ocorre quando a Lua atinge sua fase de Lua Cheia no ponto de sua órbita mais próximo da Terra. Isso acontece algumas vezes por ano.</strong>
        <br />
        Durante este fenômeno, a Lua pode parecer 14% maior e 30% mais brilhante do que o normal, oferecendo uma vista espetacular. Observar a Superlua é como testemunhar o nosso satélite mais próximo em toda a sua glória.
        <br />
        É uma missão que te conecta a um fenômeno de pura escala e beleza.
      </p>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-superlua" 
    onClick={() => navigate("/app/supermoon-and-conjunctions")}>Voltar</button>
  </section>
    )
} 
export default Supermoon;
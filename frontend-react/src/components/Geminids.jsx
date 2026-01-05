import { useNavigate } from "react-router-dom";

function Geminids() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-geminideas">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/chuva-de-meteoros-geminideas.png" alt="Chuva de Meteoros Geminídeas" className="celestial-image" />
    
      <h3 className="titulo-missao">Chuva de Meteoros Geminídeas</h3>
      <div className="jornada-projeto">
      <p className="descricao">
        Prepare-se para uma das missões mais intensas e consistentes do ano. As Geminídeas são únicas, pois <strong>são a única grande chuva de meteoros que se origina de um asteroide, o 3200 Phaethon</strong>, e não de um cometa. <strong>Elas são visíveis de quase todo o planeta, mas são melhor observadas do Hemisfério Norte, com pico em meados de dezembro.</strong>
        <br />
        Observar as Geminídeas é como testemunhar uma tempestade de partículas cósmicas, um espetáculo de luz que risca o céu noturno. O nome da chuva vem da constelação de Gêmeos, de onde parecem irradiar.
        <br />
        É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.
      </p>
      </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-geminidea"
    onClick={() => navigate("/app/meteor-showers")}>Voltar</button>
  </section>
    )
}
export default Geminids;
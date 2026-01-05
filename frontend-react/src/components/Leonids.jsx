import { useNavigate } from "react-router-dom";

function Leonids() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-leonideas">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/chuva-de-meteoros-leonideas.png" alt="Chuva de Meteoros Leonídeas" className="celestial-image" />
    
      <h3 className="titulo-missao">Chuva de Meteoros Leonídeas</h3>
      <div className="jornada-projeto">
      <p className="descricao">
        Prepare-se para uma missão de alta velocidade. As Leônidas são uma das chuvas de meteoros mais notáveis, conhecidas pela sua velocidade impressionante. <strong>Elas ocorrem quando a Terra passa pela trilha de detritos deixada pelo Cometa Tempel-Tuttle. Elas são melhor observadas do Hemisfério Norte, com seu pico de atividade em meados de novembro.</strong>
        <br></br>
        Observar as Leônidas é como testemunhar uma tempestade de partículas cósmicas, um espetáculo de luz que risca o céu noturno. O nome da chuva vem da constelação de Leão, de onde parecem irradiar, dando a sensação de que os próprios leões do céu estão deixando sua marca.
        <br></br>
        É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.
      </p>
   </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-leonidea" 
    onClick={() => navigate("/app/meteor-showers")}>Voltar</button>
  </section>
    )
} 
export default Leonids;
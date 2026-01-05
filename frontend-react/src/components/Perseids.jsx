import { useNavigate } from "react-router-dom";

function Perseids() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-perseidas">
    <div className="space-background">
        <div className="stars"></div>
        </div>
   <div className="info-card">
    <img src="/imagens/chuva-de-meteoros-perseidas.png" alt="Chuva de Meteoros Perseidas" className="celestial-image" />
    
      <h3 className="titulo-missao">Chuva de Meteoros Perseidas</h3>
      <div className="jornada-projeto">
      <p className="descricao">
        As Perseidas são uma das chuvas de meteoros mais populares e visíveis do ano. <strong>Este evento ocorre quando a Terra passa por uma nuvem de detritos deixada pelo Cometa Swift-Tuttle, criando um espetáculo de luz. As Perseidas acontecem anualmente,  são melhor observadas do Hemisfério Norte, com seu pico de atividade na segunda semana de agosto.</strong>
        <br></br>
        Observar as Perseidas é como assistir a fogos de artifício cósmicos, com rastros de luz riscando o céu noturno. O nome da chuva vem da constelação de Perseu, de onde parecem irradiar, transformando o céu em um palco de luzes.
        <br></br>
        É uma missão que te convida a testemunhar a beleza da dança cósmica, um espetáculo que nos lembra da constante movimentação e do brilho do nosso sistema solar.
      </p>
    </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-perseida"
    onClick={() => navigate("/app/meteor-showers")}>Voltar</button>
  </section>
    )
}
export default Perseids; 
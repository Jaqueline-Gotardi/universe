import { useNavigate } from "react-router-dom";

function Pluto() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe screen active"  id="detalhe-plutao">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
      <img src="/imagens/plutao.png" alt="Plutão" className="celestial-image" />
        <h3 className="titulo-missao">Plutão</h3>
        <p className="descricao">
          Plutão foi considerado o nono planeta do Sistema Solar por 76 anos, mas foi reclassificado como um planeta anão em 2006.
          <br />É um mundo gelado, com uma atmosfera fina e montanhas de gelo. Sua lua, Caronte, é tão grande em comparação com ele que ambos formam um sistema binário.
          <br />Plutão está localizado no Cinturão de Kuiper, uma região além de Netuno, repleta de objetos gelados.
        </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-plutao"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Pluto;
import { useNavigate } from "react-router-dom";

function Uranus() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-urano">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/urano.png" alt="Urano" className="celestial-image" />
      <h3 className="titulo-missao">Urano</h3>
      <p className="descricao">
        Urano é o sétimo planeta a partir do Sol, um gigante de gelo que se destaca por sua cor azul-esverdeada, causada
        pelo gás metano na sua atmosfera.
        <br />Seu aspecto mais incomum é o fato de que ele gira de lado. Seu eixo de rotação é inclinado em quase 98
        graus, fazendo com que ele pareça rolar em sua órbita.
        <br />Urano tem um sistema de anéis finos e escuros, e sua atmosfera é a mais fria do Sistema Solar.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-urano"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Uranus;
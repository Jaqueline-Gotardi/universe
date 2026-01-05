import { useNavigate } from "react-router-dom";

function Neptune() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-netuno">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/netuno.png" alt="Netuno" className="celestial-image" />
      <h3 className="titulo-missao">Netuno</h3>
      <p className="descricao">
        Netuno é o oitavo e último planeta do nosso Sistema Solar, um gigante de gelo conhecido por sua cor azul-escura
        e ventos incrivelmente rápidos.
        <br />Ele é um planeta dinâmico, com tempestades em sua superfície, como a Grande Mancha Escura, um sistema de
        tempestades que se assemelha à Grande Mancha Vermelha de Júpiter.
        <br />Netuno é o planeta mais distante do Sol, por isso sua órbita leva quase 165 anos terrestres para ser
        concluída.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-netuno"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Neptune;
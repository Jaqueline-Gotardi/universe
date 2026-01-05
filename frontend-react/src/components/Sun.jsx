import { useNavigate } from "react-router-dom";

function Sun() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-sol">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/sol.png" alt="Sol" className="celestial-image" />
      <h3 className="titulo-missao">Sol</h3>
      <p className="descricao">
        O Sol é a estrela no centro do nosso Sistema Solar e a principal fonte de luz e energia para a vida na Terra.
        <br />É uma imensa esfera de plasma superaquecido, com uma superfície dinâmica que possui manchas solares e
        explosões energéticas como as erupções solares.
        <br />Ele é tão massivo que sua gravidade mantém todos os planetas, incluindo a Terra, em órbita ao seu redor,
        sendo essencial para a existência do nosso sistema.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-sol"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Sun;
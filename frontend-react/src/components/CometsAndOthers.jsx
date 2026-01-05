import { useNavigate } from "react-router-dom";

function CometsAndOthers() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-cometas-outros">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-cometas"
      onClick={() => navigate("/app/comets")}>Cometas</button>

      <button type="button" className="btn-cosmic" id="btn-supernovas"
      onClick={() => navigate("/app/supernovas")}>Supernovas</button>

      <button type="button" className="btn-cosmic" id="btn-agrupamentos-estrelares"
      onClick={() => navigate("/app/star-clusters")}>Agrupamentos Estelares</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-cometas-e-outros"
    onClick={() => navigate("/app/events-menu")}>Voltar</button>
  </section>
    )
}
export default CometsAndOthers; 
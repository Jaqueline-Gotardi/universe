import { useNavigate } from "react-router-dom";

function NorthConstelattions() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="constelacoes-norte">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-ursa-maior"
      onClick={() => navigate("/app/big-dipper")}>Ursa Maior</button>

      <button type="button" className="btn-cosmic" id="btn-ursa-menor">Ursa Menor</button>

      <button type="button" className="btn-cosmic" id="btn-andromeda">Andrômeda</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-constelacao-norte"
    onClick={() => navigate("/app/constelattion")}>Voltar</button>
  </section>
    )
}
export default NorthConstelattions;
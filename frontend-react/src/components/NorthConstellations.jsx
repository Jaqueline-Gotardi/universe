import { useNavigate } from "react-router-dom";

function NorthConstellations() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="constelacoes-norte">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-ursa-maior"
      onClick={() => navigate("/app/big-dipper")}>Ursa Maior</button>

      <button type="button" className="btn-cosmic" id="btn-ursa-menor"
      onClick={() => navigate("/app/little-dipper")}>Ursa Menor</button>

      <button type="button" className="btn-cosmic" id="btn-andromeda"
      onClick={() => navigate("/app/andromeda-constellation")}>Andrômeda</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-constelacao-norte"
    onClick={() => navigate("/app/constellations-menu")}>Voltar</button>
  </section>
    )
}
export default NorthConstellations; 
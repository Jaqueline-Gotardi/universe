import { useNavigate } from "react-router-dom";

function ConstelletionsMenu() {
    
    const navigate = useNavigate();

    return (
        <section className="tela-principal" id="tela-constelacoes">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="hemisferio-norte"
      onClick={() => navigate("/app/hemisferio-norte")}>Hemisfério Norte</button>

      <button type="button" className="btn-cosmic" id="hemisferio-sul" onClick={() => navigate("/app/hemisferio-sul")}>Hemisfério Sul</button>

      <button type="button" className="btn-cosmic" id="hemisferio-principal"
      onClick={() => navigate("/app/constellations-famous")}>As Famosas</button>

    </div>
    <button type="button" className="botao-voltar" id="btn-voltar-constelacoes"
    onClick={() => navigate("/app/astros-menu")}>Voltar</button>
  </section>
    )
}
export default ConstelletionsMenu;  
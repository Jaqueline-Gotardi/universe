import { useNavigate } from "react-router-dom";

function TypeGalaxies() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-tipos-galaxias">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" data-target="detalhe-espiral" id="btn-espiral"
      onClick={() => navigate("/app/spiral")}>Espiral</button>

      <button type="button" className="btn-cosmic" data-target="detalhe-eliptica" id="btn-eliptica"
      onClick={() => navigate("/app/elliptical")}>Elíptica</button>

      <button type="button" className="btn-cosmic" data-target="detalhe-irregular" id="btn-irregular">Irregular</button>

    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-tipos-de-galaxia"
    onClick={() => navigate("/app/galaxies-menu")}>Voltar</button>
  </section>
    )
}
export default TypeGalaxies;
import { useNavigate } from "react-router-dom";

function FamousGalaxies() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-galaxias-famosas">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" data-target="detalhe-via-lactea" id="btn-via-lactea"
      onClick={() => navigate("/app/milky-way")}>Via Láctea</button>

      <button type="button" className="btn-cosmic" data-target="detalhe-andromeda-galaxia" id="btn-galaxia-andromeda">Andrômeda</button>

      <button type="button" className="btn-cosmic" data-target="detalhe-triangulo" id="btn-triangulo-m33">Triângulo (M33)</button>

    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-galaxias-famosas"
    onClick={() => navigate("/app/galaxies-menu")}>Voltar</button>
  </section>
    )
}
export default FamousGalaxies;
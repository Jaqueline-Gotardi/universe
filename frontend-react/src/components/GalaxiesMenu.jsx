import { useNavigate } from "react-router-dom";

function Galaxies() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="tela-galaxias">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" data-target="lista-tipos-galaxias" id="tipos-de-galaxias"
      onClick={() => navigate("/app/type-galaxies")}>Tipos de Galáxias</button>

      <button type="button" className="btn-cosmic" data-target="lista-galaxias-famosas" id= "galaxias-famosas"
      onClick={() => navigate("/app/famous-galaxies")}>Galáxias Famosas</button>

    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-galaxias"
    onClick={() => navigate("/app/astros-menu")}>Voltar</button>
  </section>
    )
} 
export default Galaxies;     
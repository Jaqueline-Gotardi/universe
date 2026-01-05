import { useNavigate } from "react-router-dom";

function SupermoonAndConjunctions() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-superluas-conjuncoes">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-superlua"
      onClick={() => navigate('/app/supermoon')}>Superlua</button>

      <button type="button" className="btn-cosmic" id="btn-conjuncao-planetaria"
      onClick={() => navigate("/app/planetary-conjunction")}>Conjunção Planetária</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-superluas-e-conjuncoes"
    onClick={() => navigate("/app/events-menu")}>Voltar</button>
  </section>
    )
}
export default SupermoonAndConjunctions;  
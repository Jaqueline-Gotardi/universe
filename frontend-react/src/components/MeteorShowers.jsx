import { useNavigate } from "react-router-dom";

function MeteorShowers() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-chuvas-de-meteoros">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-perseidas"
      onClick={() => navigate("/app/perseids")}>Perseidas</button>

      <button type="button" className="btn-cosmic" id="btn-leonideas"
      onClick={() => navigate("/app/leonids")}>Leonídeas</button>

      <button type="button" className="btn-cosmic" id="btn-geminideas">Geminídeas</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-chuva-de-meteoros"
    onClick={() => navigate("/app/info-events")}>Voltar</button>
  </section>
    )
}
export default MeteorShowers;
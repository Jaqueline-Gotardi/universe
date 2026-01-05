import { useNavigate } from "react-router-dom";

function InfoEvents() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="tela-eventos-astronomicos">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="eclipses"
      onClick={() => navigate("/app/eclipses")}>Eclipses</button>

      <button type="button" className="btn-cosmic" id="chuva-de-meteoros"
      onClick={() => navigate("/app/meteor-showers")}>Chuvas de Meteoros</button>

      <button type="button" className="btn-cosmic" id="superluas-e-conjuncoes">Superluas e Conjuções</button>

      <button type="button" className="btn-cosmic" id="cometas-e-outros">Cometas e Outros</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-eventos-astronomicos"
    onClick={() => navigate("/app/info-astros")}>Voltar</button>
  </section> 
    )
}
export default InfoEvents;
import { useNavigate } from "react-router-dom";

function Eclipses() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="lista-eclipses">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-eclipse-solar"
      onClick={() => navigate("/app/solar-eclipse")}>Eclipse Solar</button>

      <button type="button" className="btn-cosmic" id="btn-eclipse-lunar"
      onClick={() => navigate("/app/lunar-eclipse")}>Eclipse Lunar</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-eclipses"
    onClick={() => navigate("/app/events-menu")}>Voltar</button>
  </section> 
    )
}
export default Eclipses; 
import { useNavigate } from "react-router-dom";

function Eclipses() {

    const navigate = useNavigate();

    return (
    <section class="tela-principal" id="lista-eclipses">
    <div class="informacoes-extras">

      <button type="button" class="btn-cosmic" id="btn-eclipse-solar"
      onClick={() => navigate("/app/solar-eclipse")}>Eclipse Solar</button>

      <button type="button" class="btn-cosmic" id="btn-eclipse-lunar"
      onClick={() => navigate("/app/lunar-eclipse")}>Eclipse Lunar</button>

    </div>
    <button type="button" class="botao-voltar botao-opcao-menu" id="btn-voltar-eclipses"
    onClick={() => navigate("/app/info-events")}>Voltar</button>
  </section> 
    )
}
export default Eclipses;
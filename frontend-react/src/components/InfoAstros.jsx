import { useNavigate } from "react-router-dom";
function InfoAstros() {

    const navigate = useNavigate();

    return (
        <section class="tela-principal" id="tela-info-astros">
    <div class="informacoes-extras"> 

      <button type="button" class="btn-cosmic" id="btn-constelacoes"
      onClick={() => navigate('/app/constelattion')}>Constelações</button>

      <button type="button" class="btn-cosmic" id="btn-eventos-astronomicos"
      onClick={() => navigate('/app/events-astros')}>Eventos Astronômicos</button>

      <button type="button" class="btn-cosmic" id="btn-galaxias"
      onClick={() => navigate('/app/galaxy')}>Galáxia</button>

    </div>
    <button type="button" class="botao-voltar" id="btn-voltar-info-astros"
    onClick={() => navigate('/app/menu')}>Voltar</button>
  </section>
    )
}
export default InfoAstros;
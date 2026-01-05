import { useNavigate } from "react-router-dom";
function InfoAstros() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="tela-info-astros">
    <div className="informacoes-extras"> 

      <button type="button" className="btn-cosmic" id="btn-constelacoes"
      onClick={() => navigate('/app/constelattion')}>Constelações</button>

      <button type="button" className="btn-cosmic" id="btn-eventos-astronomicos"
      onClick={() => navigate('/app/events-menu')}>Eventos Astronômicos</button>

      <button type="button" className="btn-cosmic" id="btn-galaxias"
      onClick={() => navigate('/app/galaxies-menu')}>Galáxia</button>

    </div>
    <button type="button" className="botao-voltar" id="btn-voltar-info-astros"
    onClick={() => navigate('/app/menu')}>Voltar</button>
  </section>
    ) 
}
export default InfoAstros;     
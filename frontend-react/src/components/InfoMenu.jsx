import { useNavigate } from "react-router-dom";

function InfoMenu() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="informacoes-do-menu">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-informacoes-astronomicas"
      onClick={() => navigate('/app/astros-menu')}>Informações Astronômicas</button>

      <button type="button" className="btn-cosmic" id="btn-informacoes-planetarias"
      onClick={() => navigate("/app/planetary-menu")}>Informações Planetárias</button>

      <button type="button" className="btn-cosmic" id="btn-informacoes-extras"
      onClick={() => navigate("/app/extras-menu")}>Informações Extras</button>

    </div>
    <button type="button" className="botao-voltar" id="btn-voltar-info-menu"
    onClick={() => navigate('/app/exploracao')}>Voltar</button>
  </section> 
    );
}
export default InfoMenu;     
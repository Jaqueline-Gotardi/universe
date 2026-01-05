import { useNavigate } from "react-router-dom";

function SouthConstellations() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="constelacoes-sul">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-cruzeiro-do-sul"
      onClick={() => navigate("/app/southern-cross")}>Cruzeiro do Sul</button>

      <button type="button" className="btn-cosmic" id="btn-fenix"
      onClick={() => navigate("/app/phoenix")}>Fênix</button>

      <button type="button" className="btn-cosmic" id="btn-centauro"
      onClick={() => navigate("/app/centaur")}>Centauro</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-constelacao-sul" 
    onClick={() => navigate("/app/constellations-menu")}>Voltar</button>
  </section>  
    )
}
export default SouthConstellations; 
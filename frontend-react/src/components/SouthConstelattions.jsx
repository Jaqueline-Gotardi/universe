import { useNavigate } from "react-router-dom";

function SouthConstelattions() {

    const navigate = useNavigate();

    return (
        <section className="tela-principal" id="constelacoes-sul">
    <div class="informacoes-extras">
      <button type="button" className="btn-cosmic" id="btn-cruzeiro-do-sul">Cruzeiro do Sul</button>
      <button type="button" className="btn-cosmic" id="btn-fenix">Fênix</button>
      <button type="button" className="btn-cosmic" id="btn-centauro">Centauro</button>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-constelacao-sul" 
    onClick={() => navigate("/app/constelattion")}>Voltar</button>
  </section> 
    )
}
export default SouthConstelattions;
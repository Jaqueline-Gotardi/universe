import { useNavigate } from "react-router-dom";

function FamousConstellations() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="constelacoes-famosas">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-orion"
      onClick={() => navigate("/app/orion")}>Órion</button>

      <button type="button" className="btn-cosmic" id="btn-cao-maior"
      onClick={() => navigate("/app/greater-canis")}>Cão Maior</button>

      <button type="button" className="btn-cosmic" id="btn-escorpiao"
      onClick={() => navigate("/app/scorpion")}>Escorpião</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-constelacoes-famosas"
    onClick={() => navigate("/app/constellations-menu")}>Voltar</button>
  </section> 
    )
}
export default FamousConstellations;  
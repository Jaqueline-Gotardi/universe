import { useNavigate } from "react-router-dom";

import "../style/tela-informacoes-planetarias.css"

 function PlanetaryMenu() {

    const navigate = useNavigate();

    return (
    <section className="tela-planetas" id="tela-info-planetas">
    <div className="info-planetas">
    <div className="informacoes-dos-planetas">

      <button type="button" className="btn-cosmic" id="btn-sol"
      onClick={() => navigate("/app/sun")}>Sol</button>

      <button type="button" className="btn-cosmic" id="btn-mercurio"
      onClick={() => navigate("/app/mercury")}>Mercúrio</button>

      <button type="button" className="btn-cosmic" id="btn-venus"
      onClick={() => navigate("/app/venus")}>Vênus</button>

      <button type="button" className="btn-cosmic" id="btn-terra"
      onClick={() => navigate("/app/earth")}>Terra</button>

      <button type="button" className="btn-cosmic" id="btn-marte"
      onClick={() => navigate("/app/mars")}>Marte</button>

      <button type="button" className="btn-cosmic" id="btn-jupiter"
      onClick={() => navigate("/app/jupiter")}>Júpiter</button>

      <button type="button" className="btn-cosmic" id="btn-saturno"
      onClick={() => navigate("/app/saturn")}>Saturno</button>

      <button type="button" className="btn-cosmic" id="btn-urano"
      onClick={() => navigate("/app/uranus")}>Urano</button>

      <button type="button" className="btn-cosmic" id="btn-netuno"
      onClick={() => navigate("/app/neptune")}>Netuno</button>

      <button type="button" className="btn-cosmic" id="btn-plutao"
      onClick={() => navigate("/app/pluto")}>Plutão</button>
    </div>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-planetas"
    onClick={() => navigate("/app/menu")}>Voltar</button>
  </section>
    )
 }
 export default PlanetaryMenu; 
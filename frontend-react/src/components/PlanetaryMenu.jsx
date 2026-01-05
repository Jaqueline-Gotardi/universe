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

      <button type="button" className="btn-cosmic" id="btn-mercurio">Mercúrio</button>

      <button type="button" className="btn-cosmic" id="btn-venus">Vênus</button>

      <button type="button" className="btn-cosmic" id="btn-terra">Terra</button>

      <button type="button" className="btn-cosmic" id="btn-marte">Marte</button>

      <button type="button" className="btn-cosmic" id="btn-jupiter">Júpiter</button>

      <button type="button" className="btn-cosmic" id="btn-saturno">Saturno</button>

      <button type="button" className="btn-cosmic" id="btn-urano">Urano</button>

      <button type="button" className="btn-cosmic" id="btn-netuno">Netuno</button>

      <button type="button" className="btn-cosmic" id="btn-plutao">Plutão</button>
    </div>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-planetas"
    onClick={() => navigate("/app/menu")}>Voltar</button>
  </section>
    )
 }
 export default PlanetaryMenu;
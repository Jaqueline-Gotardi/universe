import { useNavigate } from "react-router-dom";

import "../style/eventos-astronomicos.css"
import "../style/tela-informacoes-planetarias.css"

function LittleDipper() {

    const navigate = useNavigate();

    return (
        <section className="tela-eventos-detalhe" id="detalhe-ursa-menor">
    <div className="space-background">
        <div className="stars"></div>
        </div>
    <div className="info-card">
    <img src="/imagens/ursa-menor.png" alt="Constelação Ursa Menor" class="celestial-image" />
    <h3 className="titulo-missao">Constelação de Ursa Menor</h3>
    <div className="jornada-projeto">
    <p className="descricao">Na vastidão do cosmo, a Ursa Menor se destaca não pelo seu brilho intenso, mas pela sua importância inigualável. Esta constelação, embora menos visível que a sua "irmã" maior, atua como um farol para os navegantes e exploradores, guiando-os através da escuridão. 
      <br></br>
      Sua joia mais preciosa é Polaris, a Estrela do Norte. Graças à sua posição quase fixa no polo celeste, ela serviu por séculos como o ponto de referência mais confiável para a navegação, uma estrela que nunca se move.
      <br></br>
      Ao explorar a Ursa Menor, você está seguindo os passos de antigos navegadores, cientistas e aventureiros. Você não está apenas olhando para as estrelas; você está se conectando a uma tradição de exploração e descoberta que existe há milênios. </p>
      </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-ursa-menor"
    onClick={() => navigate("/app/hemisferio-norte")}>Voltar</button>
  </section>
    )
}
export default LittleDipper;
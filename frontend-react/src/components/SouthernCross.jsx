import { useNavigate } from "react-router-dom";

 function SouthernCross() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-cruzeiro-do-sul">
    <div className="space-background">
      <div className="stars"></div>
    </div>
    <div className="info-card">
    <img src="/imagens/cruzeiro-do-sul.png" alt="Constelação Cruzeiro do Sul" class="celestial-image" />
    <h3 className="titulo-missao">Constelação de Cruzeiro Do Sul</h3>
    <div className="jornada-projeto">
    <p className="descricao">Embora seja a menor das 88 constelações, o Cruzeiro do Sul (ou Crux) tem uma importância colossal para os exploradores do Hemisfério Sul. Esta pequena e distinta constelação atua como um farol, um guia confiável na escuridão do céu.
      <br></br>
      Sua principal missão é ajudar a encontrar o Polo Sul Celeste. As duas estrelas na ponta da "cruz" apontam diretamente para o sul, tornando-a uma ferramenta de navegação indispensável, da mesma forma que Polaris é para os navegadores do norte.
      <br></br>
      Observar o Cruzeiro do Sul é um rito de passagem para qualquer agente especial que explore os céus do Hemisfério Sul. Ela é a prova de que até mesmo os menores agrupamentos de estrelas podem ter a maior utilidade.</p>
    </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-cruzeiro-do-sul"
    onClick={() => navigate("/app/hemisferio-sul")}>Voltar</button>
  </section>
    )
 }
export default SouthernCross;
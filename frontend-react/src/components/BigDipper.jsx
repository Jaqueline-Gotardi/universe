import { useNavigate } from "react-router-dom";

import "../style/eventos-astronomicos.css"
import "../style/tela-informacoes-planetarias.css"


function BigDipper() {

    const navigate = useNavigate();

    return (
        <section className="tela-eventos-detalhe" id="detalhe-ursa-maior" >
    <div className="space-background">
      <div className="stars"></div>
    </div>
    <div className="info-card">
      <img src="/imagens/ursa-maior.png" alt="Constelação Ursa Maior" class="celestial-image" />
      <h3 class="titulo-missao">Constelação de Ursa Maior</h3>
      <div className="jornada-projeto">
      <p className="descricao">Uma das constelações mais famosas do céu noturno, a Ursa Maior é facilmente reconhecível pelo seu formato icônico, conhecido como "O Grande Carro". Visível durante todo o ano no Hemisfério Norte, ela é um marco no céu, uma das primeiras formações que qualquer explorador aprende a identificar.
        <br />
        Mas sua importância vai além do seu formato. As duas estrelas na extremidade da "caçarola" do Grande Carro apontam diretamente para Polaris, a Estrela do Norte, na Ursa Menor. Isso faz da Ursa Maior não apenas uma constelação em si, mas um guia para encontrar a estrela que por séculos orientou a navegação em nosso planeta.
        <br />
        Explorar a Ursa Maior é o primeiro passo para se familiarizar com a vastidão do universo. Ela é a porta de entrada para uma jornada de descobertas que se estende por todo o céu.</p>
      </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-ursa-maior"
    onClick={() => navigate("/app/hemisferio-norte")}>Voltar</button>
  </section>
    )
}
export default BigDipper;
import { useNavigate } from "react-router-dom";

import "../style/tela-apagar-conta.css"

function DeleteAccount() {

    const navigate = useNavigate();

    return (
    <section className="tela-apagar-conta" id="detalhe-apagar-conta">
    <div className="container-conteudo">
      <figure className="astronauta">
        <img src="/imagens/nauta-triste.png" alt="Astronauta triste, pensando em você" />
      </figure>
      <div className="painel-confirmacao">
        <p className="mensagem-persuasiva">Atenção, Agente Espacial. Sua jornada de exploração está em risco de ser
          encerrada. Nossos sensores indicam que você ainda tem 9 planetas, 5 galáxias e incontáveis estrelas a
          descobrir.
          <br /><br />Confirme: quer mesmo desativar sua nave-mãe?
        </p> 

        <div className="opcoes-confirmacao">
          <button type="button" className="botao-confirmacao botao-sim">Sim</button>
          <button type="button" className="botao-confirmacao botao-nao" id="btn-nao" onClick={() => navigate("/app/extras-menu")}>Não</button>
        </div>
        
      </div>
    </div>
    <button type="button" className="botao-retorno-home" aria-label="Voltar para a página inicial" 
    onClick={() => navigate("/app/extras-menu")}>
      <img src="/imagens/casinha.png" className="icone-home" alt="Ícone de casa, para retornar ao menu principal" id="btn-voltar-apagar-conta" />
    </button> 
  </section>
    )
}
export default DeleteAccount; 
import { useNavigate } from "react-router-dom";

function Phoenix() {
    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-fenix">
    <div className="space-background">
      <div className="stars"></div>
    </div>
    <div className="info-card">
    <img src="/imagens/fenix.png" alt="Constelação Fênix" class="celestial-image" />
    <h3 className="titulo-missao">Constelação de Fênix</h3>
    <div className="jornada-projeto">
    <p className="descricao">No vasto céu do Hemisfério Sul, a constelação Fênix é uma pequena, mas distinta, formação estelar. Nomeada em homenagem a uma figura lendária que representa a renovação, esta constelação foi introduzida no final do século XVI pelo astrônomo Petrus Plancius. 
        <br />
      A Fênix, com suas estrelas, simboliza a capacidade de ressurgir e continuar a jornada. É um lembrete para todos os exploradores de que, mesmo em meio à escuridão, a luz da descoberta está sempre presente.
      <br />
      Observar a Fênix no céu noturno é uma missão que convida a uma reflexão sobre a capacidade de seguir em frente, uma história de perseverança contada pelas estrelas para os verdadeiros agentes espaciais.</p>
    </div>
  </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-fenix"
    onClick={() => navigate("/app/hemisferio-sul")}>Voltar</button>
  </section>
    )
}
export default Phoenix;
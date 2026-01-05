import { useNavigate } from "react-router-dom";

function LunarEclipse() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-eclipse-lunar">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/eclipse-lunar.png" alt="Eclipse Lunar" className="celestial-image" />
    
      <h3 className="titulo-missao">Eclipse Lunar</h3>
      <div className="jornada-projeto">
      <p className="descricao">
        Um Eclipse Lunar é um dos fenômenos mais fascinantes do nosso céu. Ele ocorre quando a Terra passa entre o Sol e a Lua. <strong>Durante esse evento, a sombra da Terra cobre a Lua</strong>, fazendo-a desaparecer ou adquirir um tom avermelhado. <strong>Este evento só acontece durante a fase da Lua Cheia, ocorrendo geralmente de uma a três vezes por ano.</strong>
        <br />
        Ao contrário de um eclipse solar, um eclipse lunar pode ser visto de qualquer lugar do lado noturno da Terra. É um fenômeno que transforma a lua em uma esfera de tonalidades místicas, uma prova de que a nossa própria sombra pode criar um dos espetáculos mais fascinantes do céu.
        <br />
        Observar um eclipse lunar é uma missão que te conecta a um fenômeno de pura escala e beleza, onde a nossa própria presença no espaço é refletida no brilho de outro mundo.
      </p>
    </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-eclipse-lunar"
    onClick={() => navigate("/app/eclipses")}>Voltar</button>
  </section>
    )
}
export default LunarEclipse;
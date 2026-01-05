import { useNavigate } from "react-router-dom";

function SolarEclipse() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-eclipse-solar">
    <div className="space-background">
        <div className="stars"></div>
        </div>
   <div className="info-card">
    <img src="/imagens/eclipse-solar.png" alt="Eclipse Solar" className="celestial-image" />
    
      <h3 className="titulo-missao">Eclipse Solar</h3>
      <div className="jornada-projeto">
      <p className="descricao">
        Um Eclipse Solar é um dos fenômenos mais espetaculares que um explorador pode presenciar. <strong>Ele ocorre quando a Lua passa entre o Sol e a Terra</strong>, bloqueando completamente ou parcialmente a luz solar e projetando sua sombra sobre o nosso planeta. <strong>Este evento só acontece durante a fase da Lua Nova.</strong>
        <br />
        Este alinhamento cósmico perfeito transforma o dia em uma escuridão momentânea, um espetáculo inesquecível. Observar um eclipse solar é uma missão que te conecta com a mecânica do universo, uma prova visual de que, com a posição certa, até um pequeno satélite pode cobrir a maior de todas as estrelas.
      </p>
      </div>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-eclipse-solar"
    onClick={() => navigate("/app/eclipses")}>Voltar</button>
  </section>
    )
}
export default SolarEclipse;
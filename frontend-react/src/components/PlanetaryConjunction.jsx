import { useNavigate } from "react-router-dom";

function PlanetaryConjunction() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-conjuncao">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/conjuncao.png" alt="Conjunção Planetária" className="celestial-image" />
    
      <h3 className="titulo-missao">Conjunção Planetária</h3>
      <p className="descricao">
        <strong>Uma conjunção planetária é onde dois ou mais planetas parecem se alinhar e ficar muito próximos no céu noturno</strong>. Embora ainda estejam a milhões de quilômetros de distância, o espetáculo de luz é fascinante. A "Grande Conjunção" de Júpiter e Saturno é um dos exemplos mais famosos e visualmente impressionantes.
        <br></br>
        Observar uma conjunção é como testemunhar uma dança cósmica, onde os planetas se aproximam em uma coreografia perfeita. É um lembrete visual da vastidão e da precisão do nosso sistema solar, um momento raro que une os gigantes do céu em uma única cena.
        <br></br>
        Evento que convida os exploradores a se conectar com o movimento e a beleza do nosso universo.
      </p>
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-conjuncao-planetaria"
    onClick={() => navigate("/app/supermoon-and-conjunctions")}>Voltar</button>
  </section>
    )
} 
export default PlanetaryConjunction;
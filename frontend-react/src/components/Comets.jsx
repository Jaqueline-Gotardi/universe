import { useNavigate } from "react-router-dom";

function Comets() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-cometas">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/cometas.png" alt="Cometas" className="celestial-image" />
      <h3 className="titulo-missao">Cometas</h3>
      <p className="descricao">
        Os cometas são objetos fascinantes, verdadeiras "bolas de neve sujas" compostas por gelo, poeira e rocha. <strong>Eles viajam por longas órbitas a partir das regiões mais frias e distantes do nosso sistema solar. O espetáculo de um cometa acontece quando ele se aproxima do Sol e o calor faz com que seu gelo evapore, criando uma vasta atmosfera e uma cauda brilhante de gás e poeira.</strong>
        <br />
        A cauda de um cometa pode se estender por milhões de quilômetros, sempre apontando na direção oposta ao Sol. Eles são mensageiros das partes mais primitivas do nosso sistema solar, um lembrete de sua origem gelada.
        <br />
        Observá-los te conecta a um pedaço de história cósmica em movimento, um verdadeiro viajante que nos visita de tempos em tempos.
      </p>
    
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-cometas"
    onClick={() => navigate("/app/comets-and-others")}>Voltar</button>
  </section>
    )
} 
export default Comets;
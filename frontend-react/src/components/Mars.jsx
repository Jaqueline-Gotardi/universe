import { useNavigate } from "react-router-dom";

function Mars() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-marte">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/marte.png" alt="Marte" className="celestial-image" />
      <h3 className="titulo-missao">Marte</h3>
      <p className="descricao">
        Marte é o quarto planeta a partir do Sol e é amplamente conhecido como o "planeta vermelho" por sua coloração
        avermelhada, causada pela ferrugem de minerais ricos em ferro em sua superfície.
        <br />É um planeta rochoso, com imensos desfiladeiros, vastas planícies e as maiores montanhas vulcânicas do nosso
        sistema.
        <br />Apesar de sua atmosfera ser fina e fria, Marte possui calotas polares de gelo e evidências de que já abrigou
        água em seu passado, o que o torna um dos principais alvos de busca por vida no espaço.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-marte"
    onClick={() => navigate("/app/planetary-information")}>Voltar</button>
  </section>
    )
}
export default Mars;
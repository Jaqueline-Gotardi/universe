import { useNavigate } from "react-router-dom";

function Venus() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-venus">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/venus.png" alt="Venus" className="celestial-image" />
      <h3 className="titulo-missao">Vênus</h3>
      <p className="descricao">
        Vênus é o segundo planeta a partir do Sol e o mais próximo da Terra. É conhecido como a "estrela da manhã" ou
        "estrela da tarde" por seu brilho intenso no céu.
        <br />Apesar de ser vizinho da Terra, sua atmosfera densa, composta principalmente de dióxido de carbono, cria um
        efeito estufa extremo, tornando-o o planeta mais quente do nosso sistema. A temperatura em sua superfície é
        suficiente para derreter chumbo.
        <br />Vênus é também único por girar em sentido horário em seu eixo, o oposto da maioria dos outros planetas.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-venus"
    onClick={() => navigate("/app/planetary-information")}>Voltar</button>
  </section>
    )
}
export default Venus;
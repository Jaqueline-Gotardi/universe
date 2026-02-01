import { useNavigate } from "react-router-dom";

function Saturn() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-saturno">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/saturno.png" alt="Saturno" className="celestial-image" />
      <h3 className="titulo-missao">Saturno</h3>
      <p className="descricao">
        Saturno é o sexto planeta a partir do Sol, e o segundo maior do nosso Sistema Solar. Ele é famoso por seu
        espetacular sistema de anéis, que o torna um dos objetos mais bonitos e facilmente reconhecíveis no espaço.
        <br />Os anéis são compostos por bilhões de partículas de gelo e rocha, que variam de pequenos grãos de poeira a
        pedaços do tamanho de montanhas.
        <br />Saturno é um gigante gasoso, com uma atmosfera de hidrogênio e hélio. Além dos anéis, ele possui dezenas de
        luas, sendo Titã a maior delas e a única no Sistema Solar com uma atmosfera densa.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-saturno"
    onClick={() => navigate("/app/planetary-information")}>Voltar</button>
  </section>
    )
}
export default Saturn;
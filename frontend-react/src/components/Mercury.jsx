import { useNavigate } from "react-router-dom";

function Mercury() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-mercurio">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/mercurio.png" alt="Mercurio" className="celestial-image" />
      <h3 class="titulo-missao">Mercurio</h3>
      <p class="descricao">
        Sua superfície é um ambiente inóspito, repleto de crateras de impacto, o que o faz parecer muito com a Lua. A
        ausência de uma atmosfera significativa faz com que as temperaturas variem drasticamente, podendo chegar a mais
        de 400°C durante o dia e cair para centenas de graus negativos à noite.
        <br />Curiosamente, Mercúrio é o planeta que orbita o Sol mais rapidamente, completando uma volta em apenas 88
        dias terrestres.
      </p>
    </div>
    <button type="button" class="botao-voltar-planeta" id="btn-voltar-mercurio"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Mercury;
import { useNavigate } from "react-router-dom";

function Earth() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-terra" style={{position:"relative"}}>
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
      <div className="terra-lua-container">
        <img src="/imagens/terra.png" className="celestial-image" alt="Terra" />
        <img src="/imagens/lua.png" className="celestial-image" alt="Lua" />
      </div>
      <h3 className="titulo-missao">Terra</h3>
      <p className="descricao">
        A Terra é o terceiro planeta a partir do Sol e o único lugar no universo onde a vida existe.
        <br />Composta em sua maioria por água, nossa casa é um planeta dinâmico, com continentes, oceanos, vastas
        florestas, cadeias de montanhas e complexos sistemas climáticos.
        <br />A atmosfera terrestre é essencial, pois nos protege da radiação solar e de meteoroides, além de manter uma
        temperatura estável que permite a existência de água líquida em sua superfície.
        <br />A Terra possui um satélite natural, a Lua, que influencia as marés e desempenha um papel importante na
        estabilização do nosso planeta.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-terra"
    onClick={() => navigate("/app/planetary-menu")}>Voltar</button>
  </section>
    )
}
export default Earth;
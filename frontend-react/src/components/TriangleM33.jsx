import { useNavigate } from "react-router-dom";

function TriangleM33() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-triangulo">
    <div className="space-background">
      <div className="stars"></div>
    </div>
    <div className="info-card">
    <img src="/imagens/galaxia-triangulo.png" alt="Galáxia do Triângulo (M33)" className="celestial-image" />
      <h3 className="titulo-criadores">Galáxia do Triângulo (M33)</h3>
      <p className="descricao">
        A Galáxia do Triângulo <strong>é a terceira maior da nossa família de galáxias e uma das maiores fábricas de estrelas do universo local.</strong> Ela é uma galáxia espiral menor e compacta, com um diâmetro de cerca de 60.000 anos-luz e cerca de 40 bilhões de estrelas. Sua alta taxa de nascimento de novas estrelas a torna um dos alvos mais fascinantes para a sua missão de exploração.
        <br></br>
        Observar isto te conecta com o universo em ação, criando e evoluindo diante de seus olhos.
      </p>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-triangulo"
    onClick={() => navigate("/app/famous-galaxies")}>Voltar</button>
  </section>
    )
}
export default TriangleM33;
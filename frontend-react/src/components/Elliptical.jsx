import { useNavigate } from "react-router-dom";

function Elliptical() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-eliptica">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/galaxia-eliptica.png" alt="Galáxia Elíptica" className="celestial-image" />
    
      <h3 className="titulo-criadores">Galáxia Elíptica</h3>
      <p className="descricao">
        Galáxias elípticas <strong>são galáxias com formas que variam de esféricas a ovais, compostas em sua maioria por estrelas antigas.</strong> Elas não possuem os braços espirais ou o disco de gás, o que significa que a formação de novas estrelas já cessou. As maiores delas, contendo trilhões de estrelas, são as galáxias mais massivas e antigas do universo.
        <br></br>
        Observar isto te conecta com a história de estrelas antigas e maduras que formam os vastos e calmos impérios do cosmos.
      </p>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-eliptica"
    onClick={() => navigate("/app/type-galaxies")}>Voltar</button>
  </section>
    )
}
export default Elliptical;
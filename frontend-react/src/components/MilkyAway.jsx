import { useNavigate } from "react-router-dom";

function MilkAway() {
    
    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-via-lactea">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/galaxia-via-lactea.png" alt="Galáxia Via Láctea" className="celestial-image" />
    
      <h3 className="titulo-criadores">Via Láctea</h3>
      <p className="descricao">
        A Via Láctea <strong>é a galáxia espiral onde o nosso Sistema Solar reside.</strong> Ela tem um diâmetro de cerca de 100.000 anos-luz e contém de 100 a 400 bilhões de estrelas, sendo o nosso Sol apenas uma delas. O nosso Sistema Solar está localizado em um dos seus braços espirais, o que nos coloca em um ponto privilegiado para explorar o nosso próprio lar cósmico.
        <br />
        Observar isto te conecta com a sua missão mais importante: desvendar os segredos de nossa própria galáxia.
      </p>
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-via-lactea"
    onClick={() => navigate("/app/famous-galaxies")}>Voltar</button>
  </section>
    )
}

export default MilkAway;
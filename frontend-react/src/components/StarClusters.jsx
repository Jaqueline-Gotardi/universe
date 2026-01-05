import { useNavigate } from "react-router-dom";

function StarClusters() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-agrupamentos">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/agrupamentos-estelares.png" alt="Agrupamentos Estelares" className="celestial-image" />
    
      <h3 className="titulo-missao">Agrupamentos Estelares</h3>
      <p className="descricao">
        Aglomerados estelares <strong>são grupos de estrelas unidas pela força da gravidade</strong>, formando verdadeiras "cidades" no cosmos. Observar esses agrupamentos é como ver a vida e a história de famílias de estrelas.
        <br />
        Aglomerados Abertos: São grupos de estrelas mais jovens e dispersas, que se formaram recentemente na mesma nuvem de gás e poeira. Eles contêm dezenas a centenas de estrelas, como o famoso aglomerado das Plêiades.
        <br />
        Aglomerados Globulares: São aglomerados mais velhos e densos, contendo milhares, e até milhões, de estrelas antigas. Eles formam uma densa esfera de sóis, um espetáculo de luz para se maravilhar.
        <br />
        Observar isto te conecta com uma união de populações cósmicas.
      </p> 
    
    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-agrupamentos"
    onClick={() => navigate("/app/comets-and-others")}>Voltar</button>
  </section>
    )
}
export default StarClusters;
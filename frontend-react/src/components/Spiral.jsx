import { useNavigate } from "react-router-dom";

function Spiral() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-espiral">
    <div className="space-background">
      <div className="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/galaxia-espiral.png" alt="Galáxia Espiral" className="celestial-image" />
    
      <h3 className="titulo-criadores">Galáxia Espiral</h3>
      <p className="descricao">
        Galáxias espirais <strong>são galáxias que possuem um disco achatado e giratório com braços que se estendem para fora de um centro brilhante, onde reside um buraco negro supermassivo.</strong> Cerca de 70% das galáxias no universo são desse tipo. Nos braços espirais é onde a magia acontece: são as maternidades cósmicas onde novas estrelas estão nascendo a partir de vastas nuvens de gás e poeira.
        <br />
        Observar isto te conecta com a história de estrelas jovens e vibrantes que formam estruturas majestosas, como os braços da nossa própria Via Láctea.
      </p>
    
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-espiral"
    onClick={() => navigate("/app/type-galaxies")}>Voltar</button>
  </section>
    )
}
export default Spiral;
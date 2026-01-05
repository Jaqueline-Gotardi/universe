import { useNavigate } from "react-router-dom";

function TypeGalaxies() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-irregular">
    <div className="space-background">
      <div class="stars"></div>
    </div>
   <div className="info-card">
    <img src="/imagens/galaxia-irregular.png" alt="Galáxia Irregular" className="celestial-image" />
    
      <h3 className="titulo-criadores">Galáxia Irregular</h3>
      <p className="descricao">
        Galáxias irregulares <strong>não possuem uma forma definida, parecendo 'nuvens' de estrelas, gás e poeira. </strong>Essa aparência caótica é muitas vezes causada por colisões galácticas ou interações gravitacionais, que dão origem a uma intensa formação estelar. Embora representem apenas cerca de 20% das galáxias conhecidas, elas são cruciais para a ciência, pois seu formato caótico oferece pistas sobre como as galáxias evoluem e interagem ao longo do tempo.
        <br></br>
        Observar isto te conecta com a energia e o dinamismo do universo, mostrando que mesmo no caos, a criação de novas estrelas continua.
      </p>
    
    </div>
    <button type="button" className="botao-opcao-menu botao-voltar" id="btn-voltar-irregular"
    onClick={() => navigate("/app/type-galaxies")}>Voltar</button>
  </section>
    )
}
export default TypeGalaxies;
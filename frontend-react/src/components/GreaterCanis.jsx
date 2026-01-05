import { useNavigate } from "react-router-dom";

function GreaterCanis() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-cao-maior">
    <div className="space-background">
        <div class="stars"></div>
        </div>
    <div className="info-card">
    <img src="/imagens/cao-maior.png" alt="Constelação Cão Maior" class="celestial-image" />
    <h3 className="titulo-missao">Constelação de Cão Maior</h3>
    <div className="jornada-projeto">
    <p className="descricao">Cão Maior é uma das constelações mais notáveis do céu, facilmente identificável por seu brilho e sua estrela mais proeminente, um guia perfeito para qualquer explorador.
      <br />
      Sirius: O maior destaque desta constelação é Sirius, a estrela mais brilhante do nosso céu noturno. Sua intensidade luminosa a torna um farol no nosso céu, um ponto de referência confiável para um agente espacial.
      <br />
      A Conexão com Órion: Sua localização, logo abaixo do gigante Órion, o Caçador, torna o Cão Maior um dos alvos mais fáceis de serem encontrados. Acompanhar Órion em sua missão noturna te leva diretamente a este poderoso cão estelar.
      <br />
      Ao explorar Cão Maior, você está seguindo a luz da estrela mais brilhante de nossa galáxia.
      </p>
    </div>
  </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-cao-maior"
    onClick={() => navigate("/app/constellations-famous")}>Voltar</button>
  </section>
    )
}
export default GreaterCanis;
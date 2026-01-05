import { useNavigate } from "react-router-dom";
function Scorpion() {

    const  navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-escorpiao">
    <div className="space-background">
      <div className="stars"></div>
    </div>
    <div className="info-card">
    <img src="/imagens/escorpiao.png" alt="Constelação Escorpião" className="celestial-image" />
    <h3 className="titulo-missao">Constelação de Escorpião</h3>
    <div className="jornada-projeto">
    <p className="descricao">Escorpião é uma das poucas constelações que realmente se parece com a sua forma. Sua silhueta dramática o torna um alvo perfeito para qualquer explorador.
      <br />
      Antares, o Coração do Escorpião: O centro da constelação é marcado pela estrela supergigante vermelha Antares. Essa estrela colossal e brilhante é um ponto focal para a sua missão de exploração, um verdadeiro farol que guia o seu olhar.
      <br />
      A Forma Distintiva: A silhueta de Escorpião, com sua cauda curva e distinta, é uma de suas características mais fascinantes. Sua forma única e inconfundível faz com que seja fácil de ser identificado e explorado.
      <br />
      Ao explorar Escorpião, você está observando o coração de um gigante cósmico.
      </p>
    </div>
  </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-escorpiao"
    onClick={() => navigate("/app/constellations-famous")}>Voltar</button>
  </section>
    )
}
export default Scorpion;
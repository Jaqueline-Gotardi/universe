import { useNavigate } from "react-router-dom";

function Jupiter() {

    const navigate = useNavigate();

    return (
    <section className="tela-eventos-detalhe" id="detalhe-jupiter">
    <div className="aurora-background"></div>
    <div className="info-card" style={{position:"relative", zIndex:"1"}}>
    <img src="/imagens/jupiter.png" alt="Jupiter" className="celestial-image" />
      <h3 className="titulo-missao">Júpiter</h3>
      <p className="descricao">
        Júpiter, o maior planeta do Sistema Solar, um gigante gasoso com mais que o dobro da massa de todos os outros
        planetas juntos.
        <br />Possui uma marcante faixas de nuvens de cores vibrantes, causadas por tempestades e ventos extremamente
        fortes. A mais famosa delas é a Grande Mancha Vermelha, uma tempestade colossal, maior que a Terra, que existe
        há séculos.
        <br />Júpiter tem dezenas de luas, incluindo as quatro grandes luas galileanas (Io, Europa, Ganímedes e Calisto),
        que são visíveis com pequenos telescópios. Ele atua como um "aspirador de pó" cósmico, protegendo o sistema
        interior de cometas e asteroides.
      </p>
    </div>
    <button type="button" className="botao-voltar-planeta" id="btn-voltar-jupiter"
    onClick={() => navigate("/app/planetary-information")}>Voltar</button>
  </section>
    )
}
export default Jupiter;
import { useNavigate } from "react-router-dom";

function ExtrasMenu() {

    const navigate = useNavigate();

    return (
    <section className="tela-principal" id="tela-info-extras"
    style={{justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-perfil"
      onClick={() => navigate("/app/profile")}>Perfil</button>

      <button type="button" className="btn-cosmic" id="btn-criadores">Criadores</button>

      <button type="button" className="btn-cosmic" id="btn-apagar-conta">Apagar conta</button>

    </div>
    <button type="button" className="botao-voltar botao-opcao-menu" id="btn-voltar-info-extras"
    onClick={() => navigate("/app/menu")}>Voltar</button>
  </section> 
    )
}
export default ExtrasMenu;


/* outra coisa interessante no react: quando vamos colocar propriedades do css, como "justify-content", deve-se escrever juntos e não com "-" no meio */
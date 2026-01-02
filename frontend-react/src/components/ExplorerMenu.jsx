import "../style/tela-menu.css"
import "../style/tela-navegacao.css"
import "../style/criadores.css"


function ExplorerMenu({onClicarMenu}) {

    return (
        <section className="tela-menu" id="menu">
    <div className="background-menu menu-bg">
      <div className="stars-menu"></div>
      <div className="planets-menu"></div>
    </div> 
    <div className="faixa" id="faixa">
    <div className="barra">
      <input type="text" id="campo-pesquisa" placeholder="Pesquisar no Universo..." name="Nome" />
      <img src="./imagens/lupa.jpg" className="lupa" id="lupa-pesquisa" />
    </div>
    <div class="informacoes-extras">
      <button type="button" className="btn-cosmic" id="btn-menu" onClick={() => onClicarMenu('menu')}>Menu</button>
    </div>
    <button type="button" className="botao-retorno-home" aria-label="Voltar para a página inicial">
      <img src="./imagens/casinha.png" className="icone-home" alt="Ícone de casa, para retornar ao menu principal" id="btn-voltar-menu" />
    </button> 
    </div>
    <div id="mostrar-pesquisa"></div>
  </section>
    );
}
export default ExplorerMenu; 
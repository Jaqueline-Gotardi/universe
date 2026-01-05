import { useNavigate } from "react-router-dom";

import "../style/criadores.css"

function Creators() {

    const navigate = useNavigate();

    return (
    <section className="tela-criadores" id="detalhe-criadores">
  <div className="background-overlay"></div>
  <h1 className="titulo-criadores">Agentes Especiais do Projeto</h1>
  <div className="container-criadores">
    
    <div className="card">
      <div className="imagem-perfil">
        <img src="/imagens/Giliany.jpg" alt="Foto de Perfil de Giliany" />
      </div>
      <div className="informacoes-perfil">
        <h2 className="nome-criador">Giliany Do Carmo</h2>
        <p className="role-projeto">Líder do Protótipo Original (2022)</p>
        <ul className="contribuicoes">
          <li>
            <span className="marcador-neon"></span>
            Líder da criação do protótipo original do projeto em 2022 (tema infantil), como uma atividade escolar.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Desenvolveu a estrutura de design e UI/UX do protótipo infantil.
          </li>
        </ul>
      </div>
    </div>

    <div className="card">
      <div className="imagem-perfil">
        <img src="/imagens/jaque.jpg" alt="Foto de Perfil de Jaqueline" />
      </div>
      <div className="informacoes-perfil">
        <h2 className="nome-criador">Jaqueline Gotardi</h2>
        <p className="role-projeto">Líder do Protótipo e Designer (2025)</p>
        <ul className="contribuicoes">
          <li>
            <span className="marcador-neon"></span>
            Liderou a criação do protótipo original do projeto em 2022 (tema infantil), como uma atividade escolar.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Liderou a evolução do design, transformando a estética original para uma interface moderna e profissional.
          </li>
          <li>
            <span className="marcador-neon"></span>
            Atualmente responsável pela codificação e implementação de novas funcionalidades.
          </li>
        </ul>
      </div>
    </div> 
  </div>
  <button type="button" className="botao-retorno-home" aria-label="Voltar para a página inicial" onClick={() => navigate("/app/extras-menu")}>
    <img src="/imagens/casinha.png" className="icone-home" alt="Ícone de casa, para retornar ao menu principal" id="btn-voltar-criadores" />
  </button>
</section>
    )
}
export default Creators;
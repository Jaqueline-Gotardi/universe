import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    return (
    <section className="tela-perfil" id="tela-perfil-usuario">
    <div className="container-perfil">
  
      <div className="perfil-visualizacao" id="secao-visualizacao">
        <div className="header-perfil">
          <h2 className="titulo-secao">Perfil de Agente Espacial</h2>
          <button type="button" className="btn-editar-perfil" id="btn-editar-perfil"
          onClick={() => navigate("/app/edit-profile")}>Editar</button>
        </div>
  
        <div className="conteudo-perfil">
          <div className="perfil-foto">
            <img src="/imagens/avatar-padrao.png" alt="Foto de perfil" id="foto-perfil-img" className="foto-perfil" />
          </div> 
  
          <div className="perfil-info">
            <p className="info-item">
              <span className="label">Nome:</span>
              <span className="valor" id="perfil-nome">Nome do Agente</span>
            </p>
            <p className="info-item">
              <span className="label">Sobre mim:</span>
              <span className="valor" id="perfil-sobre">Conte um pouco sobre você...</span>
            </p>
            <p className="info-item">
              <span className="label">Interesses:</span>
              <span className="valor" id="perfil-interesses">Ex: Astronomia</span>
            </p>
          </div>
        </div>
        <button type="button" className="botao-voltar" id="btn-voltar-perfil"
        onClick={() => navigate("/app/extras-menu")}>Voltar</button>
      </div>
  
      <div id="secao-edicao" style={{display: "none"}}>
        <form className="form-perfil">

          <div className="campo-foto-edicao">

    <img src="..." alt="Foto de perfil atual" className="foto-perfil-preview" id="foto-perfil-preview-edicao" />
    
    <div className="btn-opcoes-perfil">
    <button type="button" id="btn-escolher-avatars">Escolher avatar</button>
    <button type="button" id="btn-escolher-galeria">Trocar Foto (Upload)</button>
    </div>
    
    <input type="file" id="input-foto-perfil-edicao" accept="image/*" style={{display: "none"}} />

    <div className="galeria-agentes-espaciais" id="galeria-agentes-espaciais" style={{display: "none"}}>
      
      <button type="button" className="btn-fechar-galeria" id="btn-fechar-galeria">X</button>

      <div className="galeria-grid-avatares">
        <div className="avatar-item">
            <img src="/public/imagens/avatar-phoenix.png" alt="Avatar Phoenix" className="avatar-preview" />
        </div>
        <div className="avatar-item">
            <img src="/public/imagens/avatar-apollo.png" alt="Avatar Apollo" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-luna (1).png" alt="Avatar Luna" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-orion.png" alt="Avatar Orion" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nova.png" alt="Avatar Nova" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-ace.png" alt="Avatar Ace" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-astra.png" alt="Avatar Astra" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nexus.png" alt="Avatar Nexus" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-stella.png" alt="Avatar Stella" className="avatar-preview" />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-wil.png" alt="Avatar Will" className="avatar-preview" />
        </div>
        </div>
        
        </div>  
          </div> 
  
          <div className="campo-input">
            <label htmlFor="nome-agente-edicao">Nome de Agente Espacial</label>
            <input type="text" id="nome-agente-edicao" placeholder="Digite seu nome aqui" />
          </div>
  
          <div className="campo-input">
            <label htmlFor="sobre-voce-edicao">Sobre você</label>
            <textarea id="sobre-voce-edicao" placeholder="Conte um pouco sobre sua missão..." rows="3"></textarea>
          </div>
  
          <div className="campo-input">
            <label htmlFor="interesses-edicao">Interesses</label>
            <input type="text" id="interesses-edicao" placeholder="Ex: Astronomia" />
          </div>
  
          <div className="secao-seguranca">
            <button type="button" className="btn-troca-senha" id="btn-troca-senha">Trocar senha</button>
          </div>

          <div className="botoes-edicao">
            <button type="submit" className="btn-salvar" id="btn-salvar-perfil">Salvar Alterações</button>
            <button type="button" className="btn-cancelar" id="btn-cancelar-perfil">Cancelar</button>
          </div>

        </form>

      </div>
    </div>
  </section>
    )
}
export default Profile;
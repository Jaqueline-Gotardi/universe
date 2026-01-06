import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Profile() {

    const navigate = useNavigate();

    //O estado que controla "qual canal está passando"
    const [ activeSection, setActiveSection ] = useState("view");
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
    const fileInputRef = useRef(null);

    const [userData, setUserData] = useState({
      avatar: '',
      username: '',
      bio: '',
      interests: '',
  });

    const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Dados salvos:', userData);
    setActiveSection('view'); //Volta para a visualização após salvar
  };

  const handleAvatarSelect = avatarSrc => {
    setUserData(prevData => ({
      ...prevData,
      avatar: avatarSrc,
    }))
    console.log("avatar selecionado:")
  }

    return (
    <section className="tela-perfil" id="tela-perfil-usuario">
    <div className="container-perfil">
  

  {activeSection === "view" && (
      <div className="perfil-visualizacao" id="secao-visualizacao">
        <div className="header-perfil">
          <h2 className="titulo-secao">Perfil de Agente Espacial</h2>
          <button type="button" className="btn-editar-perfil" id="btn-editar-perfil"
          onClick={() => setActiveSection("edit")}>Editar</button>
        </div> 
  
        <div className="conteudo-perfil">
          <div className="perfil-foto">
            <img src={userData.avatar} alt="Foto de perfil" id="foto-perfil-img" className="foto-perfil" />
          </div> 
  
          <div className="perfil-info">
            <p className="info-item">
              <span className="label">Nome:</span>
              <span className="valor" id="perfil-nome">{userData.username}</span>
            </p>
            <p className="info-item">
              <span className="label">Sobre mim:</span>
              <span className="valor" id="perfil-sobre">{userData.bio}</span>
            </p>
            <p className="info-item">
              <span className="label">Interesses:</span>
              <span className="valor" id="perfil-interesses">{userData.interests}</span>
            </p>
          </div>
        </div>
        <button type="button" className="botao-voltar" id="btn-voltar-perfil"
        onClick={() => navigate("/app/extras-menu")}>Voltar</button>
      </div>
  )}
  
  {activeSection === "edit" && (
      <div id="secao-edicao">
        <form className="form-perfil" onSubmit={handleSaveProfile}>

          <div className="campo-foto-edicao">
 
    <img src={userData.avatar} alt="Foto de perfil atual" className="foto-perfil-preview" id="foto-perfil-preview-edicao" />
    
    <div className="btn-opcoes-perfil">

    <button type="button" id="btn-escolher-avatars"
    onClick={() => setIsGalleryOpen(true)}>Escolher avatar</button>

    <button type="button" id="btn-escolher-galeria"
    onClick={() => fileInputRef.current.click()}>Trocar Foto (Upload)</button>
    </div>
    
    <input type="file" id="input-foto-perfil-edicao" accept="image/*" ref={fileInputRef} style={{display: "none"}} />


    {isGalleryOpen  && (
    <div className="galeria-agentes-espaciais" id="galeria-agentes-espaciais" >
      
      <button type="button" className="btn-fechar-galeria" id="btn-fechar-galeria"
      onClick={() => setIsGalleryOpen(false)}>X</button>

      <div className="galeria-grid-avatares">
        <div className="avatar-item">
            <img src="/public/imagens/avatar-phoenix.png" alt="Avatar Phoenix" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-phoenix.png")} />
        </div>
        <div className="avatar-item">
            <img src="/public/imagens/avatar-apollo.png" alt="Avatar Apollo" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-apollo.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-luna (1).png" alt="Avatar Luna" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-luna (1).png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-orion.png" alt="Avatar Orion" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens//avatar-orion.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nova.png" alt="Avatar Nova" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens//avatar-nova.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-ace.png" alt="Avatar Ace" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens//avatar-ace.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-astra.png" alt="Avatar Astra" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-astra.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nexus.png" alt="Avatar Nexus" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-nexus.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-stella.png" alt="Avatar Stella" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-stella.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-wil.png" alt="Avatar Will" className="avatar-preview" onClick={() => handleAvatarSelect("/public/imagens/avatar-wil.png")} />
        </div>
        </div>
        
        </div>  
        )}
  
          </div> 
  
          <div className="campo-input">
            <label htmlFor="nome-agente-edicao">Nome de Agente Espacial</label>
            <input type="text" id="nome-agente-edicao" placeholder="Digite seu nome aqui"
            value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} required />
          </div>
  
          <div className="campo-input">
            <label htmlFor="sobre-voce-edicao">Sobre você</label>
            <textarea id="sobre-voce-edicao" placeholder="Conte um pouco sobre sua missão..." rows="3"
            value={userData.bio} onChange={(e) => setUserData({...userData, bio: e.target.value})} required >
           </textarea>
          </div>
  
          <div className="campo-input">
            <label htmlFor="interesses-edicao">Interesses</label>
            <input type="text" id="interesses-edicao" placeholder="Ex: Astronomia"
            value={userData.interests} onChange={(e) => setUserData({...userData, interests: e.target.value})} required />
          </div>
  
          <div className="secao-seguranca">
            <button type="button" className="btn-troca-senha" id="btn-troca-senha"
            onClick={() => navigate("/app/change-password")}>Trocar senha</button>
          </div>

          <div className="botoes-edicao">

            <button type="submit" className="btn-salvar" id="btn-salvar-perfil"
            onClick={() => (setActiveSection("view"))}>Salvar Alterações</button>

            <button type="button" className="btn-cancelar" id="btn-cancelar-perfil"
            onClick={() => (setActiveSection("view"))}>Cancelar</button>
          </div>

        </form>

      </div>
  )}
    </div>
  </section>
    )
}
export default Profile;
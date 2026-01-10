import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

//avatar padrão em construído em código SVG
const default_avatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle />
  <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 17.2C10.1 17.2 8.4 16.3 7.3 14.9C7.3 13.3 10.4 12.4 12 12.4C13.6 12.4 16.7 13.3 16.7 14.9C15.6 16.3 13.9 17.2 12 17.2Z" fill="#94a3b8"/>
</svg>
`)}`;
 
function Profile() {

    const navigate = useNavigate();

    //O estado que controla "qual canal está passando"
    const [ activeSection, setActiveSection ] = useState("view");
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
    const fileInputRef = useRef(null);

    //constante para guardar temporariamente os dados do perfil durante a edição
    const [ tempUserData, setTempUserData ] = useState({
      avatar: '',
      username: '',
      bio: '',
      interests: '',
    })

    //constantes para guardar os dados oficiais do perfil
    const [userData, setUserData] = useState({
      avatar: default_avatar,
      username: '',
      bio: '',
      interests: '',
  });

  //função para salvar os dados do perfil
    const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Dados salvos:', userData);

    setUserData(tempUserData); //pegando os dados temporários e jogando no oficial
    setIsGalleryOpen(false),
    setActiveSection('view'); //volta para a visualização após salvar
  };

  //se fizer apenas setUserData({ avatar: avatarSrc }), o React vai "apagar" o nome, a bio e os interesses, e vai deixar só o avatar lá dentro 
  const handleAvatarSelect = avatarSrc => { 
    setTempUserData(prev => ({
      ...prev,    // O ...prevData serve para dizer: "Mantenha tudo o q já existe e mude apenas o avatar 
      avatar: avatarSrc,
    }))
    //console.log("avatar selecionado:")
  }

  //função para upload de arquivo
    const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if(file) {
      const reader = new FileReader();

      //quando a leitura do arquivo for feita, atualiza o estado com a imagem carregada
      reader.onload = () => {
        setTempUserData(dataProfile => ({
          ...dataProfile,
          avatar: reader.result,
        }))
      }
      reader.readAsDataURL(file);
    }
  }

  //função para remover a foto de perfil (voltar ao avatar padrão)
  const handleRemovePhoto = () => {
    setTempUserData(prev => ({
      ...prev,
      avatar: default_avatar,
    }))
  } 

  //função para cancelar as edições de perfil
   const handleCancelEdit = () => {
        setTempUserData(userData); 
        setIsGalleryOpen(false), //fechar galeria
        setActiveSection("view");//trocar seção
    };

    return (
    <section className="tela-perfil" id="tela-perfil-usuario">
    <div className="container-perfil">
  
  {/* // Seção de visualização do perfil */}
  {activeSection === "view" && (
      <div className="perfil-visualizacao" id="secao-visualizacao">
        <div className="header-perfil">
          <h2 className="titulo-secao">Perfil de Agente Espacial</h2>
          <button type="button" className="btn-editar-perfil" id="btn-editar-perfil"
          onClick={() => {setTempUserData(userData); setActiveSection("edit")}}>Editar</button>
        </div> 
  
        <div className="conteudo-perfil">
          <div className="perfil-foto">
            <img src={userData.avatar || default_avatar} alt="Foto de perfil" id="foto-perfil-img" className="foto-perfil" />
          </div> 
  
          <div className="perfil-info">
            <p className="info-item">
              <span className="label">Nome:</span>
              <span className="valor" id="perfil-nome">{userData.username || "Agente sem nome"}</span>
            </p>
            <p className="info-item">
              <span className="label">Sobre mim:</span>
              <span className="valor" id="perfil-sobre">{userData.bio || "Sem bio definida"}</span>
            </p>
            <p className="info-item">
              <span className="label">Interesses:</span>
              <span className="valor" id="perfil-interesses">{userData.interests || "Sem informação"}</span>
            </p>
          </div>
        </div>
        <button type="button" className="botao-voltar" id="btn-voltar-perfil"
        onClick={() => navigate("/app/extras-menu")}>Voltar</button>
      </div>
  )}
  
  {/* // Seção de edição do perfil */}
  {activeSection === "edit" && (
      <div id="secao-edicao">
        <form className="form-perfil" onSubmit={handleSaveProfile}>

          <div className="campo-foto-edicao relative w-32 h-32 mb-4">
 
    <img src={tempUserData.avatar} alt="Foto de perfil atual" className="foto-perfil-preview" id="foto-perfil-preview-edicao" />

    <button id="botao-de-resetar-avatar" type="button" 
    className="absolute -top-4 right-8 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 border-4 border-[#0f172a] z-[100]"
    onClick={handleRemovePhoto}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
</button>

    
    <div className="btn-opcoes-perfil">

    <button type="button" id="btn-escolher-avatars"
    onClick={() => setIsGalleryOpen(true)}>Escolher avatar</button>

    <button type="button" id="btn-escolher-galeria"
    onClick={() => fileInputRef.current.click()}>Trocar Foto (Upload)</button>
    </div>
    
    <input type="file" id="input-foto-perfil-edicao" accept="image/*" ref={fileInputRef} style={{display: "none"}}
    onChange={(event) => handleFileUpload(event)} />


{/* // Galeria de Avatares */}
    {isGalleryOpen  && (
    <div className="galeria-agentes-espaciais" id="galeria-agentes-espaciais" >
      
      <button type="button" className="btn-fechar-galeria" id="btn-fechar-galeria"
      onClick={() => setIsGalleryOpen(false)}>X</button>

      <div className="galeria-grid-avatares">
        <div className="avatar-item">
            <img src="/public/imagens/avatar-phoenix.png" alt="Avatar Phoenix" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-phoenix.png")} />
        </div>
        <div className="avatar-item">
            <img src="/public/imagens/avatar-apollo.png" alt="Avatar Apollo" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-apollo.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-luna (1).png" alt="Avatar Luna" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-luna (1).png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-orion.png" alt="Avatar Orion" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens//avatar-orion.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nova.png" alt="Avatar Nova" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens//avatar-nova.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-ace.png" alt="Avatar Ace" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens//avatar-ace.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-astra.png" alt="Avatar Astra" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-astra.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-nexus.png" alt="Avatar Nexus" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-nexus.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-stella.png" alt="Avatar Stella" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-stella.png")} />
        </div>
        <div className="avatar-item">
          <img src="/public/imagens/avatar-wil.png" alt="Avatar Will" className="avatar-preview" onClick={() => handleAvatarSelect("/imagens/avatar-wil.png")} />
        </div>
        </div>
        
        </div>  
        )}

          </div> 
  
          <div className="campo-input">
            <label htmlFor="nome-agente-edicao">Nome de Agente Espacial</label>
            <input type="text" id="nome-agente-edicao" placeholder="Digite seu nome aqui"
            value={tempUserData.username} 
            onChange={(e) => setTempUserData({...tempUserData, username: e.target.value})}
             />
          </div> 
  
          <div className="campo-input">
            <label htmlFor="sobre-voce-edicao">Sobre você</label>
            <textarea id="sobre-voce-edicao" placeholder="Conte um pouco sobre sua missão..." rows="3"
            value={tempUserData.bio} 
            onChange={(e) => setTempUserData({...tempUserData, bio: e.target.value})} >
           </textarea>
          </div>
  
          <div className="campo-input">
            <label htmlFor="interesses-edicao">Interesses</label>
            <input type="text" id="interesses-edicao" placeholder="Ex: Astronomia"
            value={tempUserData.interests} 
            onChange={(e) => setTempUserData({...tempUserData, interests: e.target.value})} />
          </div>
  
          <div className="secao-seguranca">
            <button type="button" className="btn-troca-senha" id="btn-troca-senha"
            onClick={() => navigate("/app/change-password")}>Trocar senha</button>
          </div>

          <div className="botoes-edicao">

            <button type="submit" className="btn-salvar" id="btn-salvar-perfil" 
            onClick={handleSaveProfile}>Salvar Alterações</button>

            <button type="button" className="btn-cancelar" id="btn-cancelar-perfil"
            onClick={handleCancelEdit}>Cancelar</button>
          </div>

        </form>

      </div>
  )}
    </div>
  </section>
    )
}
export default Profile;
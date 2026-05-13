import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-toastify";
import CosmicBackground from "../../layout/CosmicBackground";
import styles from "./Profile.module.css";
import useAuth from "../../../hooks/useAuth";

//avatar padrão em construído em código SVG
const default_avatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle />
  <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 17.2C10.1 17.2 8.4 16.3 7.3 14.9C7.3 13.3 10.4 12.4 12 12.4C13.6 12.4 16.7 13.3 16.7 14.9C15.6 16.3 13.9 17.2 12 17.2Z" fill="#94a3b8"/>
</svg>
`)}`;

function Profile() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  //o estado que controla "qual canal está passando"
  const [activeSection, setActiveSection] = useState("view");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const fileInputRef = useRef(null);

  //constantes para guardar os dados oficiais do perfil
  const [userData, setUserData] = useState({
    avatar: default_avatar,
    username: "",
    bio: "",
    interests: "",
  });

  //para guardar os dados temporários
  const [tempUserData, setTempUserData] = useState({
    avatar: default_avatar,
    username: "",
    bio: "",
    interests: "",
  });

  useEffect(() => {
    //sempre que o usuário fizer login ou atualizar seus dados, o perfil deve ser atualizado para refletir as mudanças, mas isso só acontece se estivermos na seção de visualização de perfil
    if (user && activeSection === "view") { //só atualiza se NÃO estivermos editando
      const initialData = {
        avatar: user.avatar || default_avatar,
        username: user.username || "",
        bio: user.bio || "",
        interests: user.interests || "",
      };

      setUserData(initialData);
      setTempUserData(initialData);
    }
  }, [user, activeSection]); //atualizar os dados do perfil sempre que o usuário mudar seus dados

  //função para salvar os dados do perfil
  const handleSaveProfile = async (e) => {
    e.preventDefault();

    try {
      const url = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/update-profile`;

      const response = await fetch(url, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
         },
         credentials: "include", //faz com que o cookie seja enviado junto com a requisição
         body: JSON.stringify(tempUserData),
      });

      if (response.ok) {
        setUserData(tempUserData); //pegando os dados de edição e jogando no perfil
        login({ ...user, ...tempUserData }); // atualiza o contexto global
        setIsGalleryOpen(false);
        setActiveSection("view"); //volta para a visualização após salvar
        toast.success("🚀 Alterações salvas na base de dados!");
      } else {
        toast.error("☄️ Erro ao sincronizar com a base.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("📡 Falha na comunicação com o servidor.");
    }
  };

  //se fizer apenas setUserData({ avatar: avatarSrc }), o React vai "apagar" o nome, a bio e os interesses, e vai deixar só o avatar lá dentro
  const handleAvatarSelect = (avatarSrc) => {
    setTempUserData((prev) => ({
      ...prev, //o ...prevData serve para dizer: "Mantenha tudo o q já existe e mude apenas o avatar"
      avatar: avatarSrc,
    }));
  };

  //função para upload de arquivo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      //quando a leitura do arquivo for feita, atualiza o estado com a imagem carregada
      reader.onload = () => {
        setTempUserData((dataProfile) => ({
          ...dataProfile,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  //função para remover a foto de perfil (voltar ao avatar padrão)
  const handleRemovePhoto = () => {
    setTempUserData((prev) => ({
      ...prev,
      avatar: null,
    }));
  };

  //função para cancelar as edições de perfil
  const handleCancelEdit = () => {
    setTempUserData(userData);
    setIsGalleryOpen(false); //fechar galeria
    setActiveSection("view"); //trocar seção
  };

  return (
    <section className={styles.telaPerfil} id="tela-perfil-usuario">
      <CosmicBackground />
      <div className={styles.containerPerfil}>
        {activeSection === "view" && (
          <div className={styles.perfilVisualizacao} id="secao-visualizacao">
            <div className={styles.headerPerfil}>
              <h2 className={styles.tituloSecao}>Perfil de Agente Espacial</h2>
              <button
                type="button"
                className={styles.btnEditarPerfil}
                id="btn-editar-perfil"
                onClick={() => {
                  setTempUserData(userData);
                  setActiveSection("edit");
                }}
              >
                Editar
              </button>
            </div>

            <div className={styles.conteudoPerfil}>
              <div className={styles.perfilFoto}>
                <img
                  src={userData.avatar || default_avatar}
                  alt="Foto de perfil"
                  id="foto-perfil-img"
                  className={styles.fotoPerfil}
                />
              </div>

              <div className={styles.perfilInfo}>
                <p className={styles.infoItem}>
                  <span className={styles.label}>Nome:</span>
                  <span className={styles.valor} id="perfil-nome">
                    {userData.username || "Agente sem nome"}
                  </span>
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.label}>Sobre mim:</span>
                  <span className={styles.valor} id="perfil-sobre">
                    {userData.bio || "Sem bio definida"}
                  </span>
                </p>
                <p className={styles.infoItem}>
                  <span className={styles.label}>Interesses:</span>
                  <span className={styles.valor} id="perfil-interesses">
                    {userData.interests || "Sem informação"}
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              className={styles.backButton}
              id="btn-voltar-info-menu"
              onClick={() => navigate("/app/extras-menu")}
            >
              Voltar
            </button>
          </div>
        )}

        {activeSection === "edit" && (
          <div id="secao-edicao">
            <form className={styles.formPerfil} onSubmit={handleSaveProfile}>
              <div className={styles.campoFotoEdicao}>
                <img
                  src={tempUserData.avatar || default_avatar}
                  alt="Foto de perfil atual"
                  className={styles.fotoPerfilPreview}
                  id="foto-perfil-preview-edicao"
                />

                <button
                  id="botao-de-resetar-avatar"
                  type="button"
                  className={styles.resetAvatarButton}
                  onClick={handleRemovePhoto}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>

                <div className={styles.btnOpcoesPerfil}>
                  <button
                    type="button"
                    id="btn-escolher-avatars"
                    className={styles.avatarActionButton}
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    Escolher avatar
                  </button>

                  <button
                    type="button"
                    id="btn-escolher-galeria"
                    className={styles.avatarActionButton}
                    onClick={() => fileInputRef.current.click()}
                  >
                    Trocar Foto (Upload)
                  </button>
                </div>

                <input
                  type="file"
                  id="input-foto-perfil-edicao"
                  accept="image/*"
                  ref={fileInputRef}
                  className={styles.hiddenFileInput}
                  onChange={(event) => handleFileUpload(event)}
                />

                {isGalleryOpen && (
                  <div 
                    className={styles.galeriaAgentesEspaciais}
                    id="galeria-agentes-espaciais"
                  >
                    <button
                      type="button"
                      className={styles.btnFecharGaleria}
                      id="btn-fechar-galeria"
                      onClick={() => setIsGalleryOpen(false)}
                    >
                      X
                    </button>

                    <div className={styles.galeriaGridAvatares}>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-phoenix.webp"
                          alt="Avatar Phoenix"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-phoenix.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-apollo.webp"
                          alt="Avatar Apollo"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-apollo.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-luna.webp"
                          alt="Avatar Luna"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-luna.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-orion.webp"
                          alt="Avatar Orion"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-orion.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-nova.webp"
                          alt="Avatar Nova"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-nova.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-ace.webp"
                          alt="Avatar Ace"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-ace.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-astra.webp"
                          alt="Avatar Astra"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-astra.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-nexus.webp"
                          alt="Avatar Nexus"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-nexus.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-stella.webp"
                          alt="Avatar Stella"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-stella.webp")
                          }
                        />
                      </div>
                      <div className={styles.avatarItem}>
                        <img
                          src="/images/avatar-wil.webp"
                          alt="Avatar Will"
                          className={styles.avatarPreview}
                          onClick={() =>
                            handleAvatarSelect("/images/avatar-wil.webp")
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.campoInput}>
                <label htmlFor="nome-agente-edicao">Nome de Agente Espacial</label>
                <input
                  type="text"
                  id="nome-agente-edicao"
                  placeholder="Digite seu nome aqui"
                  value={tempUserData.username}
                  onChange={(e) =>
                    setTempUserData({ ...tempUserData, username: e.target.value })
                  }
                />
              </div>

              <div className={styles.campoInput}>
                <label htmlFor="sobre-voce-edicao">Sobre você</label>
                <textarea
                  id="sobre-voce-edicao"
                  placeholder="Conte um pouco sobre sua missão..."
                  rows="3"
                  value={tempUserData.bio}
                  onChange={(e) =>
                    setTempUserData({ ...tempUserData, bio: e.target.value })
                  }
                ></textarea>
              </div>

              <div className={styles.campoInput}>
                <label htmlFor="interesses-edicao">Interesses</label>
                <input
                  type="text"
                  id="interesses-edicao"
                  placeholder="Ex: Astronomia"
                  value={tempUserData.interests}
                  onChange={(e) =>
                    setTempUserData({ ...tempUserData, interests: e.target.value })
                  }
                />
              </div>

              <div className={styles.secaoSeguranca}>
                <button
                  type="button"
                  className={styles.btnTrocaSenha}
                  id="btn-troca-senha"
                  onClick={() => navigate("/app/change-password")}
                >
                  Trocar senha
                </button>
              </div>

              <div className={styles.botoesEdicao}>
                <button
                  type="submit"
                  className={styles.btnSalvar}
                  id="btn-salvar-perfil"
                  onClick={handleSaveProfile}
                >
                  Salvar Alterações
                </button>

                <button
                  type="button"
                  className={styles.btnCancelar}
                  id="btn-cancelar-perfil"
                  onClick={handleCancelEdit}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
export default Profile;
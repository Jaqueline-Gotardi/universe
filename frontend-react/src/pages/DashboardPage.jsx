/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

import { Outlet, useLocation } from "react-router-dom";
import SoundTrack from "../components/layout/SoundTrack";
import { AgentBadge } from "../components/auth/AgentBadge/AgentBadge";
import MobileFloatingMenu from "../components/layout/MobileFloatingMenu/MobileFloatingMenu";
import { useState, useEffect } from "react";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); //define o estado inicial com base na largura da janela

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); //atualiza o estado quando a janela é redimensionada

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //limpa o listener quando o componente é desmontado
  }, []); //o array vazio garante que o efeito seja executado apenas uma vez, quando o componente é montado

  const hideAgentBadge = ["/app/profile", "/app/delete-account"]; //se a rota for profile ou delete-account, não mostra o crachá de agente
  const shouldHideAgentBadge = hideAgentBadge.includes(location.pathname);

  const shouldHideSound = location.pathname === "/app/delete-account"; //se a rota for delete-account-não mostra o ícone musical 

  const renderBadge = !shouldHideAgentBadge ? <AgentBadge /> : null; //decide se renderiza o AgentBadge com base na rota atual
  const renderSound = !shouldHideSound ? <SoundTrack /> : null; //decide se renderiza o SoundTrack com base na rota atual

    return (
    <div>
      <main>
        <Outlet /> {/*renderiza os componentes filhos conforme as rotas definidas no main.jsx */}
      </main>

      {isMobile ? ( //se for mobile, renderiza o menu hamburguer
        (renderBadge || renderSound) && (
          <MobileFloatingMenu agentBadge={renderBadge} soundTrack={renderSound} />
        )
      ) : ( //no desktop, renderiza normalmente o badge e o som, sem o menu hamburguer
        <>
        {renderBadge}
        {renderSound}
        </>
      )}


      
      {/*só renderiza o Badge se NÃO estiver nas rotas de ocultar */}
      {/* {!shouldHideAgentBadge && <AgentBadge />}  */}
      {/*só renderiza o som se NÃO for a tela de deletar */}
      {/* {!shouldHideSound && <SoundTrack />} */}

      </div>
    ); 
} 
export default DashboardPage;   
/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

import { Outlet, useLocation } from "react-router-dom";
import SoundTrack from "../components/layout/SoundTrack";
import { AgentBadge } from "../components/auth/AgentBadge/AgentBadge";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const location = useLocation()
  const hideAgentBadge = ["/app/profile", "/app/delete-account"]; //se a rota for profile ou delete-account, não mostra o crachá de agente
  const shouldHideAgentBadge = hideAgentBadge.includes(location.pathname);

  const shouldHideSound = location.pathname === "/app/delete-account"; //se a rota for delete-account-não mostra o ícone musical 

    return (
    <div>
      <main>
        <Outlet /> {/*renderiza os componentes filhos conforme as rotas definidas no main.jsx */}
      </main>
      
      {/*só renderiza o Badge se NÃO estiver nas rotas de ocultar */}
      {!shouldHideAgentBadge && <AgentBadge />} 

      {/*só renderiza o som se NÃO for a tela de deletar */}
      {!shouldHideSound && <SoundTrack />}

      </div>
    ); 
} 
export default DashboardPage;   
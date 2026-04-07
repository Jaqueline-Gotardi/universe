/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

import { Outlet, useLocation } from "react-router-dom";
import SoundTrack from "../components/layout/SoundTrack";
import { AgentBadge } from "../components/auth/AgentBadge/AgentBadge";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const location = useLocation()
  const displayAgent = location.pathname === ("/app/profile") //se a rota for profile

    return (
    <div>
      <main>
        <Outlet /> {/*renderiza os componentes filhos conforme as rotas definidas no main.jsx */}
      </main>

      {!displayAgent && <AgentBadge />} {/* se a rota não for /profile, mostra o crachá do agente */}

      <SoundTrack />
      </div>
    ); 
} 
export default DashboardPage;   
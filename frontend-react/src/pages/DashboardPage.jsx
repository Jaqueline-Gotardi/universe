/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

//import { useState } from "react";
import { Outlet } from "react-router-dom";
import SoundTrack from "../components/SoundTrack";
import { AgentBadge } from "../components/AgentBadge";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

    return (
      <div>

      <main>
      <Outlet /> {/*renderiza os componentes filhos conforme as rotas definidas no main.jsx */}
      </main>

      <AgentBadge />
      <SoundTrack />
      </div>
      
    ); 
} 

export default DashboardPage;   
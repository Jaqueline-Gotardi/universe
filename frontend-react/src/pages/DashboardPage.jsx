/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

import { useState } from "react";
import WelcomeSection from "../components/WelcomeSection";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  const [ telaAtiva, setAtiva ] = useState("inicio");

    return (
      <>
      {
        telaAtiva === "inicio" &&
         /* < WelcomeSection mudarTela = {setAtiva} / > */
         < WelcomeSection onClicarIniciar={() => setAtiva('tela-inicial')} onClicarTutorial={() => setAtiva('tutorial')} />
      }
      
   </>
    ); 
} 

export default DashboardPage;  
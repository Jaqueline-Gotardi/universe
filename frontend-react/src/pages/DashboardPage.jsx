/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

//import { useState } from "react";
import WelcomeSection from "../components/WelcomeSection";
import MissionTutorial from "../components/MissionTutorial";
import ExplorerMenu from "../components/ExplorerMenu";
import { Outlet } from "react-router-dom";

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas

  //const [ telaAtiva, setAtiva ] = useState("inicio");

    return (
      <>
      <Outlet /> {/* //renderiza os componentes filhos conforme as rotas definidas em App.jsx */}
      {/* {
        telaAtiva === "inicio" &&
         < WelcomeSection onClicarIniciar={() => setAtiva('tela-inicial')} onClicarTutorial={() => setAtiva('tutorial')} />
      }

      {
        telaAtiva === "tela-inicial" &&
        < ExplorerMenu onClicarMenu={() => setAtiva('menu')} />
      }

      {
       telaAtiva === "tutorial" && 
         < MissionTutorial onClicarExploracao={() => setAtiva('exploracao')} />
      } */}
      
   </>
    ); 
} 

export default DashboardPage;  
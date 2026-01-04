/* main.jsx (O Interruptor): É o arquivo que liga tudo. Ele dá o "play" no sistema, instala a fiação da rádio e desenha o mapa das ruas (as rotas) do site. */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importando o roteador

import ProtectRoute from './components/ProtectRoute.jsx';
import { AuthProvider } from '../contexts/authContext.jsx';

//importar as funções
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';

//importar o css 
import "../src/style/reset.css"
import "../src/style/globals.css" 
import MissionTutorial from './components/MissionTutorial.jsx';
import ExplorerMenu from './components/ExplorerMenu.jsx';
import WelcomeSection from './components/WelcomeSection.jsx';
import InfoMenu from './components/InfoMenu.jsx';
import InfoAstros from './components/InfoAstros.jsx';
import ConstelletionsMenu from './components/ConstelletionsMenu.jsx';
import NorthConstelattions from './components/NorthConstelattions.jsx';
import SouthConstelattions from './components/SouthConstelattions.jsx';
import FamousConstelattions from './components/FamousConstelattions.jsx';
import BigDipper from './components/BigDipper.jsx';
import LittleDipper from './components/LittleDipper.jsx';
import Andromeda from './components/Andromeda.jsx';
import SouthernCross from './components/SouthernCross.jsx';
import Phoenix from './components/Phoenix.jsx';
import Centaur from './components/Centaur.jsx';
import Orion from './components/Orion.jsx';


//configurando o roteador
const router = createBrowserRouter([ 
  {
    path: "/", //rota raiz
    element: <LoginPage />, //layout principal ou o redirecionador
  },
  {
    path: "/login",
    element: <LoginPage />,
  }, 
  { 
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/app",
    element: (
      <ProtectRoute>  {/* autentificação */}
    <DashboardPage/>  {/* conteúdo */}
    </ProtectRoute>
    ),
    children: [
      {
        index: true,
        element: <WelcomeSection/>
      },
      {
        path: "exploracao",
        element: <ExplorerMenu />
      },
      {
        path: "tutorial",
        element: <MissionTutorial />
      },
      {
        path: "menu",
        element: <InfoMenu />
      },
      {
        path: "info-astros",
        element: <InfoAstros />
      },
      {
        path: "constelattion",
        element: <ConstelletionsMenu />
      },
      {
        path: "hemisferio-norte",
        element: <NorthConstelattions />
      },
      {
        path: "hemisferio-sul",
        element: <SouthConstelattions />
      },
      {
        path: "constellations-famous",
        element: <FamousConstelattions />
      },
      {
        path: "big-dipper",
        element: <BigDipper />
      },
      {
        path: "little-dipper",
        element: <LittleDipper />
      },
      {
        path: "andromeda",
        element: <Andromeda />
      },
      {
        path: "southern-cross",
        element: <SouthernCross />
      },
      {
        path: "phoenix",
        element: <Phoenix />
      },
      {
        path: "centaur",
        element: <Centaur />
      },
      {
        path: "orion",
        element: <Orion />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
) 
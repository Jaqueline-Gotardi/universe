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
import OfflineScreen from './pages/OfflineScreen.jsx';
import Page404 from './pages/Page404.jsx';

//importar o css 
import "../src/style/reset.css"
import "../src/style/globals.css" 

import MissionTutorial from './components/MissionTutorial.jsx';
import ExplorerMenu from './components/ExplorerMenu.jsx';
import WelcomeSection from './components/WelcomeSection.jsx';
import InfoMenu from './components/InfoMenu.jsx';
import AstrosMenu from './components/AstrosMenu.jsx';
import ConstellationsMenu from './components/ConstellationsMenu.jsx';
import NorthConstellations from './components/NorthConstellations.jsx';
import SouthConstellations from './components/SouthConstellations.jsx';
import FamousConstellations from './components/FamousConstellations.jsx';
import BigDipper from './components/BigDipper.jsx';
import LittleDipper from './components/LittleDipper.jsx';
import AndromedaConstellation from './components/AndromedaConstellation.jsx';
import SouthernCross from './components/SouthernCross.jsx';
import Phoenix from './components/Phoenix.jsx';
import Centaur from './components/Centaur.jsx';
import Orion from './components/Orion.jsx';
import GreaterCanis from './components/GreaterCanis.jsx';
import Scorpion from './components/Scorpion.jsx';
import EventsMenu from './components/EventsMenu.jsx';
import Eclipses from './components/Eclipses.jsx';
import SolarEclipse from './components/SolarEclipse.jsx';
import LunarEclipse from './components/LunarEclipse.jsx';
import MeteorShowers from './components/MeteorShowers.jsx';
import Perseids from './components/Perseids.jsx';
import Leonids from './components/Leonids.jsx';
import Geminids from './components/Geminids.jsx';
import SupermoonAndConjunctions from './components/SupermoonAndConjunctions.jsx';
import Supermoon from './components/Supermoon.jsx';
import PlanetaryConjunction from './components/PlanetaryConjunction.jsx';
import CometsAndOthers from './components/CometsAndOthers.jsx';
import Comets from './components/Comets.jsx';
import Supernovas from './components/Supernovas.jsx';
import StarClusters from './components/StarClusters.jsx';
import GalaxiesMenu from './components/GalaxiesMenu.jsx';
import TypeGalaxies from './components/TypeGalaxies.jsx';
import Spiral from './components/Spiral.jsx';
import Elliptical from './components/Elliptical.jsx';
import Irregular from './components/Irregular.jsx';
import FamousGalaxies from './components/FamousGalaxies.jsx';
import MilkyWay from './components/MilkyWay.jsx';
import AndromedaGalaxy from './components/AndromedaGalaxy.jsx';
import TriangleM33 from './components/TriangleM33.jsx';

import PlanetaryInformation from './components/PlanetaryInformation.jsx';
/* import SolarSystem from './components/SolarSystem.jsx'; */
/* import PlanetaryMenu from './components/PlanetaryMenu.jsx'; */





import Sun from './components/Sun.jsx';
import Mercury from './components/Mercury.jsx';
import Venus from './components/Venus.jsx';
import Earth from './components/Earth.jsx';
import Mars from './components/Mars.jsx';
import Jupiter from './components/Jupiter.jsx';
import Saturn from './components/Saturn.jsx';
import Uranus from './components/Uranus.jsx';
import Neptune from './components/Neptune.jsx';
import Pluto from './components/Pluto.jsx';

import CinturaoAsteroides from './components/CinturaoAsteroides.jsx';
import CinturaoKuiper from './components/CinturaoKuiper.jsx';
import OortCloud from './components/OortCloud.jsx';
import DwartPlanets from './components/DwartPlanets.jsx';

import Moon from './components/Moon.jsx';
import Io from './components/Io.jsx';
import Europe from './components/Europe.jsx';
import Ganymede from './components/Ganymede.jsx';
import Calisto from './components/Calisto.jsx';
import Titan from './components/Titan.jsx';
import Enceladus from './components/Enceladus.jsx';
import Triton from './components/Triton.jsx';

import ExtrasMenu from './components/ExtrasMenu.jsx';
import Profile from './components/Profile.jsx';
import Creators from './components/Creators.jsx';
import DeleteAccount from './components/DeleteAccount.jsx';
import ChangePassword from './components/ChangePassword.jsx';

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
        path: "astros-menu", 
        element: <AstrosMenu />
      },
      {
        path: "constellations-menu",
        element: <ConstellationsMenu />
      },
      {
        path: "hemisferio-norte",
        element: <NorthConstellations />
      },
      {
        path: "hemisferio-sul",
        element: <SouthConstellations />
      },
      {
        path: "constellations-famous",
        element: <FamousConstellations />
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
        path: "andromeda-constellation",
        element: <AndromedaConstellation />
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
      },
      {
        path: "greater-canis",
        element: <GreaterCanis />
      },
      {
        path: "scorpion",
        element: <Scorpion />
      },
      {
        path: "events-menu",
        element: <EventsMenu />
      },
      {
        path: "eclipses",
        element: <Eclipses />
      },
      {
        path: "solar-eclipse",
        element: <SolarEclipse />
      },
      {
        path: "lunar-eclipse",
        element: <LunarEclipse />
      },
      {
        path: "meteor-showers",
        element: <MeteorShowers />
      },
      {
        path: "perseids",
        element: <Perseids />
      },
      {
        path: "leonids",
        element: <Leonids />
      },
      {
        path: "geminids",
        element: <Geminids />
      },
      {
        path: "supermoon-and-conjunctions",
        element: <SupermoonAndConjunctions />
      },
      {
        path: "supermoon",
        element: <Supermoon />
      },
      {
        path: "planetary-conjunction",
        element: <PlanetaryConjunction />
      },
      {
        path: "comets-and-others",
        element: <CometsAndOthers />
      },
      {
        path: "comets",
        element: <Comets />
      },
      {
        path: "supernovas",
        element: <Supernovas />
      },
      {
        path: "star-clusters",
        element: <StarClusters />
      },
      {
        path: "galaxies-menu",
        element: <GalaxiesMenu />
      },
      {
        path: "type-galaxies",
        element: <TypeGalaxies />
      },
      {
        path: "spiral",
        element: <Spiral />
      },
      {
        path: "elliptical",
        element: <Elliptical />
      },
      {
        path: "irregular",
        element: <Irregular />
      }, 
      {
        path: "famous-galaxies",
        element: <FamousGalaxies />
      },
      {
        path: "milky-way",
        element: <MilkyWay />
      },
      {
        path: "andromeda-galaxy",
        element: <AndromedaGalaxy />
      },
      {
        path: "triangle-m33",
        element: <TriangleM33 />
      },
      {
        path: "planetary-information",
        element: <PlanetaryInformation />
      },
      /* {
        path: "sistema-solar",
        element: <SolarSystem />
      }, */
      /* {
        path: "planetary-menu",
        element: <PlanetaryMenu />
      }, */
      {
        path: "sun",
        element: <Sun />
      },
      {
        path: "mercury",
        element: <Mercury />
      }, 
      {
        path: "venus",
        element: <Venus />
      },
      {
        path: "earth",
        element: <Earth />
      },
      {
        path: "mars",
        element: <Mars />
      },
      {
        path: "jupiter",
        element: <Jupiter />
      },
      {
        path: "saturn",
        element: <Saturn />
      },
      {
        path: "uranus",
        element: <Uranus />
      },
      {
        path: "neptune",
        element: <Neptune />
      },
      {
        path: "pluto",
        element: <Pluto />
      },
      {
        path: "cinturao-asteroides",
        element: <CinturaoAsteroides />
      },
      {
        path: "cinturao-kuiper",
        element: <CinturaoKuiper />
      },
      {
        path: "nuvem-oort",
        element: <OortCloud />
      },
      {
        path: "planetas-anoes",
        element: <DwartPlanets />
      },
      {
        path: "lua",
        element: <Moon />
      },
      {
        path: "io",
        element: <Io />
      },
      {
        path: "europa",
        element: <Europe />
      },
      {
        path: "ganimedes",
        element: <Ganymede />
      },
      {
        path: "calisto",
        element: <Calisto />
      },
      {
        path: "titan",
        element: <Titan />
      },
      {
        path: "enceladus",
        element: <Enceladus />
      },
      {
        path: "tritao",
        element: <Triton />
      },
      {
        path: "extras-menu",
        element: <ExtrasMenu />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "change-password",
        element: <ChangePassword />
      },
      {
        path: "creators",
        element: <Creators />
      },
      {
        path: "delete-account",
        element: <DeleteAccount />
      },
      {
        path: "*",
        element: <Page404 /> //se o usuário digitar uma rota desconhecida
      }
    ]
  }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvider>
    <OfflineScreen /> {/* para vigiar se o wifi cair ou oscilar */}
    <RouterProvider router={router} />
  </AuthProvider>

  </StrictMode>
)   
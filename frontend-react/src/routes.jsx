import { createBrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import Page404 from './pages/Page404/Page404.jsx';

import ProtectRoute from './components/auth/ProtectRoute.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

import MissionTutorial from './components/layout/MissionTutorial/MissionTutorial.jsx';
import ExplorerMenu from './components/navigation/ExplorerMenu.jsx';
import WelcomeSection from './components/layout/WelcomeSection/WelcomeSection.jsx';
import InfoMenu from './components/navigation/InfoMenu.jsx';
import AstrosMenu from './components/navigation/AstrosMenu.jsx';
import ConstellationsMenu from './components/navigation/ConstellationsMenu.jsx';
import NorthConstellations from './components/constellations/NorthConstellations.jsx';
import SouthConstellations from './components/constellations/SouthConstellations.jsx';
import FamousConstellations from './components/constellations/FamousConstellations.jsx';
import BigDipper from './components/constellations/BigDipper.jsx';
import LittleDipper from './components/constellations/LittleDipper.jsx';
import AndromedaConstellation from './components/constellations/AndromedaConstellation.jsx';
import SouthernCross from './components/constellations/SouthernCross.jsx';
import Phoenix from './components/constellations/Phoenix.jsx';
import Centaur from './components/constellations/Centaur.jsx';
import Orion from './components/constellations/Orion.jsx';
import GreaterCanis from './components/constellations/GreaterCanis.jsx';
import Scorpion from './components/constellations/Scorpion.jsx';
import EventsMenu from './components/navigation/EventsMenu.jsx';
import Eclipses from './components/events/Eclipses.jsx';
import SolarEclipse from './components/events/SolarEclipse.jsx';
import LunarEclipse from './components/events/LunarEclipse.jsx';
import MeteorShowers from './components/events/MeteorShowers.jsx';
import Perseids from './components/events/Perseids.jsx';
import Leonids from './components/events/Leonids.jsx';
import Geminids from './components/events/Geminids.jsx';
import SupermoonAndConjunctions from './components/events/SupermoonAndConjunctions.jsx';
import Supermoon from './components/events/Supermoon.jsx';
import PlanetaryConjunction from './components/events/PlanetaryConjunction.jsx';
import CometsAndOthers from './components/small-bodies/CometsAndOthers.jsx';
import Comets from './components/small-bodies/Comets.jsx';
import Supernovas from './components/deep-space/Supernovas.jsx';
import StarClusters from './components/deep-space/StarClusters.jsx';
import GalaxiesMenu from './components/navigation/GalaxiesMenu.jsx';
import TypeGalaxies from './components/deep-space/TypeGalaxies.jsx';
import Spiral from './components/deep-space/Spiral.jsx';
import Elliptical from './components/deep-space/Elliptical.jsx';
import Irregular from './components/deep-space/Irregular.jsx';
import FamousGalaxies from './components/deep-space/FamousGalaxies.jsx';
import MilkyWay from './components/deep-space/MilkyWay.jsx';
import AndromedaGalaxy from './components/deep-space/AndromedaGalaxy.jsx';
import TriangleM33 from './components/deep-space/TriangleM33.jsx';

import PlanetaryInformation from './components/solar-system/PlanetaInformation/PlanetaryInformation.jsx';
import Sun from './components/solar-system/Sun.jsx';
import Mercury from './components/solar-system/Mercury.jsx';
import Venus from './components/solar-system/Venus.jsx';
import Earth from './components/solar-system/Earth.jsx';
import Mars from './components/solar-system/Mars.jsx';
import Jupiter from './components/solar-system/Jupiter.jsx';
import Saturn from './components/solar-system/Saturn.jsx';
import Uranus from './components/solar-system/Uranus.jsx';
import Neptune from './components/solar-system/Neptune.jsx';
import Pluto from './components/solar-system/Pluto.jsx';

import CinturaoAsteroides from './components/small-bodies/CinturaoAsteroides.jsx';
import CinturaoKuiper from './components/small-bodies/CinturaoKuiper.jsx';
import OortCloud from './components/small-bodies/OortCloud.jsx';
import DwartPlanets from './components/solar-system/DwartPlanets.jsx';

import Moon from './components/solar-system/Moon.jsx';
import Io from './components/solar-system/Io.jsx';
import Europe from './components/solar-system/Europe.jsx';
import Ganymede from './components/solar-system/Ganymede.jsx';
import Calisto from './components/solar-system/Calisto.jsx';
import Titan from './components/solar-system/Titan.jsx';
import Enceladus from './components/solar-system/Enceladus.jsx';
import Triton from './components/solar-system/Triton.jsx';

import ExtrasMenu from './components/navigation/ExtrasMenu.jsx';
import Profile from './components/auth/Profile/Profile.jsx';
import Creators from './components/layout/Creators/Creators.jsx';
import DeleteAccount from './components/auth/DeleteAccount/DeleteAccount.jsx';
import ChangePassword from './components/auth/ChangePassword/ChangePassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
    path: "/password-recovery",
    element: <PasswordRecovery />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/app",
    element: (
      <ProtectRoute>
        <DashboardPage />
      </ProtectRoute>
    ),
    children: [
      { 
        index: true,
        element: <WelcomeSection />
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
        element: <Page404 />
      }
    ]
  },
]);

export default router;
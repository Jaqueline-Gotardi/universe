/* main.jsx (O Interruptor): É o arquivo que liga tudo. Ele dá o "play" no sistema, instala a fiação da rádio e desenha o mapa das ruas (as rotas) do site. */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importando o roteador

import ProtectRoute from './components/protectRoute.jsx';
import { AuthProvider } from '../contexts/authContext.jsx';

//importar as funções
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx';

//importar o css 
import "../src/style/reset.css"
import "../src/style/globals.css" 

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
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
) 
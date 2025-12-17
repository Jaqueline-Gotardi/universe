import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' //importando o roteador

import ProtectRoute from './components/protectRoute.jsx';

//importar as funções
import LoginPage from './pages/loginPage.jsx'
import DashboardPage from './pages/dashboardPage.jsx'

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
    element: <div>Página de Cadastro</div>,
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
    <RouterProvider router={router} />
  </StrictMode>,
) 
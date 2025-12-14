import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Routerprovider } from 'react-router-dom' //importando o roteador

//configurando o roteador
const router = createBrowserRouter([
  {
    path: "/", //rota raiz
    element: <App />, //layout principal ou o redirecionador
  },
  {
    path: "/login",
    element: <div>Página de login</div>,
  },
  {
    path: "/register",
    element: <div>Página de Cadastro</div>,
  },
  {
    path: "/app",
    element: <div>Dashboard Protegido</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routerprovider router={router} />
  </StrictMode>,
)
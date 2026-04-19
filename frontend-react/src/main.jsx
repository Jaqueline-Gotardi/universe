/* main.jsx (O Interruptor): É o arquivo que liga tudo. Ele dá o "play" no sistema, instala a fiação da rádio e desenha o mapa das ruas (as rotas) do site. */
import { ToastContainer } from 'react-toastify'; //importar a biblioteca de notificações
import 'react-toastify/dist/ReactToastify.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import OfflineScreen from './pages/OfflineScreen/OfflineScreen.jsx';
import { AuthProvider } from '../contexts/authContext.jsx';
import router from './routes.jsx';

//importar o css
import "../src/style/reset.css"
import "../src/style/globals.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OfflineScreen /> {/* para vigiar se o wifi cair ou oscilar */}
      <RouterProvider router={router} />

      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      />

    </AuthProvider>
  </StrictMode>
) 
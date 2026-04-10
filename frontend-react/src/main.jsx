/* main.jsx (O Interruptor): É o arquivo que liga tudo. Ele dá o "play" no sistema, instala a fiação da rádio e desenha o mapa das ruas (as rotas) do site. */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import OfflineScreen from './pages/OfflineScreen/OfflineScreen.jsx';
import { AuthProvider } from '../contexts/authContext.jsx';
import CosmicScrollBar from './components/layout/CosmicScrollBar/CosmicScrollBar.jsx';
import router from './routes.jsx';

//importar o css
import "../src/style/reset.css"
import "../src/style/globals.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CosmicScrollBar />
      <OfflineScreen /> {/* para vigiar se o wifi cair ou oscilar */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
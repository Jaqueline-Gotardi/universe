//Este arquivo é a configuração do Vite para o projeto React. Ele define as regras de proxy(servidor) para redirecionar as requisições de autenticação para o backend, permitindo que o frontend e o backend se comuniquem corretamente durante o desenvolvimento.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //tudo que começar com /auth será redirecionado para o seu backend
      '/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
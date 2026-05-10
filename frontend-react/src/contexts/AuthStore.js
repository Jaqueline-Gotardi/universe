/* contextStore.js (O Canal): É só a frequência da rádio. Ele não tem música nem notícia, ele só serve para criar o "espaço" onde a Central vai transmitir as informações. */

import { createContext } from "react";

//exportar o authContext para que o useAuth.js saiba de onde pegar os valores de autentificação
export const AuthContext = createContext();     
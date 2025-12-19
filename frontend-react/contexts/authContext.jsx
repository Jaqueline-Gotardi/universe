/* authContext.jsx (A Central / Cérebro): É quem manda de verdade. Ele guarda a informação se você está logada ou não. É o "HD" onde fica gravada a verdade sobre o usuário. */
 
import { useState, useEffect } from "react";
import { AuthContext } from "./contextStore";
          
 
//a função que irá transmitir se o usuário está logado (para o arquivo ProtectRoute.jsx)
    export function AuthProvider ({ children }) {
        const [ isAuthenticated, setAuthenticated ] = useState(false);
        const [ isLoading, setLoading ] = useState(true);

    //isAuthenticated e isLoading são os valores atuais
    //setIsAuthenticated e setIsLoading são para atualizar os valores atuais
      

        const login = () => setAuthenticated(true);
        const logout = () => setAuthenticated(false);

        useEffect(() => {
            const verificarAutentificação = async () => {

                setLoading(false);
            }
            verificarAutentificação();
        }, [] );
    return (
    <AuthContext.Provider value = {{isAuthenticated, isLoading, login, logout}}>
    {children}
    </AuthContext.Provider>
    )
}
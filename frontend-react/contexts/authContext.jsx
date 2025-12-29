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
            const verificarAutentificação = async() => {
                try {

                    //tentar falar com os servidor e enviar o Cookie (cookie é uma informação sua q faz o site lembrar de vc)
                    const response = await fetch (`/auth/verify`, 
                        {credentials: "include"}
                        //para garantir que o navegador anexe o cookie de autentificação. Se não incluirmos o credentials: "include", o Back não receberá o Cookie e sempre responderá 401 (não autorizado). O credentials: 'include' é a chave que permite o envio do Cookie de volta ao servidor para verificação
                    );

                    if (response.ok) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false)
                    }
                } catch(error) {
                    console.log('Erro de rede ao verificar Token', error)
                    setAuthenticated(false)
                } finally {
                    setLoading(false) //parar de carregar
                }
            }
            verificarAutentificação();
        }, []);

    return (
    <AuthContext.Provider value = {{isAuthenticated, isLoading, login, logout}}>
    {children}
    </AuthContext.Provider>
    )
}
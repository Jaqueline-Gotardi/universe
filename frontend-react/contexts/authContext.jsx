// este arquivo guarda a informação de verificar se o usuário está logado (como se fosse um segurança)


import { createContext, useState, useEffect } from "react";

//exportar o authContext para que o useAuth.js saiba de onde pegar os valores de autentificação
export const AuthContext = createContext();

        

//a função que irá transmitir se o usuário está logado (para o arquivo ProtectRoute.jsx)
    export function AuthProvider ({ children }) {
        const [ isAuthenticated, setAuthenticated ] = useState(false);
        const [ isLoading, setLoading ] = useState(true);

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
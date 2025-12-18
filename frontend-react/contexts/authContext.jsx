// este arquivo guarda a informação de verificar se o usuário está logado (como se fosse um segurança)


import { useState, useEffect } from "react";
import { AuthContext } from "./contextStore";
        

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
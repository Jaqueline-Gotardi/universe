//esse arquivo é para permitir a entrada do usuário no site (se ele estiver logado), como se fosse uma porta

import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

function ProtectRoute ({ children }) {
    //chamar o useAuth, quando o usuário entrar em /app
    const { isLoading, isAuthenticated } = useAuth();

    //se estiver carregando...
    if (isLoading) {
        return (
            <div className="min-h-screen -flex items-center justify-center">
                <h2>Verificando Credenciais. . .</h2>
            </div>
        ) 
    } 

    //se o usuário não estiver autentificado
    if (isAuthenticated === false) {
        console.log("Faça seu login para prosseguir! Redirecionando. . .")
        return <Navigate to= "/login" replace/>
    } 

    return children;
}

export default ProtectRoute;
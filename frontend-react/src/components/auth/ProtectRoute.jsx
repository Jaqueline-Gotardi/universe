/* protectRoute.jsx (O Vigia do Hotel): É o segurança que fica na porta das rotas proibidas. Ele ouve o Mensageiro e decide: "Tá logado? Pode entrar. Não tá? Volta pro login agora!". */

import useAuth from "../../hooks/useAuth";
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
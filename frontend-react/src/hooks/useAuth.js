/* useAuth.js (O Mensageiro): É o "gancho". Ele corre lá na Central, pergunta se o usuário está logado e traz a resposta para quem estiver precisando saber. */
 
import { useContext } from "react";
import { AuthContext } from "../../contexts/contextStore";


//a função que roda quando o componente é carregado. . .
const useAuth = () => {
 
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error ("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};

export default useAuth; 
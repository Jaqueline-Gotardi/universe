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

 


 





/* 

    //variáveis para guardar os states(estados)
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    


    
    useEffect(() => {
        const verifyToken = async () => {
            setIsLoading(true); //carregando

            try {

                //tentar falar com os servidor e enviar o Cookie (cookie é uma informação sua q faz o site lembrar de vc)
                const response = await fetch('/auth/verify', 
                    { credentials: 'include' } //para garantir que o navegador anexe o cookie de autentificação. Se não incluirmos o credentials: "include", o Back-End não receberá o Cookie e sempre responderá 401 (não autorizado). O credentials: 'include' é a chave que permite o envio do Cookie de volta ao servidor para verificação
                );

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    { setIsAuthenticated(false)}
                }
            } catch (error) {
                console.log('Erro de rede ao verificar Token', error)
                { setIsAuthenticated(false)}
            } finally {
                setIsLoading(false) //parar de carregar
            }
        };
        verifyToken();
    }, []);

    return { isAuthenticated, isLoading }
};
 */
import { useState, useEffect } from "react";

const useAuth = () => {
 
    //variáveis para guardar os states(estados)
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //isAuthenticated e isLoading são os valores atuais
    //setIsAuthenticated e setIsLoading são para atualizar os valores atuais
    


    //a função que roda quando o componente é carregado (usa efeito colateral (useEffect) de carregamento . . .
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

export default useAuth;
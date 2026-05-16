/* authContext.jsx (A Central / Cérebro): É quem manda de verdade. Ele guarda a informação se você está logada ou não. É o "HD" onde fica gravada a verdade sobre o usuário. */
 
import { useState, useEffect } from "react";
import { toast } from "react-toastify"
import { AuthContext } from '../contexts/contextStore.js';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
          
  
//a função que irá transmitir se o usuário está logado (para o arquivo ProtectRoute.jsx)
    export function AuthProvider ({ children }) {
        const [ isAuthenticated, setAuthenticated ] = useState(false);
        const [ isLoading, setLoading ] = useState(true);
    //isAuthenticated e isLoading são os valores atuais
    //setIsAuthenticated e setIsLoading são para atualizar os valores atuais
        const [ user, setUser ] = useState(null);
      
        //receber os dados do usuário e atualizar o estado de autenticação
        const login = (userData) => { 
        setAuthenticated(true);
        setUser(userData);
    };
        const logout = () => {
        setAuthenticated(false);
        setUser(null); 
    };

        useEffect(() => {
            const verificarAutentificação = async() => {
                try {

                    //tentar falar com os servidor e enviar o Cookie (cookie é uma informação sua q faz o site lembrar de vc)
                    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
                        credentials: "include"
                    }
                        //para garantir que o navegador anexe o cookie de autentificação. Se não incluirmos o credentials: "include", o Back não receberá o Cookie e sempre responderá 401 (não autorizado). O credentials: 'include' é a chave que permite o envio do Cookie de volta ao servidor para verificação
                    );

                    if (response.ok) {
                        const data = await response.json();
                        setAuthenticated(true);
                        setUser(data.user); //atualiza os dados do usuário com as info retornadas pelo servidor
                    } else {
                        //pegar o estado anterior 
                        setAuthenticated((prev) => {
                            if (prev === true) {
                                toast.dismiss(); //limpara a tela antes de mostrar o aviso
                                toast.info("Sua sessão expirou por segurança. Faça login novamente!", {
                                theme: "dark",
                                icon: "🚀"
                            });
                        }
                        return false;
                    });
                }
                    
                } catch(error) {
                    console.log('Erro de rede ou servidor offline', error)
                    setAuthenticated(false)
                } finally {
                    setLoading(false) //parar de carregar
                }
            }
            verificarAutentificação();

            const interval = setInterval(verificarAutentificação, 60000);
            return () => clearInterval(interval); //limpar o intervalo sempre que o usuário for deslogado
        }, []);

    return (
    <AuthContext.Provider value = {{isAuthenticated, isLoading, login, logout, user}}>
    {children}
    </AuthContext.Provider>
    )
}
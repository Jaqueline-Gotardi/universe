/* loginPage.jsx (A Recepção): É a entrada do hotel. Se você não tem a chave, é aqui que você precisa se identificar para o sistema te deixar passar. */
//no React, não se escreve class, mas: className!

import { useState } from "react"; 
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Hook para ler a URL
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react" //importar ícones de olhinho
import { toast } from "react-toastify"; 

import { LoginTransition } from "../../components/auth/LoginTransition/LoginTransition.jsx";
import styles from "./LoginPage.module.css"

   
function LoginPage() { //no react as functions começam com letra Maiúscula
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [isLogin, setLogin ] = useState(false); 
  const [ showPassword, setShowPassword ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    //se na URL tiver ?verified=true, mostra o toast de sucesso
    if (searchParams.get("verified") === "true") {
        toast.success("🚀 Identidade confirmada, Agente! Acesso à base autorizado.");
    }
}, [searchParams]);


  const { login } = useAuth();
  const navigate = useNavigate(); //hook do react-router-dom para redirecionar a página

  //função que joga o usuário para o dashboard quando o astronauta chega em 100%
  const handleTransitionEnd = () => {
    navigate("/app"); //joga o usuário para o dashboard
  };

  //função de validação de login
  async function handleLogin(event) {
  event.preventDefault(); //evita o recarregamento da página
  setLoading(true);
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include", //essencial para o navegador enviar o cookie
      body: JSON.stringify({ email, password}),
      });

    if (response.ok) {
      const data = await response.json(); 
      toast.success("👩‍🚀 Login autorizado! Entrando na base...")
      console.log(data)

      login(); //atualiza o estado para logado
      setLogin(true); 
    } else {
      toast.error("☄️ Acesso negado! Verifique suas credenciais cósmicas.")
    }

  } catch(error) {
    toast.error("📡 Falha na comunicação com a base. Tente novamente em instantes!")
    console.log(error)
  }
  setLoading(false)
}

    return (   
    <section className={styles.telaLogin} id="tela-login">

    <div className={styles.spaceBackground} id="login-bg">
      <div className={styles.stars}></div>
      <div className={styles.planets}></div> 
    </div> 
     { isLogin ? ( //se o login for feito, mostra a animação de transição, senão mostra o formulário de login
      <LoginTransition onComplete={handleTransitionEnd} />
    ) : (
    <div className={styles.contentWrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.welcomeSection}>
          <img src="./images/astronauta-hero.webp" alt="Astronauta" className={styles.astronautHero}/>
          <h1 className={styles.welcomeTitle}>Bem vindo(a) ao Universe!</h1>
        </div>
 
        <form className={styles.loginForm} id="formulario" onSubmit={handleLogin}>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email:</label>
            <input type="email" id="email" 
            placeholder="Digite seu email" 
            className={styles.formInput} 
            value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha" className={styles.formLabel}>Senha:</label>
            <div className={styles.campoSenhaWrapper}>
            <input type={showPassword ? "text" : "password"} id="senha" //mostrar a senha (quando o olhindo for ativado) e mostrar em forma de pontinhos(senha) quando o olho for desativado
            placeholder="Digite sua senha" 
            className={styles.formInput} 
            value={password} onChange={(e) => setPassword(e.target.value)} required/>

          <button type="button" 
          className={styles.iconeOlho} 
          onClick={() => setShowPassword(!showPassword)} 
          tabIndex="-1" //pula o olhindo para ir pro próximo campo quando o usuário clicar em tab
          > 
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} {/*fazer a troca dos olhinhos completo/e com risco no meio */}
          </button>
          </div>
          </div>

          <button type="submit" className={styles.btnPrimary} 
          id="btn-primary" 
          disabled={loading} //impede cliques duplos
          >{loading ? "Autenticando. . ." : "Entrar"}
          </button>

          <span className={styles.cadastroLink}>Não tem uma conta? 
          <NavLink to="/register" id="cadastro-link"> Cadastre-se</NavLink> 
          </span>
          <span className={styles.cadastroLink} style={{marginTop: "0px"}}>
            <NavLink to="/password-recovery">Esqueceu sua senha?</NavLink>
          </span>
          
        </form> 
      </div> 
    </div>
    )}
  </section> 
  );  
}

export default LoginPage;  
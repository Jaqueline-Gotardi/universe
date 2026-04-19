import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify"
import CosmicBackground from "../../components/layout/CosmicBackground";

import styles from "./RegisterPage.module.css"

function RegisterPage() {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const navigate = useNavigate("")

  async function handleRegister(event) {
    event.preventDefault();

    //verificar se os campos não estão vazios
    if (!username.trim() || !email.trim() || !password.trim()) {
      toast.warning("🚀 Agente, identifique-se corretamente antes de prosseguir.")
      return;
    }

    //confirmar se a senha digitada é igual a digitada no campo de confirmar senha
    if (password !== confirmPassword) {
      toast.warning("🚀 Senhas espaciais não coincidem!")
      return;
    }  

    setIsSubmitting(true); //travar o botão para evitar cliques duplos

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({ 
        username: username.trim(), //para garantir que os dados do usuário não seja enviado "em branco" pro bd
        email:email.trim(), 
        password:password.trim() })
    })    
    
    const data = await response.json().catch(() => ({})) //se o servidor retornar erro, o .catch evita que o sistema trave ao tentar ler como json

    if (response.ok) {
      toast.success("👩‍🚀 Cadastro realizado! Faça seu login.")
      navigate("/login");
    } else {
      toast.error(data.message ||"☄️ Falha ao cadastrar. Verifique os dados e tente novamente.")
    }
  
  } catch(error) {
    toast.error("📡 Erro de rede: Sem sinal com a base. Verifique sua conexão e tente novamente!", error)
    } finally {
      setIsSubmitting(false); //garantir que o botão de cadastro nunca fique travado (mesmo que o cadastro não dê certo)
    }
  }
  
  return (
<section className={styles.telaCadastro} id="tela-cadastro">
  <CosmicBackground />
    <div className={styles.containerCadastro}>
      <h2 className={styles.tituloSecao}>Crie sua conta de Agente</h2>

      <form className={styles.formCadastro} id="form-cadastro" onSubmit={handleRegister}>
        <div className={styles.campoInput}>
          <label htmlFor="nome-cadastro">Nome de Agente</label>
          <input type="text" id="nome-cadastro" 
          placeholder="Ex: Capitã Estelar"
          value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
   
        <div className={styles.campoInput}>
          <label htmlFor="email-cadastro">E-mail</label>
          <input type="email" id="email-cadastro" 
          placeholder="seu-email@universo.com"
          value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
   
        <div className={styles.campoInput}>
          <label htmlFor="senha-cadastro">Senha</label>
          <input type="password" id="senha-cadastro" 
          placeholder="Crie uma senha forte"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} required/>
        </div>
 
        <div className={styles.campoInput}>
          <label htmlFor="cofirma-senha-cadastro">Confirmar Senha</label>
          <input type="password" id="cofirma-senha-cadastro" placeholder="Confirme sua senha" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} required/>
        </div>

        <div className={styles.captchaContainer}>
          <input type="checkbox" id="nao-sou-robo-cadastro" required/>
          <label htmlFor="nao-sou-robo-cadastro">Eu não sou um robô</label>
        </div>
  
        <div className={styles.botoesCadastro}>
          <button type="submit" className={styles.btnCadastrarConta} id="btn-cadastrar" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Criar conta"} {/* quando apertar em criar conta/botão padrão */}
          </button>
        </div>

        <p className={styles.linkJaTemConta}>Já tem uma conta? 
          <NavLink to="/login" id="link-login"> Faça seu login</NavLink>
        </p>
  
      </form>
    </div>
  </section>
  );
}
export default RegisterPage;
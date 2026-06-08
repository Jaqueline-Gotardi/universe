import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify" //importar a lib toast que cria nossas notificações
import { Eye, EyeOff } from "lucide-react" //importar ícones de olhinho
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./RegisterPage.module.css"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

function RegisterPage() {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ showSenha, setShowSenha ] = useState(false);
  const [ showConfirmarSenha, setShowConfirmarSenha ] = useState(false);

  const navigate = useNavigate();
   
  const checkStrength = () => { //função para verificar a força da senha
    const requirements = [
      { re: /.{8,}/, label: "8+ caracteres" },
      { re: /[A-Z]/, label: "Maiúscula" },
      { re: /[0-9]/, label: "Número" },
      { re: /[^A-Za-z0-9]/, label: "Especial" } //o "^" significa não, se não for letra, nem número (sobra os caracteres especiais!)
    ];
    
    //o metCount é o contador de "sucessos"
    const metCount = requirements.filter(req => req.re.test(password)).length; //verificar as requisições no campo password
    let strengthClass = '';
    if (password.length > 0) { //se tiver algo escrito
      if (metCount <= 2) strengthClass = "weak"; //se tiver 0 a 2 requisitos cumpridos, a senha é fraca
      else if (metCount === 3) strengthClass = "medium"; //se tiver 3, ela é mediana
      else strengthClass = "strong"; //4 requisitos cumpridos => a senha é forte!
    }

    return { requirements, metCount, strengthClass };
  };
  const { requirements, strengthClass, metCount } = checkStrength();

  async function handleRegister(event) { //função que envia os dados para o servidor
    event.preventDefault();

    //verificar se os campos estão vazios
    if (!username.trim() || !email.trim()) {
      toast.warning("🚀 Agente, identifique-se corretamente antes de prosseguir.")
      return;
    }

    //aceitar username apenas com letras e números
   const usernameRegex = /^[a-zA-Z0-9 ]+$/;
   if (!usernameRegex.test(username)) {
    toast.warning("O nome de agente deve conter apenas letras, números e espaços!'");
    return;
   }

    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const extensoesProibidas = [".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip"];

    const temExtensaoProibida = extensoesProibidas.some(ext => email.toLowerCase().endsWith(ext));

    if (!emailRegex.test(email) || temExtensaoProibida) {
      toast.warning("🚀 Agente, o formato desse e-mail não é reconhecido pelas normas estelares, teste novamente!")
      return;
    }

    const dominiosComuns = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];
    const dominioDigitado = email.split("@")[1]?.toLowerCase();
    
    //lógica para detectar se o usuário digitou um domínio parecido com os comuns, mas com erro de digitação
    const dominioSuspeito = dominiosComuns.find(d => {
      const raiz = d.split(".")[0]; //gmail, hotmail, etc
      return dominioDigitado?.startsWith(raiz) && dominioDigitado !== d; //se o domínio digitado começar com a raiz de um domínio comum, mas não for exatamente igual, é suspeito (tipo gmail.com começar gmail.co)
    });

    if (dominioSuspeito) {
      toast.warning(`🚀 Você quis dizer @${dominioSuspeito}? Verifique seu e-mail antes de continuar.`);
      return;
    }
 
    //confirmar se a senha digitada é igual a digitada no campo de confirmar senha
    if (password !== confirmPassword) {
      toast.warning("🚀 Senhas espaciais não coincidem!")
      return;
    }  

    setIsSubmitting(true); //travar o botão para evitar cliques duplos

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ 
        username: username.trim(), //para garantir que os dados do usuário não seja enviado "em branco" pro bd
        email: email.trim(), 
        password: password 
      })
    })  
    
    const data = await response.json().catch(() => ({})) //se o servidor retornar erro, o .catch evita que o sistema trave ao tentar ler como json

    if (response.ok) {
      toast.success(`🚀 Quase lá, ${username}! Enviamos um link de ativação.  Verifique sua caixa de entrada e a pasta de spam.`, {
        autoClose: 8000
      })
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => navigate("/login"), 8000);
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
        <div className={styles.campoSenhaWrapper}>
          <input type={showSenha ? "text" : "password"} //mostrar a senha (quando o olhindo for ativado) e mostrar em forma de pontinhos(senha) quando o olho for desativado
          id="senha-cadastro" 
          placeholder="Crie uma senha forte"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          />

          <button type="button" 
          className={styles.iconeOlho} 
          onClick={() => setShowSenha(!showSenha)} 
          tabIndex="-1" //pula o olhindo para ir pro próximo campo quando o usuário clicar em tab
          > 
            {showSenha ? <EyeOff size={20} /> : <Eye size={20} />} {/*fazer a troca dos olhinhos completo/e com risco no meio */}
          </button>
        </div>

        <div className="passwordStrengthWrapper">  
          {/* barrinha de progresso para ver se a senha está ficando forte*/}
          <div className="strengthBar">
            <div className={`strengthProgress ${strengthClass}`}></div>
          </div>
          
          {/* listinha dos requisitos para a senha forte */}
          <ul className="requirementList">
            {requirements.map((req, i) => (
            <li 
             key={i} 
             className={`requirementItem ${req.re.test(password) ? "met" : "unmet"}`}
             >
            {req.re.test(password) ? '●' : '○'} {req.label} {/* a bolinha muda conforme o requisito for cumprido */}
            </li>
          ))}
          </ul>
        </div>
      </div>
 
        <div className={styles.campoInput}>
          <label htmlFor="cofirma-senha-cadastro">Confirmar Senha</label>
          <div className={styles.campoSenhaWrapper}>
          <input type={showConfirmarSenha ? "text" : "password"} 
          id="cofirma-senha-cadastro" placeholder="Confirme sua senha" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required
          />

          <button type="button"
          className={styles.iconeOlho} 
          onClick={() => setShowConfirmarSenha(!showConfirmarSenha)} 
          tabIndex="-1" //pula o olhindo para ir pro próximo campo quando o usuário clicar em tab
          > 
            {showConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />} {/*fazer a troca dos olhinhos completo/e com risco no meio */}
          </button>
        </div>
        </div>

        <div className={styles.captchaContainer}>
          <input type="checkbox" id="nao-sou-robo-cadastro" required/>
          <label htmlFor="nao-sou-robo-cadastro">Eu não sou um robô</label>
        </div>

        {/* mostrar o aviso da senha quando ela não atender aos requisitos esperados */} 
        {password.length > 0 && metCount < 4 && (
          <p className={styles.avisoSenha}>
            Protocolo de segurança: A senha precisa cumprir todos os requisitos para autorizar o cadastro. 🛰️
          </p>
        )}
  
        <div className={styles.botoesCadastro}>
          <button type="submit" className={styles.btnCadastrarConta} id="btn-cadastrar"
          //o botão só habilita se a senha tiver conteúdo e os 4 requisitos forem batidos
          disabled={password.length > 0 && metCount < 4 || isSubmitting}>
            {isSubmitting ? "Enviando..." : "Criar conta"} {/* quando apertar em criar conta mostra "Enviando"/ou o botão padrão */
            }
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
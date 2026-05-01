import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify"
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./PasswordRecovery.module.css";

function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRecover(event) { //função para disparar o pedido de recuperar senha, via email
    event.preventDefault();
    setLoading(true);

    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const extensoesProibidas = [".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip"];
    
    const temExtensaoProibida = extensoesProibidas.some(ext => email.toLowerCase().endsWith(ext));
    if (!emailRegex.test(email) || temExtensaoProibida) {
      toast.warning("🚀 Agente, o formato desse e-mail não é reconhecido pelas normas estelares, teste novamente!")
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3000/recuperar-senha", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email}) //enviar email para o servidor
      })

      if (response.ok) {
        setSubmitted(true)
        toast.success("🚀 E-mail de recuperação enviado! Verifique sua caixa de entrada.", {
          autoClose: 8000
        })
        setEmail("");
      } else {
        const errorData = await response.json();
        toast.error(`☄️ E-mail não encontrado na nossa base estelar`)
        console.log(errorData);
      }
    } catch {
      toast.error("📡 Falha na conexão. Tente novamente mais tarde!")
    } finally {
      setLoading(false);
    }
  }

  return (
  <section className={styles.telaRecuperarSenha}>
    <CosmicBackground />
    <div className={styles.containerRecuperarSenha}>
      
      {!submitted ? ( //se o email não for enviado, mostrar o formulário para recuperar senha
       <>
        <h2 className={styles.tituloSecao}>Resgatar Senha</h2>
        <p className={styles.descricao}>
          Insira seu e-mail de agente para receber as coordenadas de redefinição.
          </p>
          
          <form className={styles.formRecuperarSenha} onSubmit={handleRecover}>
            <div className={styles.campoInput}>
              <label htmlFor="email-recuperar-senha">E-mail de Cadastro</label>
              <input 
                type="email" 
                id="email-recuperar-senha" 
                placeholder="seu-email@universo.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
                />
            </div>
            
            <button type="submit" 
            className={styles.btnRecuperarSenha}
            disabled={loading} >
              {loading ? "Enviando" : "Enviar Instruções"}
            </button>
          </form>
          </>
          ) : (  //se o email for enviado, mostrar informações de ok
          <div className={styles.sucessoContainer}>
            <h2 className={styles.tituloSecao}>E-mail Enviado!</h2>
            <p className={styles.descricao}>
              Verifique sua caixa de entrada. As instruções de recuperação já cruzaram a atmosfera!
            </p>
          </div>
        )}
        
        <p className={styles.linkVoltar}>Lembrou a senha? 
          <NavLink to="/login"> Voltar para a base</NavLink>
        </p>
      </div>
    </section>
  );
}
export default PasswordRecovery;
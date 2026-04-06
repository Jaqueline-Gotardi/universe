import "../style/cadastro.css"
import "../style/perfil.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CosmicBackground from "../components/layout/CosmicBackground";

function RegisterPage() {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const navigate = useNavigate("")

  async function handleRegister(event) {
    event.preventDefault();

    //confirmar se a senha digitada é igual a digitada no campo de confirmar senha
    if (password !== confirmPassword) {
      alert("Senha espaciais não coincidem!")
      return;
    } 

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password })
    })

    if (response.ok) {
      const data = await response.json()
      console.log("Cadastro bem sucedido!", data)
      alert("Cadastro realizado com sucesso! Faça seu login agora.")

      navigate("/login");
    } else {
      alert("Falha ao cadastrar")
    }
  
  } catch(error) {
      alert("Erro de rede: Não foi possível concluir seu cadastro. Tente novamente mais tarde.", error)
    }
  }

    return (
<section className="tela-cadastro" id="tela-cadastro">
  <CosmicBackground />
    <div className="container-cadastro">
      <h2 className="titulo-secao">Crie sua conta de Agente</h2>
      <form className="form-cadastro" id="form-cadastro" onSubmit={handleRegister}>

        <div className="campo-input">
          <label htmlFor="nome-cadastro">Nome de Agente</label>
          <input type="text" id="nome-cadastro" 
          placeholder="Ex: Capitã Estelar"
          value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </div>
   
        <div className="campo-input">
          <label htmlFor="email-cadastro">E-mail</label>
          <input type="email" id="email-cadastro" 
          placeholder="seu-email@universo.com"
          value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
   
        <div className="campo-input">
          <label htmlFor="senha-cadastro">Senha</label>
          <input type="password" id="senha-cadastro" 
          placeholder="Crie uma senha forte"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} required/>
        </div>
 
        <div className="campo-input">
          <label htmlFor="cofirma-senha-cadastro">Confirmar Senha</label>
          <input type="password" id="cofirma-senha-cadastro" placeholder="Confirme sua senha" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} required/>
        </div>

        <div className="captcha-container">
          <input type="checkbox" id="nao-sou-robo-cadastro" required/>
          <label htmlFor="nao-sou-robo-cadastro">Eu não sou um robô</label>
        </div>
  
        <div className="botoes-cadastro">
          <button type="submit" className="btn-cadastrar-conta" id="btn-cadastrar">Criar conta</button>
        </div>

        <p className="link-ja-tem-conta">Já tem uma conta? 
          <NavLink to="/login" id="link-login"> Faça seu login</NavLink>
        </p>
  
      </form>
    </div>
  </section>
  );
}
export default RegisterPage;
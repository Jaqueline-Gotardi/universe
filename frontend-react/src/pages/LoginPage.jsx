/* loginPage.jsx (A Recepção): É a entrada do hotel. Se você não tem a chave, é aqui que você precisa se identificar para o sistema te deixar passar. */
//no React, não se escreve class, mas: className!

//import { useState } from "react";
import "../style/loginPage.css"
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


function LoginPage() { //no react as functions começam com letra Maiúscula
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate(); //hook do react-router-dom para redirecionar a página

  function handleLogin(event) {
  event.preventDefault(); //evita o recarregamento da página
  console.log("Tentando fazer login com:", email, password);

  login(); //atualiza o estado para logado
  navigate("/app"); //redireciona para o dashboard (a área que só entra quem está logado)
}

    return (   
        <section className="tela-login" id="tela-login">
    <div className="space-background login-bg">
      <div className="stars"></div>
      <div className="planets"></div> 
    </div> 
    <div className="content-wrapper">
      <div className="login-container">
        <div className="welcome-section">
          <img src="./imagens/astronaut-hero.png" alt="Astronauta" className="astronaut-hero"/>
          <h1 className="welcome-title">Bem vindo(a) ao Universe!</h1>
        </div>
 
        <form className="login-form" id="formulario" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input type="password" id="senha" 
            placeholder="Digite sua senha" 
            className="form-input" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className="mensagem-erro">* preencha este campo</p>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" 
            placeholder="Digite seu email" 
            className="form-input" 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="mensagem-erro">* preencha este campo</p>
          </div>

          <button type="submit" className="btn-primary" id="btn-primary">Entrar</button>
          <p className="cadastro-link">Não tem uma conta? <a href="#" id="cadastro-link">Cadastre-se</a></p>
        </form>
      </div>
    </div>
  </section>
  

    );  
}

export default LoginPage;  
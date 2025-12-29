import "../style/cadastro.css"
import "../style/perfil.css"
import "../style/reset.css"

function RegisterPage() {

    return (
<section className="tela-cadastro" id="tela-cadastro">
    <div className="container-cadastro">
      <h2 className="titulo-secao">Crie sua conta de Agente</h2>
      <form className="form-cadastro" id="form-cadastro">

        <div className="campo-input">
          <label htmlFor="nome-cadastro">Nome de Agente</label>
          <input type="text" id="nome-cadastro" placeholder="Ex: Capitã Estelar"/>
          <p className="mensagem-erro">* preencha este campo</p>
        </div>
  
        <div className="campo-input">
          <label htmlFor="email-cadastro">E-mail</label>
          <input type="email" id="email-cadastro" placeholder="seu-email@universo.com"/>
          <p className="mensagem-erro">* preencha este campo</p>
        </div>
  
        <div className="campo-input">
          <label htmlFor="senha-cadastro">Senha</label>
          <input type="password" id="senha-cadastro" placeholder="Crie uma senha forte"/>
          <p className="mensagem-erro">* preencha este campo</p>
        </div>
 
        <div className="campo-input">
          <label htmlFor="cofirma-senha-cadastro">Confirmar Senha</label>
          <input type="password" id="cofirma-senha-cadastro" placeholder="Confirme sua senha"/>
          <p className="mensagem-erro">* preencha este campo</p>
        </div>

        <div className="captcha-container">
          <input type="checkbox" id="nao-sou-robo-cadastro"/>
          <label htmlFor="nao-sou-robo-cadastro">Eu não sou um robô</label>
          <p className="mensagem-erro">* Marque esta caixa para continuar</p>
        </div>
  
        <div className="botoes-cadastro">
          <button type="submit" className="btn-cadastrar-conta" id="btn-cadastrar">Criar conta</button>
        </div>

        <p className="link-ja-tem-conta">Já tem uma conta? <a href="#" id="link-login">Faça seu login</a></p>
  
      </form>
    </div>
  </section>
  );
}
export default RegisterPage;
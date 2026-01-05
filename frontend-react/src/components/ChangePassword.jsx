import { useNavigate } from "react-router-dom";

function ChangePassword() {

    const navigate = useNavigate();

    return (
    <section class="secao-trocar-senha" id="secao-trocar-senha" >
    <div class="container-perfil">
      <h2 class="titulo-secao">Alterar Senha de Acesso</h2>
      <form class="form-trocar-senha">

        <div class="campo-input">
          <label htmlFor="senha-atual">Senha Atual</label>
          <input type="password" id="senha-atual" placeholder="Digite sua senha atual" />
        </div>
  
        <div class="campo-input">
          <label htmlFor="nova-senha">Nova Senha</label>
          <input type="password" id="nova-senha" placeholder="Digite sua nova senha" />
        </div>
  
        <div class="campo-input">
          <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
          <input type="password" id="confirmar-nova-senha" placeholder="Confirme sua nova senha" />
        </div>
  
        <div class="captcha-container">
          <input type="checkbox" id="nao-sou-robo" />
          <label htmlFor="nao-sou-robo">Eu não sou um robô</label>
        </div>
  
        <div class="botoes-edicao">
          <button type="submit" class="btn-salvar" id="btn-salvar-senha">Salvar Nova Senha</button>
          <button type="button" class="btn-cancelar" id="btn-cancelar-troca-senha">Cancelar</button>
        </div>
  
      </form>
    </div>
  </section>
    )
}
export default ChangePassword;
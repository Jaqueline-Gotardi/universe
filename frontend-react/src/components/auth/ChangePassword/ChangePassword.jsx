import { useNavigate } from "react-router-dom";
/* import CosmicBackground from "./CosmicBackground"; */
import CosmicBackground from "../../layout/CosmicBackground";
import styles from "./ChangePassword.module.css";

function ChangePassword() {
  const navigate = useNavigate();

  return (
    <section className={styles.secaoTrocarSenha} id="secao-trocar-senha">
      <CosmicBackground />

      <div className={styles.containerPerfil}>
        <h2 className={styles.tituloSecao}>Alterar Senha de Acesso</h2>
        <form className={styles.formTrocarSenha}>
          <div className={styles.campoInput}>
            <label htmlFor="senha-atual">Senha Atual</label>
            <input
              type="password"
              id="senha-atual"
              placeholder="Digite sua senha atual"
            />
          </div>

          <div className={styles.campoInput}>
            <label htmlFor="nova-senha">Nova Senha</label>
            <input
              type="password"
              id="nova-senha"
              placeholder="Digite sua nova senha"
            />
          </div>

          <div className={styles.campoInput}>
            <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
            <input
              type="password"
              id="confirmar-nova-senha"
              placeholder="Confirme sua nova senha"
            />
          </div>

          <div className={styles.captchaContainer}>
            <input type="checkbox" id="nao-sou-robo" />
            <label htmlFor="nao-sou-robo">Eu não sou um robô</label>
          </div>

          <div className={styles.botoesEdicao}>
            <button
              type="submit"
              className={styles.btnSalvar}
              id="btn-salvar-senha"
              onClick={() => navigate("/app/profile")}
            >
              Salvar Nova Senha
            </button>
            <button
              type="button"
              className={styles.btnCancelar}
              id="btn-cancelar-troca-senha"
              onClick={() => navigate("/app/profile")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChangePassword;
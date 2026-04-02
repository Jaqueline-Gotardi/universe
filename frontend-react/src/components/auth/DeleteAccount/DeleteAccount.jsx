import { useNavigate } from "react-router-dom";
/* import CosmicBackground from "./CosmicBackground"; */
import CosmicBackground from "../../layout/CosmicBackground";
import { useMemo, useState } from "react";
import styles from "./DeleteAccount.module.css";

function DeleteAccount() {
  const [confirmText, setConfirmText] = useState("");

  const canDelete = useMemo(
    () => confirmText.trim().toUpperCase() === "APAGAR",
    [confirmText]
  );

  const navigate = useNavigate();

  return (
    <section id="detalhe-apagar-conta" className={styles.telaApagarConta}>
      <CosmicBackground />

      <button
        className={styles.backButton}
        onClick={() => navigate("/app/extras-menu")}
        aria-label="Voltar para a página anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        Voltar
      </button>

      <div className={styles.containerConteudo}>
        <div className={styles.iconeAlerta}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
        </div>

        <div className={styles.painelConfirmacao}>
          <h2 className={styles.titleApagarConta}>Apagar Conta</h2>

          <p className={styles.mensagemPersuasiva}>Esta ação é irreversível e removerá permanentemente todos os seus dados</p>

          <div className={styles.mensagensAlerta}>
            <div className={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Todos os seus dados serão excluídos permanentemente</p>
            </div>

            <div className={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Seu histórico de exploração será perdido</p>
            </div>

            <div className={styles.mensagensAlertaItem}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              </div>
              <p>Não será possível recuperar sua conta</p>
            </div>
          </div>

          <div className={styles.confirmarcaoApagarConta}>
            <label htmlFor="confirmacao-apagar-conta">Digite <span className={styles.spanConfirmacao}>"APAGAR"</span> para confirmar:</label>
            <input
              type="text"
              id="confirmacao-apagar-conta"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Digite aqui..."
              className={styles.confirmacaoInput}
            />
          </div>
        </div>

        <button type="button" aria-label="Voltar para a página inicial" onClick={() => navigate("/app/extras-menu")} className={styles.botaoVoltarHome}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          Manter conta segura
        </button>

        <button
          type="button"
          aria-label="Apagar conta"
          disabled={!canDelete}
          className={styles.botaoApagarConta}
          style={{
            opacity: canDelete ? 1 : 0.5,
            cursor: canDelete ? "pointer" : "not-allowed",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
          Apagar conta
        </button>
      </div>

      <span className={styles.textoSeguranca}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
        Sua segurança é nossa prioridade no cosmos
      </span>
    </section>
  );
}

export default DeleteAccount;
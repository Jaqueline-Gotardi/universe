import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./ResetPassword.module.css";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token"); //pegar o token da URL

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(event) {
    event.preventDefault();

    if (novaSenha !== confirmarSenha) {
      toast.warning("🚀 As coordenadas de senha não coincidem, Agente!");
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:3000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, novaSenha }),
      });

      if (response.ok) {
        toast.success("🛰️ Senha redefinida! Redirecionando para a base...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        const errorData = await response.json();
        toast.error(`☄️ ${errorData.message}`);
      }
    } catch {
      toast.error("📡 Falha na comunicação com o centro de comando.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.telaReset}>
      <CosmicBackground />
      <div className={styles.containerReset}>
        <h2 className={styles.titulo}>Nova Credencial</h2>
        <p className={styles.descricao}>
          Defina sua nova chave de acesso para a Universe.
        </p>

        <form onSubmit={handleReset} className={styles.form}>
          <div className={styles.campo}>
            <label>Nova Senha</label>
            <input
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
              placeholder="Digite a nova senha"
            />
          </div>

          <div className={styles.campo}>
            <label>Confirmar Senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              placeholder="Repita a nova senha"
            />
          </div>

          <button type="submit" disabled={loading} className={styles.btn}>
            {loading ? "Atualizando..." : "Salvar Nova Senha"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default ResetPassword;
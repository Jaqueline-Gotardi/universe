import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react"; //importar ícones de olhinho

import CosmicBackground from "../../layout/CosmicBackground";
import styles from "./ChangePassword.module.css";

function ChangePassword() {
  const navigate = useNavigate();

  const [ senhaAtual, setSenhaAtual ] = useState("");
  const [ novaSenha, setNovaSenha ] = useState("");
  const [ confirmarSenha, setConfirmarSenha ] = useState("");
  const [ isRobotChecked, setRobotChecked ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const [ showSenhaAtual, setShowSenhaAtual ] = useState(false);
  const [ showNovaSenha, setShowNovaSenha ] = useState(false);
  const [ showConfirmarSenha, setShowConfirmarSenha ] = useState(false);

  const checkStrength = () => {
    //função para verificar a força da senha
    const requirements = [
      { re: /.{8,}/, label: "8+ caracteres" },
      { re: /[A-Z]/, label: "Maiúscula" },
      { re: /[0-9]/, label: "Número" },
      { re: /[!@#$%^&*(),.?":{}|<>]/, label: "Especial" }, //o "^" significa não, se não for letra, nem número (sobra os caracteres especiais!)
    ];

    //o meCount é o contador de "sucessos"
    const metCount = requirements.filter((req) =>
      req.re.test(novaSenha),
    ).length; //verificar as requisições no campo password
    let strengthClass = "";
    if (novaSenha.length > 0) {
      //se tiver algo escrito
      if (metCount <= 2)
        strengthClass = styles.weak; //se tiver 0 a 2 requisitos cumpridos, a senha é fraca
      else if (metCount === 3)
        strengthClass = styles.medium; //se tiver 3, ela é mediana
      else strengthClass = styles.strong; //4 requisitos cumpridos => a senha é forte!
    }

    return { requirements, metCount, strengthClass };
  };
  const { requirements, strengthClass, metCount } = checkStrength();


  //função para verificar os dados e salvar a alteração de senha
  const salvarAlteracoes = async (e) => {
    e.preventDefault();

    if (!senhaAtual.trim() || !novaSenha.trim() || !confirmarSenha.trim()) {
      return toast.error("⚠️ Por favor, preencha todos os campos!");
    }

    if (senhaAtual.trim() === novaSenha.trim()) {
      return toast.error("❌ A nova senha não pode ser igual à senha atual!")
    }

    if (novaSenha.trim() !== confirmarSenha.trim()) {
      return toast.error("❌ As novas senhas não coincidem!");
    }

    if (!isRobotChecked) {
      return toast.error("🤖 Por favor, prove que você não é um robô.");
    }

    setIsSubmitting(true); //travar o botão para evitar cliques duplos

    try { 
      const response = await fetch("http://localhost:3000/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({senhaAtual, novaSenha}) 
      })

      const data = await response.json();

      if (response.ok) {
        toast.success("🚀 Senha alterada com sucesso!")
        setTimeout(() => navigate("/app/profile"), 1500);
      } else {
        toast.error(`❌ Erro: ${data.message}`);
        setIsSubmitting(false);
      }
    } catch {
      toast.error("📡 Falha na conexão. Tente novamente mais tarde!")
      setIsSubmitting(false);
  };
};
 
  return (
    <section className={styles.secaoTrocarSenha} id="secao-trocar-senha">
      <CosmicBackground />

      <div className={styles.containerPerfil}>
        <h2 className={styles.tituloSecao}>Alterar Senha de Acesso</h2>
        <form className={styles.formTrocarSenha}>
          <div className={styles.campoInput}>
            <label htmlFor="senha-atual">Senha Atual</label>
            <div className={styles.campoSenhaWrapper}>
              <input
                type={showSenhaAtual ? "text" : "password"} //mostrar a senha (quando o olhindo for ativado) e mostrar em forma de pontinhos(senha) quando o olho for desativado
                id="senha-atual"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                placeholder="Digite sua senha atual"
                required
              />
              <button
                type="button"
                className={styles.iconeOlho}
                onClick={() => setShowSenhaAtual(!showSenhaAtual)}
                tabIndex="-1" //pula o olhindo para ir pro próximo campo quando o usuário clicar em tab
              >
                {showSenhaAtual ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
                {/*fazer a troca dos olhinhos completo/e com risco no meio */}
              </button>
            </div>
          </div>

          <div className={styles.campoInput}>
            <label htmlFor="nova-senha">Nova Senha</label>
            <div className={styles.campoSenhaWrapper}>
            <input
              id="nova-senha"
              type={showNovaSenha ? "text" : "password"}
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              placeholder="Digite sua nova senha"
              required
            />
            <button
                type="button"
                className={styles.iconeOlho}
                onClick={() => setShowNovaSenha(!showNovaSenha)}
                tabIndex="-1" 
              >
                {showNovaSenha ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
              </button>
              </div>

            <div className={styles.passwordStrengthWrapper}>
              {/* barrinha de progresso para ver se a senha está ficando forte*/}
              <div className={styles.strengthBar}>
                <div className={`${styles.strengthProgress} ${strengthClass}`} />
              </div>
              {/* listinha dos requisitos para a senha forte */}
              <ul className={styles.requirementList}>
                {requirements.map((req, i) => (
                  <li
                    key={i}
                    className={`${styles.requirementItem} ${req.re.test(novaSenha) ? styles.met : styles.unmet}`}
                  >
                    {req.re.test(novaSenha) ? "●" : "○"} {req.label}{" "}
                    {/* a bolinha muda conforme o requisito for cumprido */}
                  </li>
                ))}
              </ul>
              <div className={styles.statusContainer}>
                {novaSenha.length > 0 && metCount < 4 && (
                  <span className={styles.avisoSenhaFraca}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "5px" }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    Sua senha ainda não atingiu o nível de segurança exigido no
                    cosmos.
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.campoInput}>
            <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
            <div className={styles.campoSenhaWrapper}>
            <input
              id="confirmar-nova-senha"
              type={showConfirmarSenha ? "text" : "password"}
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirme sua nova senha"
              required
            />
            <button
              type="button"
              className={styles.iconeOlho}
              onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
              tabIndex="-1" 
              >
                {showConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
              </button>
            </div>
          </div>

          <div className={styles.captchaContainer}>
            <input
              type="checkbox"
              id="nao-sou-robo"
              checked={isRobotChecked}
              onChange={(e) => setRobotChecked(e.target.checked)}
              required
            />
            <label htmlFor="nao-sou-robo">Eu não sou um robô</label>
          </div>

          <div className={styles.botoesEdicao}>
            <button
              type="submit"
              id="btn-salvar-senha"
              className={styles.btnSalvar}
              onClick={salvarAlteracoes}
              //o botão só habilita se a senha tiver conteúdo e os 4 requisitos forem batidos
              disabled={(novaSenha.length > 0 && metCount < 4) || isSubmitting}
            >
              {isSubmitting ? "Salvando..." : "Salvar nova senha"}
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
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react" //importar ícones de olhinho
import { toast } from "react-toastify";

import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./ResetPassword.module.css";

function ResetPassword() {
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token"); //pegar o token da URL

  const [ novaSenha, setNovaSenha ] = useState("");
  const [ confirmarSenha, setConfirmarSenha ] = useState("");
  const [ showNovaSenha, setShowNovaSenha ] = useState(false);
  const [ showConfirmarSenha, setShowConfirmarSenha ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const checkStrength = () => { //função para verificar a força da senha
    const requirements = [
      { re: /.{8,}/, label: "8+ caracteres" },
      { re: /[A-Z]/, label: "Maiúscula" },
      { re: /[0-9]/, label: "Número" },
      { re: /[^A-Za-z0-9]/, label: "Especial" } //o "^" significa não, se não for letra, nem número (sobra os caracteres especiais!)
    ];
      
    //o metCount é o contador de "sucessos"
    const metCount = requirements.filter(req => req.re.test(novaSenha)).length; //verificar as requisições no campo password
    let strengthClass = '';
    if (novaSenha.length > 0) { //se tiver algo escrito
      if (metCount <= 2) strengthClass = "weak"; //se tiver 0 a 2 requisitos cumpridos, a senha é fraca
      else if (metCount === 3) strengthClass = "medium"; //se tiver 3, ela é mediana
      else strengthClass = "strong"; //4 requisitos cumpridos => a senha é forte!
    }

    return { requirements, metCount, strengthClass };
  };
  const { requirements, strengthClass, metCount } = checkStrength();

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
        setNovaSenha("");
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
            <div className={styles.campoSenhaWrapper}>
            <input
              type={showNovaSenha ? "text" : "password"}
              value={novaSenha}
              className={styles.formInput} 
              onChange={(e) => setNovaSenha(e.target.value)}
              placeholder="Digite a nova senha"
              required
            />
            <button type="button" 
            className={styles.iconeOlho} 
            onClick={() => setShowNovaSenha(!showNovaSenha)} 
            tabIndex="-1"
            > 
            {showNovaSenha ? <EyeOff size={20} /> : <Eye size={20} />}
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
                  className={`requirementItem ${req.re.test(novaSenha) ? "met" : "unmet"}`}
                  >
                  {req.re.test(novaSenha) ? '●' : '○'} {req.label} {/* a bolinha muda conforme o requisito for cumprido */}
                  </li>
              ))}
              </ul>
            </div>
          </div>

          <div className={styles.campo}>
            <label>Confirmar Senha</label>
            <div className={styles.campoSenhaWrapper}>
            <input
              type={showConfirmarSenha ? "text" : "password"}
              value={confirmarSenha}
              className={styles.formInput} 
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Repita a nova senha"
              required
            />
            <button type="button" 
            className={styles.iconeOlho} 
            onClick={() => setShowConfirmarSenha(!showConfirmarSenha)} 
            tabIndex="-1"
            > 
            {showConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className={styles.btn}
            disabled={novaSenha.length > 0 && metCount < 4 || loading}>
            {loading ? "Atualizando..." : "Salvar Nova Senha"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default ResetPassword;
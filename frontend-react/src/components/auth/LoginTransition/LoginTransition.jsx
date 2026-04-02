import { useEffect, useState } from "react"
import { BackroundAnimationLogin } from "../../layout/BackgroundAnimationLogin"
import styles from "./LoginTransition.module.css"

const Status_messages = [
  "Inicializando sistemas de navegação. . .",
  "Calibrando sensores quânticos. . .",
  "Mapeando buracos de minhoca. . .",
  "Frequências galácticas detectadas!",
  "Conexão com a estação espacial estabelecida.",
  "Missão autorizada. Bem-vindo, cosmonauta!",
];

export function LoginTransition({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [statusId, setStatusId] = useState(0);

  //mostrar radar antes da barra de progresso
  useEffect(() => {
    const timer = setTimeout(() => setShowProgress(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  //calcular o progresso da barra
  useEffect(() => {
    if (!showProgress) return;
    let current = 0;
    const tick = setInterval(() => {
      //velocidade da barra de progresso
      const speed = current < 30 ? 0.9 : current < 65 ? 1 : 3;
      current += speed;
      
      if (current >= 100) {
        current = 100;
        clearInterval(tick);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 2100);
      }
      setProgress(Math.floor(current));
    }, 50);
    return () => clearInterval(tick);
  }, [showProgress, onComplete]); //só executa quando showProgress mudar para true, ou se a função onComplete mudar

  //para trocar as mensagens de status
  useEffect(() => {
    if (!showProgress) return;
    const interval = setInterval(() => {
      setStatusId((i) => Math.min(i + 1, Status_messages.length - 1));
    }, 1150);
    return () => clearInterval(interval);
  }, [showProgress]);

  return (
    <div className={styles.overlay}>
      <BackroundAnimationLogin />

      <div className={styles.containerRadar}>
        <div className={styles.radarWrap}>
          <svg width="100%" height="100%" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* anel externo */}
            <circle cx="112" cy="112" r="108" stroke="#2053B3" strokeWidth="1.5" opacity="0.35" />

            {/* anel do meio */}
            <circle cx="112" cy="112" r="75" stroke="#2053B3" strokeWidth="1" opacity="0.25" />
            {/* anel interno */}
            <circle cx="112" cy="112" r="42" stroke="#2053B3" strokeWidth="1" opacity="0.2" />
            <circle cx="112" cy="112" r="12" stroke="#2053B3" strokeWidth="1" opacity="0.1" />
            {/* linhas cruzadas */}
            <line x1="112" y1="4" x2="112" y2="220" stroke="#2053B3" strokeWidth="0.5" opacity="0.15" />
            <line x1="4" y1="112" x2="220" y2="112" stroke="#2053B3" strokeWidth="0.5" opacity="0.15" />
            <line x1="35" y1="35" x2="189" y2="189" stroke="#2053B3" strokeWidth="0.5" opacity="0.1" />
            <line x1="189" y1="35" x2="35" y2="189" stroke="#2053B3" strokeWidth="0.5" opacity="0.1" />

            {/* anel de brilho externo */}
            <circle cx="112" cy="112" r="110" stroke="#2053B3" strokeWidth="3" opacity="0.08" />

            {/* ponto central */}
            <circle cx="112" cy="112" r="4" fill="#2053B3">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* linha de varredura */}
            <line x1="112" y1="112" x2="220" y2="112" stroke="#2053B3" strokeWidth="2" opacity="0.8" transform="rotate(0 112 112)">
              <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" />
            </line>

            {/* cone de varredura*/}
            <path d="M 112 112 L 220 112 A 108 108 0 0 0 196.4 44.7 Z" fill="#2053B3" opacity="0.08">
              <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M 112 112 L 220 112 A 108 108 0 0 0 208.8 76 Z" fill="#2053B3" opacity="0.15">
              <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" />
            </path>

            {/* sinais */}
            <circle cx="148" cy="60" r="4" fill="#2053B3">
              <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="70" cy="155" r="3.5" fill="#2053B3">
              <animate attributeName="r" values="1.5;4.5;1.5" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
              <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
            </circle>
            <circle cx="165" cy="140" r="3" fill="#2053B3">
              <animate attributeName="r" values="1;4;1" dur="2.5s" repeatCount="indefinite" begin="1.8s" />
              <animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" begin="1.8s" />
            </circle>

            {/* marcas de borda */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="112"
                y1="8"
                x2="112"
                y2="16"
                stroke="#2053B3"
                strokeWidth="1"
                opacity="0.3"
                transform={`rotate(${deg} 112 112)`}
              />
            ))}
          </svg>
        </div>

        <div className={styles.radarLabel}>◈ Scanner estelar ativado ◈</div>
      </div>

      <div className={styles.scanText}>▸ Varrendo Frequências. . .</div>

      <div
        className={styles.progressSection}
        style={{
          opacity: showProgress ? 1 : 0,
          transform: showProgress ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className={styles.progressSintonia}>⬡ &nbsp; Sintonizando frequências galácticas &nbsp; ⬡</div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          >
            <div className={styles.astronautContainer}>
              {/* corpo do astronauta */}
              <div className={styles.astronautBody}>
                <div className={styles.astronautAura} />

                {/* capacete */}
                <div className={styles.helmet}>
                  {/* viseira */}
                  <div className={styles.visor}>
                    <div className={styles.visorReflection} />
                  </div>
                </div>

                {/* mochila de oxigênio */}
                <div className={styles.oxygen} />

                {/* traje espacial */}
                <div className={styles.traje}>
                  <div className={styles.trajeDetail} />
                </div>

                {/* pernas */}
                <div className={styles.legLeft} />
                <div className={styles.legRight} />

                {/* braços */}
                <div className={styles.armLeft} />
                <div className={styles.armRight} />
              </div>
            </div>
          </div>
        </div>
        <span className={styles.progressCount}>{progress}%</span>
        <span className={styles.progressStatus}>{Status_messages[statusId]}</span>
      </div>
    </div>
  )
}
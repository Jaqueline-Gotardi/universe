//essa tela é exibida quando a internet cai ou oscila

import { useEffect, useState } from "react"
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./OfflineScreen.module.css"

function OfflineScreen() {
    const [ isOffline, setIsOffline ] = useState(!navigator.onLine); //não está online
    
    //lógica de mostrar a tela 404 somente quando a internet cair
    useEffect(() => {
      const handleOnline = () => setIsOffline(false);
      const handleOffline = () => setIsOffline(true);

      //ouvir quando a internet cair ou voltar
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      //limpar os eventos de escuta
      return() => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      }
    },[])

    //só mostra a tela, se estiver offline, se não estiver a OfflineScreen não aparece (nulo)
    if (!isOffline) return null;
    
    return (
    <div className={styles.containerNotFound}>
      <CosmicBackground />

      <div className={styles.contentWrapper} aria-hidden="true">      
        {/*Svg de buraco negro */}
        <div className={styles.buracoNegro}>
          <svg width="340" height="300" viewBox="0 40 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* gradiente */}
          <radialGradient id="voidCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="70%" stopColor="#000000" />
            <stop offset="100%" stopColor="#0a0a1a" />
          </radialGradient>
          <radialGradient id="eventHorizon" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="transparent" />
            <stop offset="78%" stopColor="#ff6b35" stopOpacity="0.5">
              <animate attributeName="stop-color" values="#ff6b35;#ff4a6e" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor="#ff4a6e" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="60%" stopColor="transparent" />
            <stop offset="80%" stopColor="#4a9eff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#7b4aff" stopOpacity="0.07" />
          </radialGradient>        
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* brilho de fundo */}
        <circle cx="210" cy="210" r="150" fill="url(#outerGlow)" />
        {/* disco */}
        <g style={{ animation: `${styles.bhRotate} 30s linear infinite`, transformOrigin: "210px 210px" }}>
          <ellipse cx="210" cy="210" rx="155" ry="40" fill="none" stroke="#ff6b35" strokeWidth="0.5" opacity="0.12" />
          <ellipse cx="210" cy="210" rx="140" ry="36" fill="none" stroke="#ffa726" strokeWidth="1" opacity="0.15" strokeDasharray="8 12" style={{ animation: "accretionFlow 3s linear infinite" }} />
          <ellipse cx="210" cy="210" rx="125" ry="32" fill="none" stroke="#ff4a6e" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 8" style={{ animation: "accretionFlow 2s linear infinite" }} />
          <ellipse cx="210" cy="210" rx="110" ry="28" fill="none" stroke="#ffa726" strokeWidth="2" opacity="0.25" strokeDasharray="6 4" style={{ animation: "accretionFlow 1.5s linear infinite" }} />
          <ellipse cx="210" cy="210" rx="95" ry="24" fill="none" stroke="#ff6b35" strokeWidth="2.5" opacity="0.35" strokeDasharray="3 5" style={{ animation: "accretionFlow 1.2s linear infinite" }} />
        </g>
        {/*evento horizontal */}
        <circle cx="210" cy="210" r="67" fill="url(#eventHorizon)" filter="url(#softGlow)" />
        {/* centro negro pro wifi */}
        <circle cx="210" cy="210" r="47" fill="url(#voidCenter)" />
        <circle cx="210" cy="210" r="47" fill="none" stroke="#ff6b35" strokeWidth="0.8" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
              
        {/* wifi */}
        <g style={{ animation: `${styles.wifiFloat} 5s ease-in-out infinite`, transformOrigin: "390px 190px"}}>
        {/* sinal de wifi sumindo */}
        <path d="M183 185 Q210 165 237 185" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.15" />
        <path d="M190 192 Q210 178 230 192" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M197 199 Q210 190 223 199" stroke="#4a9eff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* ponto central do wifi */}
        <circle cx="210" cy="205" r="3" fill="#ff4a6e">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        {/* corte do wifi */}
        <line x1="180" y1="210" x2="240" y2="180" stroke="#ff4a6e" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </g>

        {/* ondas sinalizadoras */}
        {[0, 1, 2].map(i => (
          <circle key={1} cx="210" cy="210" fill="none" stroke="#4a9eff" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="r" values="50;180" dur="5s" begin={`${i * 1.7}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0" dur="5s" begin={`${i * 1.7}s`} repeatCount="indefinite" />
          </circle>
        ))}
        </svg>
        </div>
        </div>
        
        <h1 className={styles.titulo}>Conexão Perdida no Espaço</h1>
        <p className={styles.paragrafo}>Parece que seu sinal se perdeu entre as estrelas. Verifique sua conexão e tente novamente.</p>
        
        <div className={styles.containerInfoAdicional}>
          <div className={styles.bolinhaDeConexao} />
          <span className={styles.paragrafoExtra}>AGUARDANDO RECONEXÃO. . .</span>
          </div>
          </div>
          )
        }
export default OfflineScreen;
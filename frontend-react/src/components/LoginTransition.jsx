// Animação de login
// 1. O radar deve pular para a tela do usuário assim que ele logar com suas credenciais
// 2. Esse radar deve ficar flutuando 
// 3. Após passar 2 segundos, uma barra de progresso é processada
// 4. Um astronata caminha até o fim da barra, deixando rastros de carregamento... 
// 5. Após a barra de progresso ficar 100%, o usuário é jogado para o Dashboard

//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import { useState } from "react"
import { BackroundAnimationLogin } from "./BackgroundAnimationLogin"

export function LoginTransition() {

  const [progress, setProgress ] = useState(0);

  const styles = {
    containerRadar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },

    radarWrap: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "280px",
      height: "280px",
      marginBottom: "20px",
      animation: "textAnimation 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
    },

    radarLabel: {
      color: "#00e5ff",
      opacity: "0.6",
      fontFamily: "'Orbitron', monospace",
      fontSize: "0.5rem",
      marginBottom: "7px",
      letterSpacing: "0.3em",
      transform: "translateX (-50%)",
      textTransform: "uppercase",
    },

    scanText: {
      fontFamily: "'Orbitron', monospace",
      fontSize: "0.7rem",
      color: "#00e5ff",
      letterSpacing: "0.25rem",
      opacity: "0.7", 
      textTransform: "uppercase",
      animation: "blink 1.4s ease-in-out infinite",
      marginBottom: "40px",
      fontWeight: "500",
    },

    progressSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
     /*  width: "380px",
      maxWidth: "90vw", */
      gap: "16px",
     /*  opacity: "0", */
      transition: "0.8 ease",
    },

    progressSintonia: {
      color: "gold",
      fontSize: "0.65rem",
      fontFamily: "'Orbitron', monospace",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.3rem",
      fontWeight: "500",
    },

    progressBar: {
      position: "relative",
      border: "1px solid #00e5ff33",
      width: "100%",
      height: "36px",
      background: "#05111f",
      borderRadius: "50px",
      boxShadow: "0 0 20px #00e5ff11, inset 0 0 20px #001020",
    },

    progressFill: {
      position: "relative",
      background: "linear-gradient(90deg, #001a2e, #0066cc, #00e5ff)",
      width: "0%",
      heigth: "100%",
      borderRadius: "2px",
      transition: "width 0.2s linear",
      boxShadow: "0 0 20px #00e5ff55",
    },

    astronaut: {
      position: "absolute",
      top: "0px",
      transform: "translateX(60%)",
      /* left: "30%", */
      transition: "left 0.2s linear",
      zIndex: 10, 
    },

    astronautBody: {
      position: "relative",
      width: "28px",
      height: "29px",
      animation: "astronautBob 0.6s ease-in-out infinite",
    },

    astronautAura: {
      position: "absolute",
      inset: "-8px",
      background: "radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)",
      borderRadius: "50%",
      animation: "auraPulse 1s ease-in-out infinite",
    },

    helmet: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-47%)",
      width: "20px",
      height: "20px",
      background: "linear-gradient(160deg, #e0e8f0, #b0bec5)",
      borderRadius: "50%",
      border: "2px solid #90a4ae",
      zIndex: 10, 
    },

    visor: {
      background: "linear-gradient(135deg, #00bcd4, #1565c0)",
      width: "15px",
      height: "10px",
      borderRadius: "50%",
      position: "absolute",
      top: "3px",
      left: "50%",
      transform: "translateX(-50%)"
    },

    visorReflection: {
      background: "rgba(255,255,255,0.65)",
      borderRadius: "50%",
      width: "4px",
      height: "4px",
      position: "absolute",
      top: "2px",
      left: "2px",
    },

    oxygen: {
      background: "#78909c",
      borderRadius: "2px",
      position: "absolute",
      width: "18px",
      height: "14px",
      top: "15px",
      left: "3px",
    },

    traje: {
      background: "linear-gradient(180deg, #eceff1, #cfd8dc)",
      borderRadius: "6px",
      border: "1px solid #b8bec5",
      position: "absolute",
      top: "19px",
      left: "50%",
      width: "18px",
      height: "14px",
      transform: "translateX(-50%)",
    },

    trajeDetail: {
      background: "#00bcd4",
      position: "absolute",
      top: "4px",
      left: "50%",
      width: "7px",
      height: "4px",
      borderRadius: "50px",
      transform: "translateX(-50%)",
    },

    legLeft: {
      position: "absolute",
      background: "#cfd8dc",
      bottom: "-8px",
      left: "6px",
      width: "6px",
      height: "6px",
      borderRadius: "0 0 4px 4px",
      transformOrigin: "top center",
      animation: "legLeft 0.3s ease-in-out infinite",
    },

    legRight: {
      position: "absolute",
      background: "#cfd8dc",
      bottom: "-8px",
      right: "6px",
      width: "6px",
      height: "6px",
      borderRadius: "0 0 4px 4px",
      transformOrigin: "top center",
      animation: "legRight 0.3s ease-in-out infinite",
    },

    armLeft: {
      position: "absolute",
      top: "20px",
      left: "-0px",
      width: "6px",
      height: "8px",
      background: "#cfd8dc",
      borderRadius: "50px",
      transformOrigin: "top center",
      animation: "armLeft 0.4s ease-in-out infinite",
    },

    armRight: {
      position: "absolute",
      top: "20px",
      right: "-0px",
      width: "6px",
      height: "8px",
      background: "#cfd8dc",
      borderRadius: "50px",
      transformOrigin: "top center",
      animation: "armRight 0.4s ease-in-out infinite",
    },

    progressCount: {
      color: "#00e5ff",
      fontFamily: "'Orbitron', monospace",
      fontSize: "1.4rem",
      fontWeight: "700",
      textShadow: "0 0 20px",
    },

    progressStatus: {
      color: "#ffffff44",
      fontSize: "1rem",
      letterSpacing: "0.2rem",
    }
  }
  
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50" style={{zIndex: 1}}>
    <BackroundAnimationLogin />

    <div className="relative w-56 h-56 animate-slide-up" style={styles.containerRadar}>
      <div style={styles.radarWrap}>
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
        <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" /></path>
      <path d="M 112 112 L 220 112 A 108 108 0 0 0 208.8 76 Z" fill="#2053B3" opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" /></path>

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

      <div style={styles.radarLabel}>◈ Scanner estelar ativado ◈</div>
    </div>

    <div style={styles.scanText}>▸ Varrendo Frequências. . .</div>

    <div style={styles.progressSection}>
      <div style={styles.progressSintonia}>⬡ &nbsp; Sintonizando frequências galácticas &nbsp; ⬡</div>
      <div style={styles.progressBar}>
        <div style={styles.progressFill}>

          <div style={{...styles.astronaut, left: `calc(${progress}% - 16px)`}}>
            {/* corpo do astronauta */}
            <div style={styles.astronautBody}>
              <div style={styles.astronautAura} />

                {/* capacete */}
                <div style={styles.helmet}>
                  {/* viseira */}
                  <div style={styles.visor}>
                    <div style={styles.visorReflection} />
                  </div>
                  </div> 

                  {/* mochila de oxigênio */}
                  <div style={styles.oxygen} />

                  {/* traje espacial */}
                  <div style={styles.traje}>
                    <div style={styles.trajeDetail} />
                  </div>

                  {/* pernas */}
                  <div style={styles.legLeft} />
                  <div style={styles.legRight} />

                  {/* braços */}
                  <div style={styles.armLeft} />
                  <div style={styles.armRight} />
            </div>
          </div>
          
        </div>
      </div>
      <div style={styles.progressCount}>0%</div>
      <div style={styles.progressStatus}>Inicializando sistemas de navegação...</div>
    </div>

    <style>
      {`
      @keyframes textAnimation {
      0 % { transform: scale(0) rotate(-180deg); opacity: 0; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }

       @keyframes blink 
       { 
       0%, 100% { opacity:0.4 }
       50% { opacity: 1 }
       }
       

       progressBar::before {
       position: absolute,
       inset: 0,
       content: '',
       background-image: repeating-linear-gradient(90deg, #00e5ff08 0px, #00e5ff08 1px, transparent 1px, transparent 38px),
       z-index: 1,
       }
       progressFill::after {
       position: absolute,
       content: '',
       background: linear-gratient(90deg, transparent, #00e5ff66),
       right: 0,
       top: 0,
       bottom: 0,
       width: 40px,
       animation: tracks 1s ease-in-out infinite,
       }
       @keyframes tracks {
       0%, 100% { opacity: 0.5 }
       50% { opacity: 1 }
       }
      `}
       
    </style>
    </div>
    )
  }
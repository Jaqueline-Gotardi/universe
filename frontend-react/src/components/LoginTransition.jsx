// Animação de login
// 1. O radar deve pular para a tela do usuário assim que ele logar com suas credenciais
// 2. Esse radar deve ficar flutuando 
// 3. Após passar 2 segundos, uma barra de progresso é processada
// 4. Um astronata caminha até o fim da barra, deixando rastros de carregamento... 
// 5. Após a barra de progresso ficar 100%, o usuário é jogado para o Dashboard

//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import CosmicBackground from "./CosmicBackground"

export function LoginTransition() {

  const styles = {
    radarWrap: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "280px",
      height: "280px",
      animation: "textAnimation 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
    },

    radarLabel: {
      color: "#00e5ff",
      fontFamily: "'Orbitron', monospace",
      fontSize: "0.8rem",
      marginBottom: "20px",
      transform: "translateX (-50%)",
    },

    scanText: {
      fontFamily: "'Orbitron', monospace",
      fontSize: "0.7rem",
      color: "#00e5ff",
      letterSpacing: "0.25rem",
      opacity: "0.7", 
      textTransform: "uppercase",
      animation: "pulsar 1.4s ease-in-out infinite",
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
      color: "#ffd60a",
      fontSize: "0.6rem",
      fontFamily: "'Orbitron', monospace",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.3rem",
    },

    progressBar: {
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
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 animate-slide-up" style={{zIndex: 1}}>
    <CosmicBackground />

    <div className="relative w-56 h-56 animate-slide-up">
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

      <div style={styles.radarLabel}>Scanner estelar ativado </div>
    </div>

    <div style={styles.scanText}>Varrendo Frequências. . .</div>

    <div style={styles.progressSection}>
      <div style={styles.progressSintonia}>Sintonizando frequências galácticas</div>
      <div style={styles.progressBar}>
        <div style={styles.progressFill}>
          <div style={styles.astronaut}></div>
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

       @keyframes pulsar {
       { 
       0%, 100% { opacity:0.4 }
       50% { opacity: 1 }
       }
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









//ACESSAR NODELOS ESSES 3 MODELOS BASES PARA COSNTRUIR A ANIMAÇÃO DE LOGIN

//https://claude.ai/chat/6fd46f59-d352-498b-8b85-fc2108c2bde0

//https://www.figma.com/make/L1HOgYsslnbl94Lb1aJeXX/Initial-screen-with-buttons?p=f&t=PSXLPJ4I89wLXpd3-0

//https://app.base44.com/apps/699cc63920bbd544d75550d8/editor/workspace/code?filePath=pages/Home.jsx
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
  
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 animate-slide-up" style={{zIndex: 1}}>
    <CosmicBackground />
    <div className="relative w-56 h-56 animate-slide-up">
      <svg width="100%" height="100%" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {/* Anel externo */}
      <circle cx="112" cy="112" r="108" stroke="#2053B3" strokeWidth="1.5" opacity="0.35" />
      
      {/* Anel do meio */}
      <circle cx="112" cy="112" r="75" stroke="#2053B3" strokeWidth="1" opacity="0.25" />
      {/* Anel interno */}
      <circle cx="112" cy="112" r="42" stroke="#2053B3" strokeWidth="1" opacity="0.2" />
      <circle cx="112" cy="112" r="12" stroke="#2053B3" strokeWidth="1" opacity="0.1" />
      {/* Linhas cruzadas */}
      <line x1="112" y1="4" x2="112" y2="220" stroke="#2053B3" strokeWidth="0.5" opacity="0.15" />
      <line x1="4" y1="112" x2="220" y2="112" stroke="#2053B3" strokeWidth="0.5" opacity="0.15" />
      <line x1="35" y1="35" x2="189" y2="189" stroke="#2053B3" strokeWidth="0.5" opacity="0.1" />
      <line x1="189" y1="35" x2="35" y2="189" stroke="#2053B3" strokeWidth="0.5" opacity="0.1" /> 
      
      {/* Anel de brilho externo */}
      <circle cx="112" cy="112" r="110" stroke="#2053B3" strokeWidth="3" opacity="0.08" />
      
      {/* Ponto central */}
      <circle cx="112" cy="112" r="4" fill="#2053B3">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
        
      {/* Linha de varredura */}
      <line x1="112" y1="112" x2="220" y2="112" stroke="#2053B3" strokeWidth="2" opacity="0.8" transform="rotate(0 112 112)">
        <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" />
        </line>
        
      {/* Cone de varredura*/}
      <path d="M 112 112 L 220 112 A 108 108 0 0 0 196.4 44.7 Z" fill="#2053B3" opacity="0.08">
        <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" /></path>
      <path d="M 112 112 L 220 112 A 108 108 0 0 0 208.8 76 Z" fill="#2053B3" opacity="0.15">
        <animateTransform attributeName="transform" type="rotate" from="0 112 112" to="360 112 112" dur="2.5s" repeatCount="indefinite" /></path>

      {/* Sinais */}
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
        
      {/* Marcas de borda */}
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
    </div>
    )
  }




//ACESSAR NODELOS ESSES 3 MODELOS BASES PARA COSNTRUIR A ANIMAÇÃO DE LOGIN

//https://claude.ai/chat/6fd46f59-d352-498b-8b85-fc2108c2bde0

//https://www.figma.com/make/L1HOgYsslnbl94Lb1aJeXX/Initial-screen-with-buttons?p=f&t=PSXLPJ4I89wLXpd3-0

//https://app.base44.com/apps/699cc63920bbd544d75550d8/editor/workspace/code?filePath=pages/Home.jsx
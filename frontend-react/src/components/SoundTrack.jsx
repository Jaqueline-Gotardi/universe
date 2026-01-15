import "../style/loginPage.css";
import { useState, useRef, useEffect } from "react";

const songs = [
  {
    title: "Conexão cósmica: Frequênica 639Hz",
    src: "/musicas/639-hz-solfeggio-frequency-connect-with-higher-self-spiritual-music-160725.mp3",
  },
  {
    title: "Ecos do Espaço Profundo",
    src: "/musicas/69-spazio-ufo-universo-stelle-328185.mp3",
  },
  {
    title: "Meditação na Nebulosa",
    src: "/musicas/calm-space-music-312291.mp3",
  },
  {
    title: "Pulsares e Galáxias distantes",
    src: "/musicas/calm-space-music-312291.mp3",
  },
  {
    title: "O canto dos Planetas",
    src: "/musicas/universe-planet-cosmic-galaxy-music-263133.mp3",
  },
  {
    title: "Sinfonia do vazio Estelar",
    src: "/musicas/universe-space-sounds-3595.mp3",
  },
];

const SoundTrack = () => {
  //SoundTrack deve ser maíscula pq vai virar uma "tag" na tela. O React EXIGE assim para não confundir com <div>, <span>, etc. . .
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBar, setShowBar] = useState(false); //controla a visibilidade da barra musical
  const [currentTrack, setCurrentTrack] = useState(0); //índice da música atual
  const [progress, setProgress] = useState(0); //progresso da música
  const audioRef = useRef(null); //valor inicial (gancho q segura o player de áudio)
  const barRef = useRef(null); //gancho q segura a barra de progresso desenhada na tela

  //só executa quando as dependências mudam (são efeitos colaterais)
  useEffect(() => {
    const audio = audioRef.current; //áudio atual
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100); //calcular progresso da música
      }
    };

    const handleEnded = () => {
      //quando a música acabar, toca a próxima
      nextTrack();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  //esse useEffect é para garantir q se a música mudar, o novo áudio vai tocar, caso o player estiver no modo "tocando"
  useEffect(
    () => {
      //se o audio atual estiver tocando (playing), ele é pego
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    },
    [currentTrack] //índice da música que foi pêga
  );

  //alternador do play
  const togglePlay = () => {
    if (!audioRef.current) return; //retorna se não for o áudio atual

    //mas, se o áudio atual estiver tocando:
    if (isPlaying) {
      audioRef.current.pause(); //pode pausar
    } else {
      audioRef.current.play().catch(() => {}); //e tocar
    }
    setIsPlaying(!isPlaying); //senão, o estado da música muda (não está tocando!)
  };

  //quando o ícone musical for clicado, a barra musical é exibida/ou escondida (é um alternador)
  const handleIconClick = (e) => {
    e.stopPropagation(); //trava o clique para não afetar oq está atrás
    setShowBar((prev) => !prev); //prev é o valor anterior do estado, (!prev) inverte esse valor
  };

  //passar uma música
  const nextTrack = () => {
    //muda o índice da música e prossegue para a próxima
    setCurrentTrack((prev) => (prev + 1) % songs.length); //usam % tracks.length para criar um loop
    setProgress(0); //se muda a música, reseta o progresso
  };

  //voltar uma música
  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  //quando o usuário clicar fora do ícone...
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        barRef.current && //se a barra existe na tela
        !barRef.current.contains(e.target)
      ) {
        //verificar se o lugar clicado NÃO está dentro da barra
        setShowBar(false); //aí esconde a barra musical
      }
    };

    //se a barra está aberta, coloca o vigia na tela
    if (showBar) {
      document.addEventListener("click", handleClickOutside);
    }

    //remover o vigia quando a barra musical fecha
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showBar]); //esse efeito depende do estado da barra musical

  return (
    <>
      {/* referencia áudio, acessa a variável de músicas, o índice, e exibe o áudio com suas informações (title). Preload => pré-carregamento */}
      <audio ref={audioRef} src={songs[currentTrack].src} preload="metadata" />

      <button
        onClick={handleIconClick}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 50,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          outline: "none",
          animation: isPlaying ? "spin-slow 8s linear infinite" : "none",
        }}
        aria-label="Abrir player de música"
      >
        <svg /* a tag que contém todos os desenhoss */
          width="56"
          height="56"
          viewBox="0 0 56 56" /* espaço de "desenho" */
          fill="none" /* preenchimento do círculo */
          xmlns="http://www.w3.org/2000/svg" /*para identificar que oq tem na tag <svg> é código SVG e não uma tag html*/
          style={{
            filter:
              "drop-shadow(0 0 12px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 24px rgba(99, 102, 241, 0.3))",
            transition: "transform 0.3s ease",
          }}
        >
          <circle /* contorno cósmico */
            cx="28"
            cy="28"
            r="26"
            stroke="url(#cosmicGradient)" /* cor da borda */
            strokeWidth="1.5" /* largura da borda */
            opacity="0.6"
            style={{
              animation: isPlaying
                ? "pulse-ring 2s ease-in-out infinite"
                : "none",
            }}
          />

          {/* as duas bolinhas (circle) centrais do ícone musical */}
          <circle cx="28" cy="28" r="20" fill="url(#nebulaCore)" />
          <circle
            cx="28"
            cy="28"
            r="14"
            fill="url(#innerCosmic)"
            opacity="0.8"
          />

          {/* ondas sonoras  do ícone da nota musical*/}
          <path /* => caminho */
            d="M35 22C37.5 24 39 26.5 39 28.5C39 30.5 37.5 33 35 35" /* forma geométrica do caminho */
            stroke="url(#waveGradient)" /*cor da borda */
            strokeWidth="2" /* largura da borda */
            strokeLinecap="round" /* a forma que as pontas do caminho serão renderizadas (redondo)*/
            opacity={isPlaying ? 1 : 0.4}
            style={{
              animation: isPlaying ? "wave 1.5s ease-in-out infinite" : "none",
            }}
          />
          <path
            d="M38 19C41.5 22 44 25 44 28.5C44 32 41.5 35 38 38"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={isPlaying ? 0.7 : 0.2}
            style={{
              animation: isPlaying
                ? "wave-delayed 1.5s ease-in-out infinite 0.3s" /* a onda começa com atraso, para criar profundidade em contraste com a outra */
                : "none",
            }}
          />
          {/* </svg> */}
          {/* </button> */}

          {/* forma "a cabeça" do ícone da nota musical */}
          <path
            d="M26 32V22L32 20V30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" /* define a forma (redonda) do encontro com as duas linhas */
            opacity="0.9"
          />

          {/* forma o círculo (ponta) do ícone da nota musical */}
          <circle cx="24" cy="32" r="3" fill="white" opacity="0.9" />
          <circle cx="30" cy="30" r="3" fill="white" opacity="0.9" />

          {/* Estrelas */}
          <circle cx="18" cy="18" r="1" fill="white" opacity="0.8" />
          <circle cx="40" cy="15" r="0.8" fill="white" opacity="0.6" />
          <circle cx="14" cy="35" r="0.6" fill="white" opacity="0.7" />

          {/* estilizações*/}
          <defs>
            {/* offeset define a distância, onde a cor deve estar posicionada, assim, criamos um efeito de transição */}
            <linearGradient id="cosmicGradient" x1="0" y1="0" x2="56" y2="56">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>

            <radialGradient id="nebulaCore" cx="0.3" cy="0.3" r="0.8">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="40%" stopColor="#312e81" />
              <stop offset="70%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            <radialGradient id="innerCosmic" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.2" />
            </radialGradient>

            <linearGradient id="waveGradient" x1="35" y1="22" x2="44" y2="35">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </button>

      {/* Barra Musical  */}
      <div /* conteiner da barra musical */
        ref={barRef}
        onClick={(e) =>
          e.stopPropagation()
        } /* para o clique, evita q a lógica de fechar a barra musical (ao clicar no vazio) seja acionada por engano */
        style={{
          position: "fixed",
          bottom: "80px",
          right: "24px",
          zIndex: 40,
          transition: "all 0.5s ease-out",
          opacity: showBar ? 1 : 0,
          transform: showBar ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showBar ? "auto" : "none",
        }}
      >
        <div /* define o quanto a música já tocou */
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)",
            backdropFilter: "blur(24px)" /* intensidade do embaçado */,
            WebkitBackdropFilter:
              "blur(24px)" /* compatibilidade com outros navegadores baseados em webkit */,
            borderRadius: "16px",
            padding: "16px",
            minWidth: "280px",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* informações da música */}
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <p
              style={{
                color: "rgba(226, 232, 240, 0.6)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "4px",
                margin: 0,
              }}
            >
              Tocando agora
            </p>
            <p
              style={{
                color: "rgba(226, 232, 240, 0.95)",
                fontWeight: 500,
                fontSize: "14px",
                margin: "4px 0",
              }}
            >
              {songs[currentTrack].title}
              {/* pegar nome da música pelo índice do array(songs) */}
            </p>
            <p
              style={{
                color: "rgba(226, 232, 240, 0.5)",
                fontSize: "12px",
                margin: "2px 0 0 0",
              }}
            >
              {currentTrack + 1} / {songs.length} {/* mostrar o índice da música atual / quantos índices são */}
            </p>
          </div>


          {/* Barra de progresso */}
          <div style={{
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.1)",
            height: "4px",
            borderRadius: "50px",
            marginBottom: "16px",
            overflow: "hidden",
          }}
          >
            <div style={{
              height: "100%",
              backgroundColor: "linear-gradiente(to right, #a78bfa, #22d3ee)",
              borderRadius: "16px",
              transition: "width 0.2s ease",
              width: `${progress}%`,
            }}>
            </div>
          </div>




        </div>



      </div>
    </>
  );
};
export default SoundTrack;
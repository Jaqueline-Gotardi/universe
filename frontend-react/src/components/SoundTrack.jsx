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
  const [progress, setProgress] = useState(0);
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

      <button onClick={handleIconClick}
      style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          animation: isPlaying ? 'spin-slow 8s linear infinite' : 'none',
        }}
        aria-label="Abrir player de música">
        
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56" /* espaço de "desenho" */
        fill="none" /* preenchimento do círculo */
        xmlns="http://www.w3.org/2000/svg" /* para identificar que oq tem na tag <svg> é código SVG e não uma tag html*/
        style={{
          filter:
            "drop-shadow(0 0 12px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 24px rgba(99, 102, 241, 0.3))",
          transition: "transform 0.3s ease",
        }}
      />

      <circle 
      cx="28"
      cy="28"
      r="26"
      stroke="url(#cosmicGradient)" /* cor da borda */
      strokeWidth="1.5" /* largura da borda */
      opacity="0.6"
      style={{
        animation: isPlaying ? 'pulse-ring 2s ease-in-out infinite' : 'none',
      }}
      />
      </button>

      <circle cx="28" cy="28" r="20" fill="url(#nebulaCore)" />
      <circle cx="28" cy="28" r="14" fill="url(#innerCosmic)" opacity="0.8" />





    </>
  );
};
export default SoundTrack;
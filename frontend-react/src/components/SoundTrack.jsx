import "../style/loginPage.css"
import { useState, useRef, useEffect } from "react";

const song = [
  { title:"Conexão cósmica: Frequênica 639Hz", src: "/musicas/639-hz-solfeggio-frequency-connect-with-higher-self-spiritual-music-160725.mp3" },
  { title: "Ecos do Espaço Profundo", src: "/musicas/69-spazio-ufo-universo-stelle-328185.mp3"},
  { title: "Meditação na Nebulosa", src: "/musicas/calm-space-music-312291.mp3"},
  { title: "Pulsares e Galáxias distantes", src: "/musicas/calm-space-music-312291.mp3"},
  { title: "O canto dos Planetas", src: "/musicas/universe-planet-cosmic-galaxy-music-263133.mp3"},
  { title: "Sinfonia do vazio Estelar", src: "/musicas/universe-space-sounds-3595.mp3"}
]; 

const SoundTrack = () => { //SoundTrack deve ser maíscula pq vai virar uma "tag" na tela. O React EXIGE assim para não confundir com <div>, <span>, etc. . .
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ showBar, setShowBar ] = useState(false); //controla a visibilidade da barra musical
  const [ currentTrack, setCurrentTrack ] = useState(0); //índice da música
  const [ progress, setProgress ] = useState(0);
  const audioRef = useRef(null); //valor inicial (ganho q segura o player de áudio)
  const barRef = useRef(null); //gancho q segura a barra de progresso desenhada na tela

  //só executa quando as dependências mudam (são efeitos colaterais)
  useEffect(() => {
    const audio = audioRef.current; //aúdio atual
    if(!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100); //calcular progresso da música
      }
    };

    const handleEnded = () => { //quando a música acabar, toca a próxima
      nextTrack();
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  },
  [currentTrack]
);
}


function SoundTrack() {

    return (
    <div className="audio-player">
    <audio id="audio-player-1" src="/musicas/639-hz-solfeggio-frequency-connect-with-higher-self-spiritual-music-160725.mp3" preload="auto"></audio>
    <audio id="audio-player-2" src="/musicas/69-spazio-ufo-universo-stelle-328185.mp3" preload="auto"></audio>
    <audio id="audio-player-3" src="/musicas/calm-space-music-312291.mp3" preload="auto"></audio>
    <audio id="audio-player-4" src="/musicas/cosmic-universe-planet-galaxy-music-263209.mp3" preload="auto"></audio>
    <audio id="audio-player-5" src="/musicas/universe-planet-cosmic-galaxy-music-263133.mp3" preload="auto"></audio>
    <audio id="audio-player-6" src="/musicas/universe-space-sounds-3595.mp3" preload="auto"></audio>

    <div className="progress-container">
      <div className="progress-outline"></div>
    </div>

    <span id="titulo-musica">Toque uma música</span>
    <div className="player-controles">
        <button id="prev-btn">Voltar</button>
        <button id="play-pause-btn">Play</button>
        <button id="next-btn">Avançar</button>
    </div>
</div>  
    )
}
export default SoundTrack;
import "../style/loginPage.css"
import { useState, useRef, useEffect } from "react";

const songs = [
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


//esse useEffect é para garantir q se a música mudar, o novo áudio vai tocar, caso o player estiver no modo "tocando"
useEffect(() => {
  //se o audio atual estiver tocando (playing), ele é pego
  if (audioRef.current && isPlaying) {
    audioRef.current.play().catch(() => {});
  }
}, [currentTrack] //índice da música que foi pêga
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
  setIsPlaying(!isPlaying) //senão, o estado da música muda (não está tocando!)
};

//quando o ícone musical for clicado, a barra musical é exibida/ou escondida (é um alternador)
const handleIconClick = (e)  => {
  e.stopPropagation(); //trava o clique para não afetar oq está atrás
  setShowBar((prev) => (!prev));  //prev é o valor anterior do estado, (!prev) inverte esse valor
};

//passar uma música
const nextTrack = () => {
  //muda o índice da música e prossegue para a próxima
  setCurrentTrack((prev) => (prev + 1) % songs.length); //usam % tracks.length para criar um loop
  setProgress(0); //se muda a música, reseta o progresso
}

//voltar uma música
const prevTrack = () => {
  setCurrentTrack((prev) => (prev -1 + songs.length) % songs.length);
  setProgress(0);
};


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
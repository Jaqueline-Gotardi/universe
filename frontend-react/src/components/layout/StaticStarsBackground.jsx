import { useMemo } from "react";

const StaticStarsBackground = ({ customBackground }) => {
  //gerar 160 estrelinhas com 3 tipos de profundidade e brilho
  const stars = useMemo(() => {
    const starColors = ["#ffffff", "#e0f2fe", "#fef08a"]; //brancas, azuladas e amareladas
    
    return Array.from({ length: 200 }, (_, i) => {
      const size = Math.random() * 1.5 + 1; //tamanho das estrelas
      
      //3 ritmos de velocidade
      let duration = Math.random() * 3 + 2; //rápida
      if (size < 1.2) duration = Math.random() * 4 + 4; //média
      if (size < 0.8) duration = Math.random() * 5 + 7; //lenta 

      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        duration,
        delay: Math.random() * 5,
      };
    });
  }, []);

  const styles = {
    container: {
      position: "fixed",
      inset: 0,
      background: customBackground || "linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #2d1b69 100%)",
      zIndex: 0,
      overflow: "hidden",
    },
    star: {
      position: "absolute",
      borderRadius: "50%",
    }
  };

  return (
    <div style={styles.container}>
      {stars.map((star) => (
        <div
          key={`nebula-star-${star.id}`}
          className="nebula-star-field"
          style={{
            ...styles.star,
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            animation: `nebula-twinkle ${star.duration}s infinite ease-in-out ${star.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes nebula-twinkle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default StaticStarsBackground;
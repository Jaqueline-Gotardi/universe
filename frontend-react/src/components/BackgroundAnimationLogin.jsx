import { useMemo } from "react";

export const BackroundAnimationLogin = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 180 }, (_, i) => ({
          //para as estrelas
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 4, //atraso
        }));
      }, []);

      const styles = {
      star: {
        position: "absolute",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        boxShadow: "0 0 5px white",
        animation: "twinkle 3s ease-in-out infinite",
      },
    }
    return (
        <div className="cosmic-engine">

      {/* animação para as estrelas */}
      {stars.map(( star) => (
          <div
            key={`star-${star.id}`}
            className="star-field"
            style={{
              ...styles.star,
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `star-animation ${star.duration}s infinite ease-in-out ${star.delay}s`,
            }}
          />
        ))}
 
      <style> {`
      .cosmic-engine { /* plano de fundo galático */
      position: fixed; 
      inset: 0; 
      background: radial-gradient(circle at center,  #000000 0%, #020205 100%); /* equilibrar a cor de fundo */
      z-index: -1; 
      }

      .star-field { 
      position: absolute; 
      background: white; 
      border-radius: 50%; 
      box-shadow: 0 0 5px white; 
      }

      @keyframes star-animation { 
      0%, 100% { opacity: 0.3; transform: scale(1); } 
      50% { opacity: 1; transform: scale(1.3); } 
      }
      `}
      </style>
    </div>
  );
}
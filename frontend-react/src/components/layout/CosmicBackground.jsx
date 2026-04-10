import { useMemo } from "react";

const CosmicBackground = () => {
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
  //}, []);

  const comets = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      //para os cometas (posição e animação)
      id: i,
      top: Math.random() * 55,
      delay: Math.random() * 30,
      duration: Math.random() * 5 + 8,
    }))
  }, []);

  const styles = {
  star: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px white",
    animation: "twinkle 3s ease-in-out infinite",
  },

  comet: {
    position: "absolute",
    left: "-150px",
    width: "200px",
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.5) 40%, #ffffff 100%)",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
    animation: "shootingStar 10s linear infinite",
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
        
        {/* animação para os cometas */}
      {comets.map((comet) => (
          <div
            key={`comet-${comet.id}`}
            className="comet-trail"
            style={{
              ...styles.comet,
              top: `${comet.top}%`,
              animation: `commet-animation ${comet.duration}s infinite linear ${comet.delay}s`,
            }}
          />
        ))}
        
 
      <style> {`
      .cosmic-engine { /* plano de fundo galático */
      position: fixed; 
      inset: 0; 
      background: radial-gradient(circle at center, #0a0a25 0%, #020205 100%); /* equilibrar a cor de fundo */
      z-index: -1; 
      }

      .star-field { 
      position: absolute; 
      background: white; 
      border-radius: 50%; 
      box-shadow: 0 0 5px white; 
      }

      .comet-trail { 
      position: absolute; 
      right: -100px; 
      width: 100px; 
      height: 5px; 
      background: linear-gradient(to right, transparent, white); 
      opacity: 0; 
      }

      @keyframes star-animation { 
      0%, 100% { opacity: 0.3; transform: scale(1); } 
      50% { opacity: 1; transform: scale(1.3); } 
      }

      @keyframes commet-animation { 
      0% { transform: translateX(0) translateY(0) rotate(-15deg); opacity: 0; } 
      5% { opacity: 1; } 
      15% { transform: translateX(-120vw) translateY(50vh) rotate(-15deg); opacity: 0; } 
      100% { transform: translateX(-120vw) translateY(50vh) rotate(-15deg); opacity: 0; } 
      }
      `}
      </style>
    </div>
  );
};

export default CosmicBackground;
import { useMemo } from "react";
import styles from "./BackgroundAnimationLogin.module.css";

export const BackgroundAnimationLogin = () => {
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

  return (
    <div className={styles.cosmicEngine}>
      {/* animação para as estrelas */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={styles.starField}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--star-duration": `${star.duration}s`,
            "--star-delay": `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
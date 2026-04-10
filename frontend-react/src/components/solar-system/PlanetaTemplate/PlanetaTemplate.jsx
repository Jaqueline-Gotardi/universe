import { useNavigate } from "react-router-dom";
import { conteudosPlanetarios } from "../../../data/planetaryData";
import { conteudosAstronomicos } from "../../../data/menuData";
import styles from "./PlanetaTemplate.module.css";

export const PlanetaTemplate = ({ planetaId }) => {
  const navigate = useNavigate();
  const conteudo = conteudosPlanetarios[planetaId] || conteudosAstronomicos[planetaId];

  if (!conteudo) return <div>Carregando. . .</div>;

  return ( 
    <div className={styles.container}>
      <div className={styles.content}>
        {/* card principal */}
        <div className={styles.card}> 
          {/* decoração de canto */}
          <div className={styles.cornerTopLeft} />
          <div className={styles.cornerTopRight} />
          <div className={styles.cornerBottomLeft} />
          <div className={styles.cornerBottomRight} />

          {/* imagem/Ícone */}
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <img
                src={conteudo.imagem}
                alt={conteudo.titulo}
                className={styles.imageElement}
                loading="lazy"
              />
            </div>
            <div className={styles.imageGlow} />
          </div>

          {/* título */}
          <h1 className={styles.title}>{conteudo.titulo}</h1>

          {/* descrição */}
          <div className={styles.descriptionContainer}>
            {conteudo.descricao.split("\n\n").map((paragrafo, index) => ( //quebrar linhas em parágrafos
              <p key={index} className={styles.paragraph}>
                {paragrafo}
              </p>
            ))}
          </div>

          {/* botão voltar */}
          <button
            className={styles.backButtonCard}
            onClick={() => navigate(-1)}
          >
            VOLTAR
          </button>
        </div>
      </div>
    </div> 
  );
}; 
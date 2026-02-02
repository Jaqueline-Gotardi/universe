import { useNavigate } from "react-router-dom";
import { conteudosPlanetarios } from "../data/planetaryData";
export const PlanetaTemplate = () => {

  const navigate = useNavigate();
  const conteudo = conteudosPlanetarios.mercurio;

  return (
    <div style={styles.container}>
      
      <div style={styles.content}>
        {/* Card principal */}
        <div style={styles.card}>
          {/* Decoração de canto */}
          <div style={styles.cornerTopLeft} />
          <div style={styles.cornerTopRight} />
          <div style={styles.cornerBottomLeft} />
          <div style={styles.cornerBottomRight} />

          {/* Imagem/Ícone */}
          <div style={styles.imageContainer}>
            <div style={styles.imagePlaceholder}>
              {/* <img style={styles.imageIcon} src={conteudo.imagem}></img> */}
              <img 
                src={conteudo.imagem} 
                alt={conteudo.titulo} 
                style={styles.imageElement}
              />
            </div>
            <div style={styles.imageGlow} />
          </div>

          {/* Título */}
          <h1 style={styles.title}>{conteudo.titulo}</h1>

          {/* Descrição */}
          <div style={styles.descriptionContainer}>
            {conteudo.descricao.split('\n\n').map((paragrafo, index) => (
              <p key={index} style={styles.paragraph}>
                {paragrafo}
              </p>
            ))}
          </div>
          </div>

          {/* Botão voltar */}
          <button
            style={styles.backButtonCard}
            onClick={() => navigate(-1)}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 35px rgba(168, 85, 247, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 5px 30px rgba(168, 85, 247, 0.4)";
            }}
          >
            VOLTAR
          </button>
          </div>
    </div>
    )
};
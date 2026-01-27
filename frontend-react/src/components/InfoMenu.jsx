import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function InfoMenu() {

    const navigate = useNavigate();

    const cosmicBackground = useMemo(() => {
        const stars = Array.from({ length: 180 }, (_, i) => ({
          //para as estrelas
          id: `star-${i}`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5, //atraso
        }));
        const comets = Array.from({ length: 5 }, (_, i) => ({
          //para os cometas (posição e animação)
          id: `comet-${i}`,
          top: `${Math.random() * 55}%`,
          delay: Math.random() * 30,
          duration: Math.random() * 5 + 8,
        }));
        return { stars, comets };
      }, []);

    return (
    <section className="tela-principal" id="informacoes-do-menu">

      <div className="cosmic-engine">
        {cosmicBackground.stars.map(
          (
            star, //animação para as estrelas
          ) => (
            <div
              key={star.id}
              className="star-field"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `star-animation ${star.duration}s infinite ease-in-out ${star.delay}s`,
              }}
            />
          ),
        )}
        {cosmicBackground.comets.map(
          (
            comet, //animação para os cometas
          ) => (
            <div
              key={comet.id}
              className="comet-trail"
              style={{
                top: comet.top,
                animation: `commet-animation ${comet.duration}s infinite linear ${comet.delay}s`,
              }}
            />
          ),
        )}
      </div>

    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="btn-informacoes-astronomicas"
      onClick={() => navigate('/app/astros-menu')}>Informações Astronômicas</button>

      <button type="button" className="btn-cosmic" id="btn-informacoes-planetarias"
      onClick={() => navigate("/app/planetary-menu")}>Informações Planetárias</button>

      <button type="button" className="btn-cosmic" id="btn-informacoes-extras"
      onClick={() => navigate("/app/extras-menu")}>Informações Extras</button>

    </div>
    <button type="button" className="botao-voltar" id="btn-voltar-info-menu"
    onClick={() => navigate('/app/exploracao')}>Voltar</button>
  </section> 
    );
}
export default InfoMenu;      
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react"; //biblioteca de ícones
import {
  informacoesPlanetarias,
  menuPlanetas,
  menuSistemaSolar,
  menuLuasESatelites,
} from "../../../data/planetaryData";
import styles from "./PlanetaInformation.module.css";

const PlanetaryInformation = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  //gerar estrelas de fundo
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
  }, []);

  //obter itens baseado na categoria ativa
  const getSubItems = () => {
    switch (activeCategory) {
      case "planetas": return menuPlanetas; //se o id for "planetas" retorna o menuPlanetas definido em planetaryData.jsx
      case "sistema-solar": return menuSistemaSolar;
      case "luas-e-satelites": return menuLuasESatelites; //nome do id do botao (definido em planetaryData.js)
      default: return [];
    }
  }; 

  //fazer a busca pelo id 
  const getCategoryTitle = () => {
    const category = informacoesPlanetarias.find((c) => c.id === activeCategory);
    return category ? category.label : "";
  };

  const handleCategoryClick = (categoryId) => setActiveCategory(categoryId);
  const handleBackToCategories = () => setActiveCategory(null);
  const handleItemClick = (route) => navigate(route);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundLayer}>
        {/*estrelas */}
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className={styles.star}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
        {/*orbita */}
        <div className={styles.orbitalRing1} />
        <div className={styles.orbitalRing2} />
        <div className={styles.orbitalRing3} />
      </div>

      {/*conteúdo principal */}
      <div className={styles.content}>
        {/*header */}
        <div className={styles.header}>
          <button
            className={styles.backButton}
            onClick={() => navigate("/app/menu")}
          >
            <ArrowLeft size={20} />
            <span>Voltar ao Menu</span>
          </button>

          <div className={styles.titleContainer}>
            <Sparkles className={styles.sparkleIcon} size={32} />
            <h1 className={styles.mainTitle}>
              🪐 Informações Planetárias
            </h1>
            <Sparkles className={styles.sparkleIcon} size={32} />
          </div>

          <p className={styles.subtitle}>
            Explore os mistérios do nosso Sistema Solar
          </p>
        </div>

        {/*categorias e subItens */}
        {!activeCategory ? (
          /*categorias */
          <div className={styles.categoriesContainer}>
            {informacoesPlanetarias.map((category, index) => (
              <div
                key={category.id}
                className={styles.categoryCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className={styles.categoryGlow} />
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h2 className={styles.categoryLabel}>{category.label}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>
                <div className={styles.categoryArrow}>→</div>
              </div>
            ))}
          </div>
        ) : ( 

          /*sub Items Grid */
          <div className={styles.subItemsContainer}>
            <div className={styles.subHeader}>
              <button
                className={styles.subBackButton}
                onClick={handleBackToCategories}
              >
                <ArrowLeft size={18} />
                <span>Voltar</span>
              </button>
              <h2 className={styles.subTitle}>{getCategoryTitle()}</h2>
            </div>

            <div className={styles.subItemsGrid}>
              {getSubItems().map((item, index) => (
                <div
                  key={item.id}
                  className={styles.subItem}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                  onClick={() => handleItemClick(item.route)}
                >
                  <div
                    className={styles.itemGlow}
                    style={{
                      background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`,
                    }}
                  />
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <div
                    className={styles.itemBorder}
                    style={{ borderColor: item.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetaryInformation;
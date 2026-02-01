import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react"; //biblioteca de ícones
import {
  informacoesPlanetarias,
  menuPlanetas,
  menuSistemaSolar,
  menuLuasESatelites,
} from "../data/planetaryData";

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

  // Obter itens baseado na categoria ativa
  const getSubItems = () => {
    switch (activeCategory) {
      case "planetas":
        return menuPlanetas;
      case "sistema-solar":
        return menuSistemaSolar;
      case "luas-satelites":
        return menuLuasESatelites;
      default:
        return [];
    }
  };

  //fazer a busca pelo id
  const getCategoryTitle = () => {
    const category = informacoesPlanetarias.find((c) => c.id === activeCategory,
  );
  return category ? category.label : "";
};
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
  };

  const handleItemClick = (route) => {
    navigate(route);
  };
  
  };
  return (
  <div style={styles.container}>

  <div style={styles.backgroundLayer}>
    {/* Estrelas */}
    {stars.map((star) => (
      <div
      key={`star-${star.id}`}
      style={{
        ...styles.star,
        left: `${star.left}%`,
        top: `${star.top}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
      }}
      />
      ))}
      {/* Orbita */}
      <div style={styles.orbitalRing1} />
      <div style={styles.orbitalRing2} />
      <div style={styles.orbitalRing3} />
  </div>
      
    {/* Conteúdo principal */}
  <div style={styles.content}>

    {/* Header */}
  <div style={styles.header}>
    <button
    className="back-button"
    style={styles.backButton}
    onClick={() => navigate("/app/menu")}
    >
      <ArrowLeft size={20} />
      <span>Voltar ao Menu</span>
    </button>
    
  <div style={styles.titleContainer}>
    <Sparkles style={styles.sparkleIcon} size={32} />
    <h1 className="main-title" style={styles.mainTitle}>
      🪐 Informações Planetárias
      </h1>
      <Sparkles style={styles.sparkleIcon} size={32} />
      </div>
      
      <p style={styles.subtitle}>
        Explore os mistérios do nosso Sistema Solar
        </p>
  </div>

   {/* Categorias e subItens */}
  {!activeCategory ? (
    /* Categorias */
    <div style={styles.categoriesContainer}>
      {informacoesPlanetarias.map((category, index) => (
      <div key={category.id}
        className="category-card"
        style={{
        ...styles.categoryCard,
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={() => handleCategoryClick(category.id)}
      >
      <div style={styles.categoryGlow} />
      <div className="category-icon" style={styles.categoryIcon}>
        {category.icon}
        </div>
        <h2 style={styles.categoryLabel}>{category.label}</h2>
        <p style={styles.categoryDescription}>{category.description}</p>
        <div style={styles.categoryArrow}>→</div>
      </div>
        ))}
        </div>
      ) : (
      
    /* Sub Items Grid */
  <div style={styles.subItemsContainer}>
    <div style={styles.subHeader}>
      <button
      className="back-button"
      style={styles.subBackButton}
      onClick={handleBackToCategories}
      >
      <ArrowLeft size={18} />
      <span>Voltar</span>
      </button>
      <h2 style={styles.subTitle}>{getCategoryTitle()}</h2>
    </div>

  <div style={styles.subItemsGrid}>
    {getSubItems().map((item, index) => (
      <div key={item.id}
      className="sub-item"
      style={{
      ...styles.subItem,
      "--item-color": item.color,
      animationDelay: `${index * 0.05}s`,
    }}
    onClick={() => handleItemClick(item.route)}
    >
      <div style={{
        ...styles.itemGlow,
        background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`,
      }}
      />
      <div className="item-icon" style={styles.itemIcon}>
        {item.icon}
        </div>
        <span style={styles.itemLabel}>{item.label}</span>
      <div style={{
        ...styles.itemBorder,
        borderColor: item.color,
      }}
      />
      </div>
    ))}
    </div>
    </div>
  )}
  </div>
  </div>
  );

export default PlanetaryInformation;
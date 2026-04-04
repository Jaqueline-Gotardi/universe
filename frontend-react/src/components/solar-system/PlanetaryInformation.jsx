import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react"; //biblioteca de ícones
import {
  informacoesPlanetarias,
  menuPlanetas,
  menuSistemaSolar,
  menuLuasESatelites,
} from "../../data/planetaryData";

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
      case "luas-e-satelites": //nome do id do botao (definido em planetaryData.js)
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

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      background: "#050505",
      position: "relative",
      overflow: "hidden",
    },
    backgroundLayer: {
      position: "absolute",
      inset: 0,
      overflow: "hidden", 
    },
    star: {
      position: "absolute",
      borderRadius: "50%",
      background: "#ffffff",
      boxShadow: "0 0 6px #ffffff, 0 0 12px #00ffff",
      animation: "twinkle 3s ease-in-out infinite",
      pointerEvents: "none",
    },
    orbitalRing1: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "600px",
      height: "600px",
      border: "1px solid rgba(138, 43, 226, 0.2)",
      borderRadius: "50%",
      transform: "translate(-50%, -50%) rotateX(75deg)",
      animation:
        "ringRotate 30s linear infinite, orbitPulse 5s ease-in-out infinite",
      pointerEvents: "none",
    },
    orbitalRing2: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "800px",
      height: "800px",
      border: "1px solid rgba(0, 255, 255, 0.15)",
      borderRadius: "50%",
      transform: "translate(-50%, -50%) rotateX(75deg)",
      animation: "ringRotate 45s linear infinite reverse, orbitPulse 7s ease-in-out infinite",
      pointerEvents: "none",
    },
    orbitalRing3: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "1000px",
      height: "1000px",
      border: "1px solid rgba(255, 107, 107, 0.1)",
      borderRadius: "50%",
      transform: "translate(-50%, -50%) rotateX(75deg)",
      animation: "ringRotate 60s linear infinite, orbitPulse 9s ease-in-out infinite",
      pointerEvents: "none",
    },
    content: {
      position: "relative",
      zIndex: 10,
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "50px",
    },
    backButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.4) 100%)",
      borderRadius: "30px",
      border: "2px solid rgba(168, 85, 247, 0.5)",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 600,
      boxShadow: "0 5px 25px rgba(168, 85, 247, 0.3)",textShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
      fontFamily: "'Orbitron', sans-serif",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginBottom: "30px",
      backdropFilter: "blur(10px)",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "15px",
    },
    sparkleIcon: {
      color: "#00ffff",
      filter: "drop-shadow(0 0 10px #00ffff)",
    },
    mainTitle: {
      fontSize: "clamp(28px, 5vw, 48px)",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "700",
      margin: 0,
      letterSpacing: "3px",
    },
    subtitle: {
      fontSize: "16px",
      color: "rgba(255, 255, 255, 0.6)",
      fontFamily: "'Space Mono', monospace",
      margin: 0,
    },
    categoriesContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      padding: "20px",
    },
    categoryCard: {
      position: "relative",
      background: "rgba(10, 10, 30, 0.8)",
      border: "1px solid rgba(138, 43, 226, 0.3)",
      borderRadius: "24px",
      padding: "40px 30px",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      backdropFilter: "blur(20px)",
      overflow: "hidden",
      animation: "glowPulse 4s ease-in-out infinite, borderGlow 3s ease-in-out infinite",
    },
    categoryGlow: {
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background: "radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 50%)",
      pointerEvents: "none",
    },
    categoryIcon: {
      fontSize: "64px",
      marginBottom: "20px",
      display: "block",
      filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
    },
    categoryLabel: {
      fontSize: "24px",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "600",
      color: "#ffffff",
      marginBottom: "10px",
      textShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
    },
    categoryDescription: {
      fontSize: "14px",
      fontFamily: "'Space Mono', monospace",
      color: "rgba(255, 255, 255, 0.6)",
      marginBottom: "20px",
    },
    categoryArrow: {
      fontSize: "24px",
      color: "#00ffff",
      transition: "transform 0.3s ease",
      textShadow: "0 0 10px #00ffff",
    },
    subItemsContainer: {
      padding: "20px",
    },
    subHeader: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "40px",
      flexWrap: "wrap",
    },
    subBackButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "10px 20px",
      background: "rgba(138, 43, 226, 0.1)",
      border: "1px solid rgba(138, 43, 226, 0.3)",
      borderRadius: "20px",
      color: "#8a2be2",
      fontSize: "13px",
      fontFamily: "'Orbitron', sans-serif",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
    },
    subTitle: {
      fontSize: "28px",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "600",
      color: "#ffffff",
      margin: 0,
      background: "linear-gradient(90deg, #00ffff, #8a2be2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subItemsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
      gap: "20px",
    },
    subItem: {
      position: "relative",
      background: "rgba(10, 10, 30, 0.7)",
      border: "1px solid rgba(0, 255, 255, 0.2)",
      borderRadius: "20px",
      padding: "30px 20px",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)", //controla a curva de velocidade da animação
      backdropFilter: "blur(15px)",
      overflow: "hidden",
    },
    itemGlow: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "150%",
      height: "150%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      opacity: 0.5,
    },
    itemIcon: {
      fontSize: "48px",
      marginBottom: "15px",
      display: "block",
      position: "relative",
      zIndex: 1,
      filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))",
    },
    itemLabel: {
      fontSize: "14px",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "500",
      color: "#ffffff",
      position: "relative",
      zIndex: 1,
      textShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
    },
    itemBorder: {
      position: "absolute",
      inset: 0,
      borderRadius: "20px",
      border: "2px solid transparent",
      transition: "border-color 0.3s ease",
      pointerEvents: "none", //se o usuário cliclar em um botão q está atrás de algo, esse botão ainda iŕa fazer sua devida função!
      },
  };
  return (
  <div style={styles.container}>
  <style>{`
    @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
    }
       
    @keyframes nebulaPulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
    }    
        
    @keyframes floatUp {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    }
        
    @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(138, 43, 226, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.1); }
    50% { box-shadow: 0 0 40px rgba(138, 43, 226, 0.6), inset 0 0 30px rgba(138, 43, 226, 0.2); }
    }
        
    @keyframes borderGlow {
    0%, 100% { border-color: rgba(138, 43, 226, 0.5); }
    50% { border-color: rgba(0, 255, 255, 0.8); }
    }
        
    @keyframes iconFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.1); }
    }
        
    @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
    }
        
    @keyframes ringRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }
        
    @keyframes orbitPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
    }
    
    .category-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(138, 43, 226, 0.5), 0 0 100px rgba(0, 255, 255, 0.2);
    }
        
    .category-card:hover .category-icon {
    animation: iconFloat 1s ease-in-out infinite;
    }
        
    .sub-item:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
    }
        
    .sub-item:hover .item-icon {
    animation: iconFloat 0.8s ease-in-out infinite;
    }
    
    .back-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 25px rgba(168, 85, 247, 0.3);
    }
        
    .main-title {
    background: linear-gradient(90deg, #00ffff, #8a2be2, #ff6b6b, #00ffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
    }
    `}
  </style>
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
};

export default PlanetaryInformation;
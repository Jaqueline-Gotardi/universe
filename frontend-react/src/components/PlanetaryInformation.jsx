import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";  //biblioteca de ícones
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
      case 'planetas':
        return menuPlanetas;
      case 'sistema-solar':
        return menuSistemaSolar;
      case 'luas-satelites':
        return menuLuasESatelites;
      default:
        return [];
    }
  };

  //fazer a busca pelo id
  const getCategoryTitle = () => {
    const category = informacoesPlanetarias.find(c => c.id === activeCategory);
    return category ? category.label : '';
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

  return (
  )
};

export default PlanetaryInformation;
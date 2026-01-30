import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { informacoesPlanetarias } from "../data/menuData";

const PlanetaryInformation = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="Informações Planetárias"
        items={informacoesPlanetarias}
        onBack={() => navigate("/app/menu")}
        />
      </main>
    </div>
  )
}
export default PlanetaryInformation;
















/* 1. Sistema Solar (Solar System)

Esta será a página principal do tema.

Nome do Componente Pai: SolarSystem.jsx (ou .tsx)

Sub-componentes (para organizar o código):

SolarSystemHero.jsx: O conteúdo principal com texto e imagem geral.

SolarSystemTrivia.jsx: Para a seção de curiosidades (💡).

SolarSystemVisual.jsx: Para a parte visual/galeria (🔭).

Dica de Rota: /app/solar-system

2. Luas e Satélites (Moons and Satellites)

Como este tema tem itens muito distintos (nossa lua vs satélites artificiais), aqui cada botão pode levar a uma sub-página ou mudar o estado da página principal.

Nome do Componente Pai: MoonsAndSatellites.jsx

Sub-componentes:

EarthMoon.jsx: Focado especificamente na nossa Lua (🌑).

FamousMoons.jsx: Uma lista ou galeria das luas de outros planetas como Europa ou Titã (☄️).

ArtificialSatellites.jsx: Informação sobre GPS, Starlink, ISS, etc (🛰️).

Dica de Rota: /app/moons */
/* import { useNavigate } from "react-router-dom";

function ConstellationsMenu() {
    
    const navigate = useNavigate();

    return (
        <section className="tela-principal" id="tela-constelacoes">
    <div className="informacoes-extras">

      <button type="button" className="btn-cosmic" id="hemisferio-norte"
      onClick={() => navigate("/app/hemisferio-norte")}>Hemisfério Norte</button>

      <button type="button" className="btn-cosmic" id="hemisferio-sul" onClick={() => navigate("/app/hemisferio-sul")}>Hemisfério Sul</button>

      <button type="button" className="btn-cosmic" id="hemisferio-principal"
      onClick={() => navigate("/app/constellations-famous")}>As Famosas</button>

    </div>
    <button type="button" className="botao-voltar" id="btn-voltar-constelacoes"
    onClick={() => navigate("/app/astros-menu")}>Voltar</button>
  </section>
    )
}
export default ConstellationsMenu;      */

import React from "react";
import CosmicBackground from "./CosmicBackground";
import CosmicCard from "./CosmicCard";
import { useNavigate } from "react-router-dom";

import { menuConstellations } from "../data/menuData";

const ConstellationsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="✨ Constelações"
        items={menuConstellations}
        onBack={() => navigate("/app/astros-menu")}
         />
      </main>
    </div>
  )
}
export default ConstellationsMenu;
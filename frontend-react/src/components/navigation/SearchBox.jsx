//componente responsável pela construção do input de pesquisar no universo

import React from "react";

const SearchBox = ({ 
  searchQuery, setSearchQuery, 
  onSearch, 
  isLoading }) => {

  return (
    <div className="search-box-wrapper">
      <input
        type="text"
        value={searchQuery} //buscar termo pesquisado
        onChange={(e) => setSearchQuery(e.target.value)} //mudar a pesquisa com base em toda letra digitada na busca correspondente
        onKeyDown={(e) => e.key === "Enter" && onSearch()} //pesquisar quando clicar Enter no teclado
        placeholder="Pesquisar no Universo. . ."
        id="campo-pesquisa"
        className="input-universo"
      />

      <button 
      type="button" 
      onClick={onSearch}
      className="botao-lupa"
      disabled={isLoading}
      aria-label="Pesquisar pela lupa"
      >
        {isLoading ? (
          <svg className="spinner-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" strokeDasharray="31.4 31.4" />
          </svg>
        ) : (
          <svg className="lupa-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        )}
      </button>

      <style> {`
      .search-box-wrapper {
      display: flex;
      align-items: center;
      background: rgba(10, 10, 30, 0.6);
      border: 1px solid rgba(6, 182, 212, 0.5);
      border-radius: 50px;
      padding: 5px 20px;
      max-width: 500px;
      width: 100%;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      }
      .search-box-wrapper:focus-within {
      border-color: #8b5cf6;
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
      }
      .input-universo {
      flex: 1;
      background: transparent;
      border: none;
      color: white;
      padding: 10px;
      outline: none;
      font-family: 'Courier New', Courier, monospace;
      font-size: 15px;
      }
      .input-universo::placeholder {
      color: rgba(255, 255, 255, 0.4);
      }
      .botao-lupa {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #06b6d4;
      padding: 5px;
      transition: transform 0.2s;
      cursor: pointer;
      }
      .botao-lupa:hover {
      transform: scale(1.2);
      color: #8b5cf6;
      }
      .spinner-svg, .lupa-svg {
      width: 22px;
      height: 22px;
      } 
      .spinner-svg {
      animation: rotate 1s linear infinite;
      }
      @keyframes rotate {
      100% {transform: rotate(360deg);}
      }
      `}
      </style>
    </div>
  );
};

export default SearchBox;
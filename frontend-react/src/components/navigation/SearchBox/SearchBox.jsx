//componente responsável pela construção do input de pesquisar no universo
import styles from "./SearchBox.module.css"

const SearchBox = ({ 
  searchQuery, setSearchQuery, onSearch, isLoading }) => {

  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="text"
        value={searchQuery} //buscar termo pesquisado
        onChange={(e) => setSearchQuery(e.target.value)} //mudar a pesquisa com base em toda letra digitada na busca correspondente
        onKeyDown={(e) => e.key === "Enter" && onSearch()} //pesquisar quando clicar Enter no teclado
        placeholder="Pesquisar no Universo. . ."
        id="campo-pesquisa"
        className={styles.inputUniverso}
      />

      <button 
      type="button" 
      onClick={onSearch}
      className={styles.botaoLupa}
      disabled={isLoading}
      aria-label="Pesquisar pela lupa"
      >
        {isLoading ? (
          <svg className={styles.spinnerSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" strokeDasharray="31.4 31.4" />
          </svg>
        ) : (
          <svg className={styles.lupaSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        )}
      </button>

    </div>
  );
};

export default SearchBox;
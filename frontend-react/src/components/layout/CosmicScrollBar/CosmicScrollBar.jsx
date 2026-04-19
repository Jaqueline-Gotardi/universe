import useAuth from "../../../hooks/useAuth";
import styles from "./CosmicScrollBar.module.css"

const CosmicScrollBar = () => {
    const { isAuthenticated, isLoading } = useAuth();
    
    //se está carregando ou não está logado não mostra a barra de rolagem do topo
    if (isLoading || !isAuthenticated) return null;

    return <div className={styles.cosmicScrollBar}></div>;
};

export default CosmicScrollBar; 
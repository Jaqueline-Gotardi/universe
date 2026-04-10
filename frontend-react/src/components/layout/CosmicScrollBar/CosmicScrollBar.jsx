import useAuth from "../../../hooks/useAuth";
import styles from "./CosmicScrollBar.module.css"

const CosmicScrollBar = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return null;

    return <div className={styles.cosmicScrollBar}></div>;
};

export default CosmicScrollBar;
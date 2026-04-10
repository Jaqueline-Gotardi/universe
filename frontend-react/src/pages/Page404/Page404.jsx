//essa tela é exibida quando o usuário digita uma rota desconhecida

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CosmicBackground from "../../components/layout/CosmicBackground";
import styles from "./Page404.module.css"

function Page404() {
    const navigate = useNavigate()
    const [ isOnline, setIsOnline ] = useState(navigator.onLine); //está online

    //lógica de mostrar a tela somente quando a internet cair (precisamos trocar a tela Page404.jsx pela OfflineScreen.jsx, já que o problema não é mais de rota desconhecida, mas sim de conexão)
    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
     
      //ouvir quando a internet cair ou voltar
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    
      //limpar os eventos de escuta
      return() => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
  },[])
  
  //se não estiver online, retorna nulo (essa tela tem que sumir para a tela OfflineScreen aparecer)
  if (!isOnline) return null;
    
    return (
    <div className={styles.containerNotFound}>
      <CosmicBackground />
        
        <h1 className={styles.titulo}>Coordenadas inválidas 🛰️</h1>
        <p className={styles.paragrafo}>Rota não encontrada, você viajou para além do mapa conhecido</p>
        
        <button onClick={() => navigate("/app")} 
        className={styles.botaoVoltar}>
          Volte para a Nave mãe
        </button>

      </div>
      )
    }
export default Page404;
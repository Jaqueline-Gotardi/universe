import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard"; 
import { menuExtras } from "../../data/menuData"; 

const ExtrasMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="📂 Extras"
        items={menuExtras}
        onBack={() => navigate("/app/menu")}
        />
      </main>
    </div>
  )
}
export default ExtrasMenu;


/* outra coisa interessante no react: quando vamos colocar propriedades do css, como "justify-content", deve-se escrever juntos e não com "-" no meio */ 
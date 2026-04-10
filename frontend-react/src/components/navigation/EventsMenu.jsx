import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { eventosAstronomicos } from "../../data/menuData";

const EventsMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🔭 Eventos Astronômicos"
        items={eventosAstronomicos}
        onBack={() => navigate("/app/astros-menu")}
        />
      </main>
    </div>
  )
}
export default EventsMenu;
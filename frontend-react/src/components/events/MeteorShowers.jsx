import { useNavigate } from "react-router-dom";
import CosmicBackground from "../layout/CosmicBackground";
import CosmicCard from "../layout/CosmicCard";
import { chuvasDeMeteoros } from "../../data/menuData";

const MeteorShowers = () => {
  const navigate = useNavigate();

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <CosmicBackground />

      <main>
        <CosmicCard
        title="🌠 Chuvas de Meteoros"
        items={chuvasDeMeteoros}
        onBack={() => navigate("/app/events-menu")}
        />
      </main>
    </div>
  )
}
export default MeteorShowers;
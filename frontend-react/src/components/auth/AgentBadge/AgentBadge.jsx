import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import style from "./AgentBadge.module.css"

//avatar padrão em construído em código SVG
const default_avatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#94a3b8" stroke-width="1"/>
  <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 17.2C10.1 17.2 8.4 16.3 7.3 14.9C7.3 13.3 10.4 12.4 12 12.4C13.6 12.4 16.7 13.3 16.7 14.9C15.6 16.3 13.9 17.2 12 17.2Z" fill="#94a3b8"/>
</svg>
`)}`;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const AgentBadge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [ isHovered, setIsHovered ] = useState(false)
  const avatarExibido = user?.avatar || default_avatar;

  return (
  <div className={style.container} 
  style={{border: isHovered ? "1px solid rgba(168,85,247,0.8)" : "1px solid rgba(168,85,247,0.5)",
  boxShadow: isHovered ? "0 0 35px rgba(168,85,247,0.6), inset 0 0 20px rgba(168,85,247,0.2)" : "0 0 22px rgba(168,85,247,0.3), inset 0 0 15px rgba(168,85,247,0.1)",
  transform: isHovered ? "scale(1.05)" : "scale(1)",}}
  onClick={() => navigate("/app/profile", {state: { from: location.pathname}})}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>

    <div className={style.brilho} />
  <div style={{position: "relative"}}>
      <div className={style.avatarWrapper}>
        <img src={avatarExibido} alt="avatar" className={style.avatar} />
        </div>
        <div className={style.anelOnline} />
        </div>
        
      </div>
  )
} 
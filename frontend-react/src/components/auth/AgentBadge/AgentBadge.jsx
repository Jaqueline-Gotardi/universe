import { useNavigate } from "react-router-dom"
import { useState } from "react";
import style from "./AgentBadge.module.css"

export const AgentBadge = () => {
  const navigate = useNavigate();
  const [ isHovered, setIsHovered ] = useState(false)

  return (
  <div className={style.container} 
  style={{border: isHovered ? "1px solid rgba(168,85,247,0.8)" : "1px solid rgba(168,85,247,0.5)",
  boxShadow: isHovered ? "0 0 35px rgba(168,85,247,0.6), inset 0 0 20px rgba(168,85,247,0.2)" : "0 0 22px rgba(168,85,247,0.3), inset 0 0 15px rgba(168,85,247,0.1)",
  transform: isHovered ? "scale(1.05)" : "scale(1)",}}
  onClick={() => navigate("/app/profile")}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
    <div className={style.brilho} />
    
  <div style={{position: "relative"}}>
      <div className={style.avatarWrapper}>
        <img src="/images/avatar-nova.webp" alt="avatar" className={style.avatar} />
        </div>
        <div className={style.anelOnline} />
        </div>
        
      </div>
  )
} 
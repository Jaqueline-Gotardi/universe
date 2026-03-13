import { useNavigate } from "react-router-dom"

export const AgentBadge = () => {
  const navigate = useNavigate();

  const styles = {

    container: {
      display: "flex",
    }

  }

  return (
    <div style={styles.container} onClick={() => navigate("/profile")}>
      <div style={styles.brilho}>

        <div>
          <div style={styles.avatarWrapper}>
        <img alt="avatar" style={styles.avatar}/>
        <div style={styles.anel} />
        </div>
        <div style={styles.info}>

        </div>
      </div>
      
      </div>
    </div>
  )
}
import { useState, useRef, useEffect } from "react";
import style from "./MobileFloatingMenu.module.css";

export const MobileFloatingMenu = ({ agentBadge, soundTrack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Fecha o menu se o usuário clicar fora dele
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={style.mobileWrapper} ref={menuRef}>
      {/*container dos itens flutuantes*/}
      <div className={`${style.menuContent} ${isOpen ? style.open : ""}`}>
        <div className={style.itemContainer}>{agentBadge}</div>
        <div className={style.itemContainer}>{soundTrack}</div>
      </div>

      {/*botão Hambúrguer*/}
      <button 
        className={`${style.hamburgerBtn} ${isOpen ? style.active : ""}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu de controle cósmico"
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </button>
    </div>
  );
};

export default MobileFloatingMenu;
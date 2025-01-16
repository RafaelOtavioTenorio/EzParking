'use client'
import React from 'react'
import globalStyles from "../styles/Styles.module.css"
import { useState , FC } from 'react';

interface HeaderProps {
  onValueChange: (value: boolean) => void;
  userLogado: boolean;
  telaAtual: string;
  setCadastrarUsuario: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ onValueChange, userLogado, telaAtual, setCadastrarUsuario }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleReturnButton = () => {
      setCadastrarUsuario(false);
    }

    const handleProfileRequest = () => {
      if(userLogado){
        onValueChange(true);
      } else {
        onValueChange(false);
      }
    };

  return (
    
    <div className={globalStyles.headerMain}>
      { telaAtual !== "cadastro" && telaAtual !== "login" && <div className={`${globalStyles.menuImg} ${isOpen ? globalStyles.open : ''}`} onClick={toggleMenu}>
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
      </div>}
      { telaAtual === "cadastro" && <div className={globalStyles.backButton} onClick={handleReturnButton} style={{visibility: 'visible'}}>
      </div>}
      { telaAtual === "login" && <div className={globalStyles.backButton} style={{visibility: 'hidden'}} />}
      <div className={globalStyles.wrapper}>
        <h1 className={globalStyles.title}>EZ Parking</h1>
      </div>
      { telaAtual !== "cadastro" && telaAtual !== "login" && <div className={globalStyles.profileImg} onClick={handleProfileRequest}>
        <span className={globalStyles.elem}></span>
        <span className={globalStyles.elem}></span>
      </div>}
      { telaAtual === "cadastro" || telaAtual === "login" && <div className={globalStyles.profileImg} style={{ visibility: 'hidden'}} />}
      
    </div>
  )
}

export default Header
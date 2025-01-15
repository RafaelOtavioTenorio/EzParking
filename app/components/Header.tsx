'use client'
import React from 'react'
import globalStyles from "../styles/Styles.module.css"
import { useState , FC } from 'react';

interface HeaderProps {
  onValueChange: (value: boolean) => void;
  userLogado: boolean;
}

const Header: FC<HeaderProps> = ({ onValueChange, userLogado }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleProfileRequest = () => {
      if(userLogado){
        onValueChange(true);
      } else {
        onValueChange(false);
      }
    };

  return (
    
    <div className={globalStyles.headerMain}>
      { userLogado && <div className={`${globalStyles.menuImg} ${isOpen ? globalStyles.open : ''}`} onClick={toggleMenu}>
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
      </div>}
      { !userLogado && <div className={`${globalStyles.menuImg} ${isOpen ? globalStyles.open : ''}`} onClick={toggleMenu}>
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
        <span className={globalStyles.line} />
      </div>}
      <div className={globalStyles.wrapper}>
        <h1 className={globalStyles.title}>EZ Parking</h1>
      </div>
      { userLogado && <div className={globalStyles.profileImg} onClick={handleProfileRequest}>
        <span className={globalStyles.elem}></span>
        <span className={globalStyles.elem}></span>
      </div>}
      { !userLogado && <div className={globalStyles.profileImg} style={{ visibility: 'hidden'}} />}
      
    </div>
  )
}

export default Header
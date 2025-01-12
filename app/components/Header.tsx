'use client'
import React from 'react'
import styles from "./Styles.module.css"
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
    
    <div className={styles.headerMain}>
      { userLogado && <div className={`${styles.menuImg} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>}
      <div className={styles.wrapper}>
        <h1 className={styles.title}>EZ Parking</h1>
      </div>
      { userLogado && <div className={styles.profileImg} onClick={handleProfileRequest}>
        <span className={styles.elem}></span>
        <span className={styles.elem}></span>
      </div>}
      
    </div>
  )
}

export default Header
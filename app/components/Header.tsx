'use client'
import React from 'react'
import styles from "./Styles.module.css"
import { useState , FC } from 'react';

interface HeaderProps {
  onValueChange: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ onValueChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userLogado, setUserLogado] = useState(false);

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
      <div className={`${styles.menuImg} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>EZ Parking</h1>
      </div>
      <div className={styles.profileImg} onClick={handleProfileRequest}>
        <span className={styles.elem}></span>
        <span className={styles.elem}></span>
      </div>
      
    </div>
  )
}

export default Header
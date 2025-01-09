'use client'
import React from 'react'
import styles from "./Styles.module.css"
import { useState } from 'react';
import image from "next/image"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
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
      { <img className={styles.profileImg} src="/img/profile.webp"/> }
    </div>
  )
}

export default Header
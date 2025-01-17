import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div>
        <div className={styles.wrapper}>
            <p className={styles.footerOptions} style={{ marginTop: '1.5vh' }}>● Sobre nós</p>
            <p className={styles.footerOptions}>● Contratar para a minha empresa</p>

        </div>
    </div>
  )
}

export default Footer
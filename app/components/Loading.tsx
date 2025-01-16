import React, { useState } from 'react'
import styles from '../styles/Loading.module.css'

const Loading = () => {
    const [lineSize] = useState(4);
    const lines = Array.from({ length: 36}, (_, index) => (
        <div key={index} className={styles.line} style={{transform: `rotate(${index * 10}deg) translateX(${1.6}rem)`,}} />
    ));
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.loadingIconWrapper}>
        <div className={styles.loadingIcon}>
                {lines}
            </div>
        </div>   
            <div className={styles.loadingText}>Loading</div>
        </div>
    </div>
    
  );
}

export default Loading
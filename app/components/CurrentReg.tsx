'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import globalStyles from "../styles/Styles.module.css"

const CurrentReg = () => {

  const [hasActiveReg, setHasActiveReg] = useState<boolean | null>(null);

  useEffect(() => {
    const checkActiveReg = () => {
      setHasActiveReg(false);
    };

    checkActiveReg();
  }, []);

  if (hasActiveReg === null) {
    return <div></div>; 
  }

  if(!hasActiveReg){
    return (
      <div />
    )
  } else {
    return (
      <div className={globalStyles.currentRegMain} />
    )
  }
};

export default CurrentReg;
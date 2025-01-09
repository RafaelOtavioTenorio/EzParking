'use client'
import { useState } from 'react'
import React from 'react';
import styles from './Styles.module.css';

const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>('');

    const clearInput = () => {
        setSearchText('');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchText(event.target.value);
    }

  return (
    
    <div className={styles.searchBar}>
        <input type='text' placeholder='Buscar vagas:' className={styles.textInputArea} value={searchText} onChange={handleInputChange} />
        {searchText && <button onClick={clearInput} className={styles.xButton} />}
        <button className={styles.voiceSearchIcon}><div className={styles.voiceSearchIconAdditional} /></button>
        <button className={styles.searchIcon} />
        
    </div>
  )
}

export default SearchBar
'use client'
import { useState, useEffect } from 'react'
import React from 'react';
import globalStyles from "../styles/Styles.module.css"

interface SearchBarProps {
  setTelaAtual: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setTelaAtual }) => {
    const [searchText, setSearchText] = useState<string>('');

    const clearInput = () => {
        setSearchText('');
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchText(event.target.value);
    }

    useEffect(() => {
      setTelaAtual("home");
    }), [setTelaAtual];

  return (
    
    <div className={globalStyles.searchBar}>
        <input type='text' placeholder='Buscar vagas:' className={globalStyles.textInputArea} value={searchText} onChange={handleInputChange} />
        {searchText && <button onClick={clearInput} className={globalStyles.xButton} />}
        <button className={globalStyles.voiceSearchIcon}><div className={globalStyles.voiceSearchIconAdditional} /></button>
        <button className={globalStyles.searchIcon} />
        
    </div>
  )
}

export default SearchBar
'use client'
import React, { use } from 'react'
import Header from "./Header";
import CurrentReg from "./CurrentReg";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Vehicles from "./Vehicles";
import Login from "./Login";
import Cadastro from "./Cadastro";
import { useState, useEffect } from "react";

const Body = () => {
    const [userLogado, setUserLogado] = useState(false);
    const [cadastrarUsuario, setCadastrarUsuario] = useState(false);
    const handleProfileReq = (value: boolean) => {
        setUserLogado(value);
        
      }

      useEffect(() => {
        if(sessionStorage.getItem("loginData") !== null){
          setUserLogado(true);
        }
      }, []);

      

  return (
    <>
    <Header userLogado={userLogado} onValueChange={handleProfileReq}  />
    { userLogado && <CurrentReg />}
    { userLogado && <SearchBar />}
    { userLogado && <Favorites />}
    { userLogado && <Vehicles />}
    { !userLogado && !cadastrarUsuario && <Login onLoginSuccess={() => setUserLogado(true)} onCadastroRequest={() => setCadastrarUsuario(true)} />}
    { !userLogado && cadastrarUsuario && <Cadastro />}
    </>

  )
}

export default Body
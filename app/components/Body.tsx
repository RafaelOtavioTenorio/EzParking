'use client'
import React from 'react'
import Header from "./Header";
import CurrentReg from "./CurrentReg";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Vehicles from "./Vehicles";
import Login from "./Login"
import { useState, useEffect } from "react";

const Body = () => {
    const [userLogado, setUserLogado] = useState(false);
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
    { !userLogado && <Login onLoginSuccess={() => setUserLogado(true)} />}
    </>

  )
}

export default Body
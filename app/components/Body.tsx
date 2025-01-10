'use client'
import React from 'react'
import Header from "./Header";
import CurrentReg from "./CurrentReg";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Vehicles from "./Vehicles";
import Login from "./Login"
import { useState } from "react";

const Body = () => {
    const [userLogado, setUserLogado] = useState(true);
    const handleProfileReq = (value: boolean) => {
        setUserLogado(value);
      }
  return (
    <>
    <Header onValueChange={handleProfileReq}  />
    { userLogado && <CurrentReg />}
    { userLogado && <SearchBar />}
    { userLogado && <Favorites />}
    { userLogado && <Vehicles />}
    { !userLogado && <Login />}
    </>

  )
}

export default Body
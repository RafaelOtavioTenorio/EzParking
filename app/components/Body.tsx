'use client'
import Header from "./Header";
import CurrentReg from "./CurrentReg";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Vehicles from "./Vehicles";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const Body = () => {
    const [userLogado, setUserLogado] = useState(false);
    const [telaAtual, setTelaAtual] = useState("loading");
    const [cadastrarUsuario, setCadastrarUsuario] = useState(false);
    const handleProfileReq = (value: boolean) => {
        setUserLogado(value);
        
      }

      useEffect(() => {
        setTelaAtual("");
        if(sessionStorage.getItem("loginData") !== null){
          setUserLogado(true);
        }
      }, []);

      

  return (
    <>
    { telaAtual !== "loading" && <Header setCadastrarUsuario={setCadastrarUsuario} userLogado={userLogado} telaAtual={telaAtual} onValueChange={handleProfileReq}  />}
    { telaAtual === "loading" && <Loading />}
    { userLogado && telaAtual !== "loading" && <CurrentReg />}
    { userLogado && telaAtual !== "loading" && <SearchBar setTelaAtual={setTelaAtual} />}
    { userLogado && telaAtual !== "loading" && <Favorites />}
    { userLogado && telaAtual !== "loading" && <Vehicles />}
    { !userLogado && telaAtual !== "loading" && !cadastrarUsuario && <Login setTelaAtual={setTelaAtual} onLoginSuccess={() => setUserLogado(true)} onCadastroRequest={() => setCadastrarUsuario(true)} />}
    { !userLogado && telaAtual !== "loading" && cadastrarUsuario && <Cadastro setTelaAtual={setTelaAtual} />}
    </>

  )
}

export default Body
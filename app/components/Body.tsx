'use client'
import Header from "./Header";
import CurrentReg from "./CurrentReg";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Vehicles from "./Vehicles";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Loading from "./Loading";
import ProfileBoxMenu from "./ProfileBoxMenu";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const Body = () => {
    const [userLogado, setUserLogado] = useState(false);
    const [telaAtual, setTelaAtual] = useState("loading");
    const [cadastrarUsuario, setCadastrarUsuario] = useState(false);
    const [profileBoxMenu, setProfileBoxMenu] = useState(false);

      useEffect(() => {
        setTelaAtual("loading");
        if(sessionStorage.getItem("loginData") !== null){
          setUserLogado(true);
        }
        if(!userLogado){
          setTelaAtual("login");
        } else if (userLogado){
          setTelaAtual("home");
        }
      }, []);

      

  return (
    <>
    { telaAtual !== "loading" && <Header setCadastrarUsuario={setCadastrarUsuario} userLogado={userLogado} telaAtual={telaAtual} profileBoxMenu={profileBoxMenu} setProfileBoxMenu={setProfileBoxMenu} />}
    { telaAtual === "loading" && <Loading />}
    { profileBoxMenu && telaAtual === "home" && <ProfileBoxMenu />}
    { userLogado && telaAtual !== "loading" && <CurrentReg />}
    { userLogado && telaAtual !== "loading" && <SearchBar setTelaAtual={setTelaAtual} />}
    { userLogado && telaAtual !== "loading" && <Favorites />}
    { userLogado && telaAtual !== "loading" && <Vehicles />}
    { !userLogado && telaAtual !== "loading" && !cadastrarUsuario && <Login setTelaAtual={setTelaAtual} onLoginSuccess={() => setUserLogado(true)} onCadastroRequest={() => setCadastrarUsuario(true)} />}
    { !userLogado && telaAtual !== "loading" && cadastrarUsuario && <Cadastro setTelaAtual={setTelaAtual} />}
    { telaAtual === "home" && <Footer />}
    </>

  )
}

export default Body
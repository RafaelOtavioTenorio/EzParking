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
import TipoUser from "./TipoUser";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const Body = () => {
    const [userLogado, setUserLogado] = useState(false);
    const [telaAtual, setTelaAtual] = useState("loading");
    const [selecionarTipoUser, setSelecionarTipoUser] = useState(0);
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
    { telaAtual !== "loading" && <Header setCadastrarUsuario={setCadastrarUsuario} userLogado={userLogado} telaAtual={telaAtual} profileBoxMenu={profileBoxMenu} setProfileBoxMenu={setProfileBoxMenu} setSelecionarTipoUser={setSelecionarTipoUser} />}
    { telaAtual === "loading" && <Loading />}
    { profileBoxMenu && telaAtual === "home" && <ProfileBoxMenu />}
    { userLogado && telaAtual !== "loading" && <CurrentReg />}
    { userLogado && telaAtual !== "loading" && <SearchBar setTelaAtual={setTelaAtual} />}
    { userLogado && telaAtual !== "loading" && <Favorites />}
    { userLogado && telaAtual !== "loading" && <Vehicles />}
    { !userLogado && telaAtual !== "loading" && !cadastrarUsuario && <Login setTelaAtual={setTelaAtual} onLoginSuccess={() => setUserLogado(true)} onCadastroRequest={() => setCadastrarUsuario(true)} />}
    { !userLogado && selecionarTipoUser === 0 && telaAtual !== "loading" && cadastrarUsuario && <TipoUser setSelecionarTipoUser={setSelecionarTipoUser}/>}
    { !userLogado && selecionarTipoUser !== 0 && telaAtual !== "loading" && cadastrarUsuario && <Cadastro setTelaAtual={setTelaAtual} selecionarTipoUser={selecionarTipoUser} />}
    { telaAtual === "home" && <Footer />}
    </>

  )
}

export default Body
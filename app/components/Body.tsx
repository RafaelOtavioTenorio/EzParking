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
import Perfil from "./Perfil";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const Body = () => {
    const [tipoUser, setTipoUser] = useState(-1);
    const [userLogado, setUserLogado] = useState(false);
    const [telaAtual, setTelaAtual] = useState("loading");
    const [selecionarTipoUser, setSelecionarTipoUser] = useState(0);
    const [cadastrarUsuario, setCadastrarUsuario] = useState(false);
    const [profileBoxMenu, setProfileBoxMenu] = useState(false);
    const [lastTela, setLastTela] = useState("");

    useEffect(() => {
      setTelaAtual("loading");
      const loginData = sessionStorage.getItem("loginData");
      if(loginData){
          try{
            setUserLogado(true);
          const parsedData = JSON.parse(loginData);
          if(parsedData && parsedData.tipo !== undefined){
            setTipoUser(parseInt(parsedData.tipo, 10));
          }
          setTelaAtual("home");
          } catch (error){
            console.error("Erro ao parsear loginData:", error);
            setTelaAtual("login");
          }
      } else {
        setUserLogado(false);
        setTelaAtual("login");
      }
      }, []);

      

  return (
    <>
    { telaAtual !== "loading" && <Header setCadastrarUsuario={setCadastrarUsuario} telaAtual={telaAtual} profileBoxMenu={profileBoxMenu} setProfileBoxMenu={setProfileBoxMenu} setSelecionarTipoUser={setSelecionarTipoUser} />}
    { telaAtual === "loading" && <Loading />}
    { profileBoxMenu && telaAtual !== "loading" && telaAtual !== "cadastro" && telaAtual !== "tipoUser" && <ProfileBoxMenu isActive={profileBoxMenu} setUserLogado={setUserLogado} setProfileBoxMenu={setProfileBoxMenu} setTelaAtual={setTelaAtual} telaAtual={telaAtual} setLastTela={setLastTela}/>}

    { userLogado && telaAtual === "perfil" && <Perfil tipoUser={tipoUser} lastTela={lastTela} setTelaAtual={setTelaAtual}/> }

    { userLogado && telaAtual !== "loading" && telaAtual !== "perfil" && <CurrentReg />}
    { userLogado && telaAtual !== "loading" && telaAtual !== "perfil" && <SearchBar setTelaAtual={setTelaAtual} />}
    { userLogado && telaAtual !== "loading" && telaAtual !== "perfil" && <Favorites />}
    { userLogado && telaAtual !== "loading" && telaAtual !== "perfil" && <Vehicles />}
    { !userLogado && telaAtual !== "loading" && !cadastrarUsuario && <Login setTelaAtual={setTelaAtual} onLoginSuccess={() => setUserLogado(true)} onCadastroRequest={() => setCadastrarUsuario(true)} setTipoUser={setTipoUser} />}
    { !userLogado && selecionarTipoUser === 0 && telaAtual !== "loading" && cadastrarUsuario && <TipoUser setSelecionarTipoUser={setSelecionarTipoUser} setTelaAtual={setTelaAtual}/>}
    { !userLogado && selecionarTipoUser !== 0 && telaAtual !== "loading" && cadastrarUsuario && <Cadastro setTelaAtual={setTelaAtual} selecionarTipoUser={selecionarTipoUser} />}
    { telaAtual === "home" && <Footer />}
    </>

  )
}

export default Body
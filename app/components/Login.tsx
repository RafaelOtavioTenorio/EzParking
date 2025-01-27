'use client'
import globalStyles from "../styles/Styles.module.css"
import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';

interface LoginProps {
    onLoginSuccess: () => void;
    onCadastroRequest: () => void;
    setTelaAtual: (value: string) => void;
    setTipoUser: (value:number) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onCadastroRequest, setTelaAtual, setTipoUser }) => {
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');
    const[mostrarSenha, setMostrarSenha] = useState(false);
    const[lembrarIsChecked, setLembrarIsChecked] = useState(false);

    useEffect(() => {
        setTelaAtual("login");
        const ultimoEmail = localStorage.getItem("ultimoEmail");
        const ultimaSenha = localStorage.getItem("ultimaSenha");
        if(ultimoEmail != null && ultimaSenha != null){
            setLogin(ultimoEmail);
            setSenha(ultimaSenha);
        }
    }, [setTelaAtual]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLembrarIsChecked(e.target.checked);
    }

    const togglePasswordVisibility = () => {
        setMostrarSenha(!mostrarSenha);
    }

    const handleCadastroRequest = () => {
        onCadastroRequest();
    }

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const fetchData = async () => {
            const res = await fetch('https://localhost:7007/api/Users/' + login);
            const json = await res.json();
            if(json != null){
                console.log(json);
            }
            else {
                console.log('Erro!');
            }
            if(login == json.email && senha == json.senha){
                sessionStorage.setItem("loginData", JSON.stringify(json));
                setTipoUser(parseInt(json.tipo, 10));
                console.log("Logado com sucesso!");
                if(lembrarIsChecked){
                    localStorage.setItem("ultimoEmail", login);
                    localStorage.setItem("ultimaSenha", senha);
                }
                onLoginSuccess();
            } else {
                console.log("Erro ao logar!");
            }
        }
        fetchData();
    }

  return (
    <form action="" className={globalStyles.loginForm}>
        <div className={globalStyles.loginFormIcon} />
        <div className={globalStyles.loginFormIcon2}>
            <div className={globalStyles.loginFormIcon3} />
        </div> 
            <h1 className={globalStyles.loginFormTitle}>Login</h1>
        <div className={globalStyles.loginField}>
            <h1>E-mail: <input type="text" className={globalStyles.loginInput} value={login} onChange={(e) => setLogin(e.target.value)} /></h1>
        </div>
        <div className={globalStyles.senhaField}>
            <h1>Senha: <input type={mostrarSenha ? "text" : "password"} className={globalStyles.senhaInput} value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button type='button' onClick={togglePasswordVisibility} className={globalStyles.togglePasswordVisibilityButton}>{mostrarSenha ? <FaEyeSlash/> : <FaEye /> }</button>
            </h1>
        </div>
        <div className={globalStyles.wrapperLogin}>
            <input type="checkbox" name="Lembrar me" id="" className={globalStyles.lembrarMarcador} onChange={(e) => handleCheckboxChange(e)} />
            <h1>Lembrar me</h1>
            <button onClick={handleCadastroRequest} className={globalStyles.semCadastroButton}>Não tenho cadastro</button>
        </div>
        <button onClick={handleLogin} className={globalStyles.loginButton}>Login</button>
    </form>
  )
}

export default Login
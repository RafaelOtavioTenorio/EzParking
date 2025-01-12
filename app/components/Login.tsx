'use client'
import React from 'react'
import styles from "./Styles.module.css"
import { useState } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({onLoginSuccess}) => {
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');
    const[mostrarSenha, setMostrarSenha] = useState(false);

    const togglePasswordVisibility = () => {
        setMostrarSenha(!mostrarSenha);
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
                sessionStorage.setItem("loginData", json);
                console.log("Logado com sucesso!");
                onLoginSuccess();
            } else {
                console.log("Erro ao logar!");
            }
        }
        fetchData();
    }

  return (
    <form action="" className={styles.loginForm}>
        <div className={styles.loginFormIcon} />
        <div className={styles.loginFormIcon2}>
            <div className={styles.loginFormIcon3} />
        </div> 
            
            <h1 className={styles.loginFormTitle}>Login</h1>
        <div className={styles.loginField}>
            <h1>E-mail: <input type="text" className={styles.loginInput} value={login} onChange={(e) => setLogin(e.target.value)} /></h1>
        </div>
        <div className={styles.senhaField}>
            <h1>Senha: <input type={mostrarSenha ? "text" : "password"} className={styles.senhaInput} value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button type='button' onClick={togglePasswordVisibility} className={styles.togglePasswordVisibilityButton}>{mostrarSenha ? <FaEyeSlash/> : <FaEye /> }</button>
            </h1>
        </div>
        
        <div className={styles.wrapperLogin}>
            <input type="checkbox" name="Lembrar me" id="" className={styles.lembrarMarcador} />
            <h1>Lembrar me</h1>
            <button className={styles.semCadastroButton}>Não tenho cadastro</button>
        </div>
        <button onClick={handleLogin} className={styles.loginButton}>Login</button>
    </form>
  )
}

export default Login
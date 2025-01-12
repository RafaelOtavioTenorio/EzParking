'use client'
import React from 'react'
import styles from "./Styles.module.css"
import { useState } from 'react';

interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({onLoginSuccess}) => {
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

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
    <form action="">
        <h1>Login: <input type="text" className={styles.loginInput} value={login} onChange={(e) => setLogin(e.target.value)} /></h1>
        <h1>Senha: <input type="text" className={styles.senhaInput} value={senha} onChange={(e) => setSenha(e.target.value)} /></h1>
        <div className={styles.wrapperLogin}>
            <input type="checkbox" name="Lembrar me" id="" />
            <h1>Lembrar me</h1>
            <button>Não tenho cadastro</button>
        </div>
        <button onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login
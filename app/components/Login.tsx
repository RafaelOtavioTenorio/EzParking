'use client'
import React from 'react'
import styles from "./Styles.module.css"
import { useState } from 'react';

const Login = () => {
    const[login, setLogin] = useState('');
    const[senha, setSenha] = useState('');

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const fetchData = async () => {
            const res = await fetch('https://localhost:7007/swagger/' + login);
            const json = await res.json();
            if(json != null){
                console.log(json);
            }
            else {
                console.log('Erro!');
            }
        }
        fetchData();
    }

  return (
    <form action="">
        <h1>Login: <input type="text" className='login' value={login} onChange={(e) => setLogin(e.target.value)} /></h1>
        <h1>Senha: <input type="text" className='senha' value={senha} onChange={(e) => setSenha(e.target.value)} /></h1>
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
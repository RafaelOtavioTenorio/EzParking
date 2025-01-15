'use client'
import globalStyles from "../styles/Styles.module.css"
import cadastroStyles from "../styles/Cadastro.module.css"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash} from 'react-icons/fa';

const Cadastro = () => {
  const[mostrarSenha, setMostrarSenha] = useState(false);
  const[formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    senha: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const cpfFormatado = formData.cpf.replace(/\D/g, '');
    if(cpfFormatado.length !== 11) {
      alert('O CPF deve conter 11 números.');
      return;
    }

    const dataNascimentoFormatada = new Date(formData.dataNascimento).toISOString().split('T')[0];

    const apiData = {
      nome: formData.nome,
      tipo: 1,
      email: formData.email,
      senha: formData.senha,
      cpf: cpfFormatado,
      dataNascimento: dataNascimentoFormatada,
      veiculos: [],
      active: true,
    };

    try {
      const response = await fetch('https://localhost:7007/api/Users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if(!response.ok){
        throw new Error('Erro ao enviar dados.');
      }

      const result = await response.json();
      console.log('Sucesso:', result);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro', error);
      alert('Ocorreu um erro ao cadastrar.');
    }
  };

  const togglePasswordVisibility = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <form onSubmit={handleSubmit} className={cadastroStyles.cadastroForm}>

      <h1 className={cadastroStyles.cadastroFormTitle}>Cadastrar:</h1>

      <div className={cadastroStyles.loginField}>
        <h1>Nome: <input name="nome" type="text" className={cadastroStyles.nomeInput} value={formData.nome} onChange={handleChange} required /></h1>
      </div>
      <div className={cadastroStyles.loginField}>
        <h1 className={cadastroStyles.cpfText}>CPF: <input name="cpf" type="text" className={cadastroStyles.cpfInput} value={formData.cpf} onChange={handleChange} required /></h1>
      </div>
      <div className={cadastroStyles.loginField}>
        <h1 className={cadastroStyles.dataNascText}>Data Nasc: <input name="dataNascimento" type="date" className={cadastroStyles.dataNascInput} value={formData.dataNascimento} onChange={handleChange} required /></h1>
      </div>
      <div className={cadastroStyles.loginField}>
        <h1>E-mail: <input name="email" type="text" className={cadastroStyles.loginInput} value={formData.email} onChange={handleChange} required /></h1>
      </div>
      <div className={cadastroStyles.senhaField}>
        <h1>Senha: <input name="senha" type={mostrarSenha ? "text" : "password"} className={cadastroStyles.senhaInput} value={formData.senha} onChange={handleChange} required />
          <button type='button' onClick={togglePasswordVisibility} className={globalStyles.togglePasswordVisibilityButton}>{mostrarSenha ? <FaEyeSlash/> : <FaEye /> }</button>
        </h1>
      </div>
        <button type="submit" className={cadastroStyles.cadastrarButton}>Cadastrar</button>
    </form>
  )
}

export default Cadastro
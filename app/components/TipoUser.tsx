import React, { useState, useEffect } from 'react'
import cadastroStyles from '../styles/Cadastro.module.css'

interface TipoUserProps {
  setSelecionarTipoUser: (value: number) => void;
  setTelaAtual: (value: string) => void;
}

const TipoUser: React.FC<TipoUserProps> = ({ setSelecionarTipoUser, setTelaAtual }) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedButton(buttonId);
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if(selectedButton !== null){
        setSelecionarTipoUser(selectedButton);
      } else {
        alert("Selecione o tipo de cadastro!");
      }
  };

  useEffect (() => {
    setTelaAtual("tipoUser");
  }, []);

  return (
    <form onSubmit={handleSubmit} className={cadastroStyles.cadastroForm}>

      <h1 className={cadastroStyles.cadastroFormTitle}>Você é:</h1>
      <div className={cadastroStyles.selecaoUsuario}>
        <button className={`${cadastroStyles.usuarioButton} ${selectedButton === 1 ? cadastroStyles.selected : ""}`} onClick={(e) => handleButtonClick(1, e)}>Usuario</button>
        <button className={`${cadastroStyles.empresaButton} ${selectedButton === 2 ? cadastroStyles.selected : ""}`} onClick={(e) => handleButtonClick(2, e)}>Empresa</button>
      </div>

      <button type="submit" className={cadastroStyles.cadastrarButton}>Cadastrar</button>
    </form>
  )
}

export default TipoUser
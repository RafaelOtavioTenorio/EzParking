import React, { FC } from 'react'
import globalStyles from '../styles/Styles.module.css'

interface PerfilProps{
  tipoUser: number;
  setTelaAtual: (value: string) => void;
  lastTela: string;
}

const Perfil: FC<PerfilProps> = ({ tipoUser, lastTela, setTelaAtual }) => {

  const handleReturnButton = () => {
    setTelaAtual(lastTela);
  };

  return (
    <>
      <div className={globalStyles.backButton} onClick={handleReturnButton} style={{visibility: 'visible', marginTop: '1vh', marginLeft: '1vh', marginBottom: '1vh', border: '2px solid white'}}>
      </div>

      {/* Perfil Usuario */}
      { tipoUser === 1 &&
        <h1>Perfil Usuario</h1>
      }
      
      {/* Perfil Empresa */}
      { tipoUser === 2 &&
        <h1>Perfil Empresa</h1>
      }
    </>
  )
}

export default Perfil
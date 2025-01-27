import React, { FC } from 'react'
import styles from '../styles/ProfileBoxMenu.module.css'

interface ProfileBoxMenuProps{
  isActive: boolean;
  setUserLogado: (value: boolean) => void;
  setProfileBoxMenu: (value: boolean) => void;
  setTelaAtual: (value: string) => void;
  telaAtual: string;
  setLastTela: (value: string) => void;
}

const ProfileBoxMenu: FC<ProfileBoxMenuProps> = ({ isActive, setUserLogado, setProfileBoxMenu, setTelaAtual, setLastTela, telaAtual }) => {

  const handleProfileScreen = () => {
    setLastTela(telaAtual);
    setTelaAtual("perfil");
  };

  const handleLogoff = () => {
    sessionStorage.clear();
    setProfileBoxMenu(false);
    setUserLogado(false);
  };

  return (
    <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
        <button className={styles.profileButton} onClick={handleProfileScreen}>Perfil</button>
        <button className={styles.settingsButton} >Configurações</button>
        <button className={styles.logoffButton} onClick={handleLogoff}>Sair</button>
    </div>
  )
}

export default ProfileBoxMenu
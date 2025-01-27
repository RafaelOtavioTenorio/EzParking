import React, { FC } from 'react'
import styles from '../styles/ProfileBoxMenu.module.css'

interface ProfileBoxMenuProps{
  isActive: boolean;
  setUserLogado: (value: boolean) => void;
  setProfileBoxMenu: (value: boolean) => void;
  setProfileScreenActive: (value: boolean)=> void;
}

const ProfileBoxMenu: FC<ProfileBoxMenuProps> = ({ isActive, setUserLogado, setProfileBoxMenu, setProfileScreenActive }) => {

  const handleProfileScreen = () => {
    setProfileScreenActive(true);
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
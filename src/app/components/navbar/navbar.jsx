
import { NavLink, useNavigate } from 'react-router-dom';
import DarkMode, { darkModeAtom } from '../darkmode/darkmode';
import './style.css'
import gitHubLogo from './img/github-logo.png'
import darkIcon from './img/darkMode.png'
import lightIcon from './img/lightMode.png'
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

const NavBar = () => {

    const navigate = useNavigate()

    const darkMode = useAtomValue(darkModeAtom)

    const [active, setActive] = useState('')

    

    const toggleRowActive = () => {
        setActive(!active)
    }

    return (
        <nav className="navbar">
            <div className="nav-container container">
                <div className="nav-logo" onClick={() => { navigate("/") }}>
                    seimoro
                    <span>.development</span>
                </div>
                <div className={`nav-row ${active ? 'active' : ''}`} >
                    <div className="nav-links">
                        <NavLink to='/' className="nav-link" onClick={toggleRowActive}>Главная</NavLink>
                        <NavLink to='/blog' className="nav-link" onClick={toggleRowActive}>Блог</NavLink>
                        <NavLink to='/projects' className="nav-link" onClick={toggleRowActive}>Проекты</NavLink>
                        <NavLink to='/contacts' className="nav-link" onClick={toggleRowActive}>Контакты</NavLink>
                    </div>
                    <a href='https://github.com/seimoro' target='_blank' rel='noreferrer' className="gitHub-icon">
                        <img src={gitHubLogo} alt="" />
                    </a>
                    <div className="darkModeSwitch">
                        <img src={darkMode ? darkIcon : lightIcon} alt="" className="darkModeImg" />
                        <DarkMode />
                    </div>
                </div>

                <div className="menu" onClick={toggleRowActive}>
                    <div className="menu_line"></div>
                    <div className="menu_line"></div>
                    <div className="menu_line"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
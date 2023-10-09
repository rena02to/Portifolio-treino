import style from './NavBar.module.css';
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.outerWidth);

    const updateWindowSize = () => {
        setWindowSize(window.outerWidth);
    };
    
    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
    }, []);
    
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return(
        <div>
            <nav className={style.navBar}>
                <a href='#home' onClick={handleLinkClick}><h1 className={style.logo}>&lt;RA/&gt;</h1></a>
                {windowSize > 1000 ?
                    (<ul className={style.elementos}>
                        <li><a className={style.home} href='#home' onClick={handleLinkClick}><p>Home</p></a></li>
                        <li><a className={style.projetos} href='#projetos' onClick={handleLinkClick}><p>Projetos</p></a></li>
                        <li><a className={style.certificacoes} href='#certificações' onClick={handleLinkClick}><p>Certificações</p></a></li>
                        <li><a className={style.experiencias} href='#experiencias' onClick={handleLinkClick}><p>Experiências</p></a></li>
                        <li><a className={style.sobre} href='#sobre' onClick={handleLinkClick}><p>Sobre</p></a></li>
                        <li><button className={style.contate} href='#contato' onClick={handleLinkClick}>Contate-me</button></li>
                    </ul>
                    ) : (
                        <>
                          <button className={style.menu} onClick={handleMenuClick}>
                            <FaBars className={menuOpen ? style.menuRotate : ''}/>
                          </button>
                          {menuOpen && (
                            <div className={style.sidebar}>
                                <ul className={style.elementosLateral}>
                                    <li><a className={style.home} href='#home' onClick={handleLinkClick}><p>Home</p></a></li>
                                    <li><a className={style.projetos} href='#projetos' onClick={handleLinkClick}><p>Projetos</p></a></li>
                                    <li><a className={style.experiencias} href='#experiencias' onClick={handleLinkClick}><p>Experiências</p></a></li>
                                    <li><a className={style.sobre} href='#sobre' onClick={handleLinkClick}><p>Sobre</p></a></li>
                                    <li><button className={style.contate} href='#contato' onClick={handleLinkClick}>Contate-me</button></li>
                                </ul>
                            </div>
                          )}
                        </>
                    )}
            </nav>
        </div>
    );
}

export default NavBar;
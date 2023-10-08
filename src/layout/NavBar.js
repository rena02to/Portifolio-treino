import style from './NavBar.module.css';

function NavBar(){
    const handleLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };}

    return(
        <div>
            <nav className={style.navBar}>
                <a href='#home' onClick={handleLinkClick}><h1 className={style.logo}>&lt;RA/&gt;</h1></a>
                <ul className={style.elementos}>
                    <li><a className={style.home} href='#home' onClick={handleLinkClick}><p>Home</p></a></li>
                    <li><a className={style.projetos} href='#projetos' onClick={handleLinkClick}><p>Projetos</p></a></li>
                    <li><a className={style.experiencias} href='#experiencias' onClick={handleLinkClick}><p>Experiências</p></a></li>
                    <li><a className={style.sobre} href='#sobre' onClick={handleLinkClick}><p>Sobre</p></a></li>
                    <li><button className={style.contate} href='#contato' onClick={handleLinkClick}><p>Contate-me</p></button></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
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
                <a href='#home' onClick={handleLinkClick}><h1 className={style.logo}>&lt; RA /&gt;</h1></a>
                <ul className={style.elementos}>
                    <li><a href='#home' onClick={handleLinkClick}>Home</a></li>
                    <li><a href='#projetos' onClick={handleLinkClick}>Projetos</a></li>
                    <li><a href='#experiencias' onClick={handleLinkClick}>Experiências</a></li>
                    <li><a href='#sobre' onClick={handleLinkClick}>Sobre</a></li>
                    <li><button href='#contato' onClick={handleLinkClick}>Contate-me</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
import style from './NavBar.module.css';

function NavBar(){
    return(
        <nav className={style.navBar}>
            <h1 className={style.logo}>&lt; RA /&gt;</h1>
            <p>Home</p>
            <p>Sobre</p>
            <p>Experiências</p>
            <p>Projetos</p>
        </nav>
    );
}

export default NavBar;
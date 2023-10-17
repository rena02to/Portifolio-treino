import NavBar from './../layout/NavBar';
import style from './Main.module.css';
import Home from './Home';
import Projetos from './Projetos';
import Sobre from './Sobre';
import Contato from './Contato';
import Footer from './../layout/Footer';
import Certificados from './Certificados';
import Habilidades from './Habilidades';
import Experiencias from './Experiencias';

function Main(){

    return(
        <div className={style.main}>
            <NavBar />
            <Home />
            <Sobre />
            <Experiencias />
            <Projetos />
            <Certificados />
            <Habilidades />
            <Contato />
            <Footer />
        </div>
    );
}

export default Main;
import NavBar from './../layout/NavBar';
import style from './Main.module.css';
import Home from './Home';
import Projetos from './Projetos';
import Experiencias from './Experiencias';
import Sobre from './Sobre';
import Contato from './Contato';
import Footer from './../layout/Footer';

function Main(){

    return(
        <div className={style.main}>
            <NavBar />
            <Home />
            <Projetos />
            <Experiencias />
            <Sobre />
            <Contato />
            <Footer />
        </div>
    );
}

export default Main;
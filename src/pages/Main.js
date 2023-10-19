import NavBar from './../layout/NavBar';
import style from './Main.module.css';
import Home from './Home';
import Projetos from './Projetos';
import Sobre from './Sobre';
import Contato from './Contato';
import Footer from './../layout/Footer';
import Habilidades from './Habilidades';
import Experiencias from './Experiencias';

function Main(){

    return(
        <div className={style.main}>
            <section><NavBar /></section>
            <section><Home /></section>
            <section><Sobre /></section>
            <section><Experiencias /></section>
            <section><Projetos /></section>
            <section><Habilidades /></section>
            <section><Contato /></section>
            <section><Footer /></section>
        </div>
    );
}

export default Main;
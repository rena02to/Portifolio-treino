import style from './NotFound.module.css';
import _404 from './../imagens/404.jpg';

function  NotFound_404(){
    return(
        <div className={style.NotFound}>
            <h1>Página não encontrada!</h1>
            <p>Oops! A página que você procura não existe ou está em manutenção.</p>
            <img alt="Not Found" src={_404}/>
        </div>
    );
}

export default NotFound_404;
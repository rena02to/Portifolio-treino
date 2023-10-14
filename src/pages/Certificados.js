import style from './Certificados.module.css';
import Cogumelo from './../imagens/cogumelo.png';

function Certificados(){
    return(
        <div id="certificados" className={style.certificados}>
            <div className={style.title}>
            <img alt='cogumelo' src={Cogumelo} className={style.cogumelo} />
                <h1>Certificados</h1>
                <img alt='cogumelo' src={Cogumelo} className={style.cogumelo} />
            </div>
        </div>
    );
}

export default Certificados;
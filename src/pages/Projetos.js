import carnivorusPlaint from './../imagens/carnivorous-plant.png';
import style from './Projetos.module.css';

function Projetos(){
    return(
        <div id="projetos" className={style.projetos}>
            <div className={style.titulo}>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
                <h1>Projetos</h1>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
            </div>
        </div>
    );
}

export default Projetos;
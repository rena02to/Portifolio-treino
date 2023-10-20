import carnivorusPlaint from './../imagens/carnivorous-plant.png';
import style from './Projetos.module.css';
import { PiLinkLight } from 'react-icons/pi';

function Projetos(){
    return(
        <div id="projetos" className={style.projetos}>
            <div className={style.titulo}>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
                <h1>Projetos</h1>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
            </div>

            <div className={style.portifolio}>
                <div className={style.portifolioConteudo}>
                    <spam className={style.interno}>
                        <p className={style.legenda}>Portifólio principal</p>
                        <a href='https://renato-alves.vercel.app' target='_blank' rel='noopener noreferrer'>
                            <div>
                                <PiLinkLight />
                                <p>Conheça o projeto clicando aqui</p>
                            </div>
                        </a>
                    </spam>
                </div>
                <h2 className={style.titleProject}>Portifólio Principal</h2>
                <p className={style.legendProject}>Meu futuro portifólio principal que será criado para divulgar todos os meus trabalhos e projetos, de forma que estará em constante evolução e desenvolvimento. Este projeto está sendo criado usando React.JS e Next.js.</p>
                <p className={style.legend2Project}>Portanto, se quiser acompanhar todos os meus trabalhos, fique de olho nesse portifólio.</p>
            </div>
        </div>
    );
}

export default Projetos;
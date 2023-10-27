import carnivorusPlaint from './../imagens/carnivorous-plant.png';
import style from './Projetos.module.css';
import { PiLinkLight } from 'react-icons/pi';

function Projetos(){
    return(
        <div className={style.main}>
            <div className={style.titulo}>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
                <h1>Projetos</h1>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
            </div>
            <h2>Para conhecer o projeto, clique na imagem:</h2>
            <div id="projetos" className={style.projetos}>
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
                    <p className={style.legendProject}>Portanto, se quiser acompanhar todos os meus trabalhos, fique de olho nesse portifólio.</p>
                </div>
                <div className={style.connectPlanos}>
                    <div className={style.connectPlanosConteudo}>
                        <spam className={style.interno}>
                            <p className={style.legenda}>Connect Planos</p>
                            <a href='https://connect-planos.vercel.app' target='_blank' rel='noopener noreferrer'>
                                <div>
                                    <PiLinkLight />
                                    <p>Conheça o projeto clicando aqui</p>
                                </div>
                            </a>
                        </spam>
                    </div>
                    <h2 className={style.titleProject}>Connect Planos</h2>
                    <p className={style.legendProject}>Um site projetado para a compra de pseudo planos em que o usuário terá que inserir dados válidos (segundo o cálculo de validação) para o CPF e para o cartão de crédito, além de que a data de validade do cartão terá que ser futura.</p>
                    <p className={style.legendProject}>O site foi criado usando React sem integração com banco de dados nem validação com empresa de cartão.</p>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
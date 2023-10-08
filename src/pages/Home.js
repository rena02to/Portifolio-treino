import dev from './../imagens/11436094_4707119.svg';
import style from './Home.module.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';

function Home(){
    return(
        <div id="home" className={style.home}>
            <div className={style.texto}>
                <h2 className={style.ola}>Olá, eu sou</h2>
                <h1 className={style.name}>Renato Alves,</h1>
                <h2 className={style.dev}>Desenvolvedor front-end</h2>
                <div className={style.botoes}>
                    <a href='https://linkedin.com/in/renato-alves-2284a6236' target='_blank' rel='noopener noreferrer'>
                        <div className={style.linkedin}>
                            <FaLinkedinIn />
                            <p>Linkedin</p>
                        </div>
                    </a>
                    <a href='https://github.com/rena02to' target='_blank' rel='noopener noreferrer'>
                        <div className={style.github}>
                            <TbBrandGithubFilled />
                            <p>Github</p>
                        </div>
                    </a>
                </div>
            </div>
            <img alt='dev' src={dev} />
        </div>
    );
}

export default Home;
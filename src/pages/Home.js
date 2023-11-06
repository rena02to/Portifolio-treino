import dev from './../imagens/ilustracao.svg';
import style from './Home.module.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { useEffect, useState } from 'react';


function Home(){
    const [windowSize, setWindowSize] = useState(window.outerHeight);

    useEffect(() => {
        const elemento = document.getElementById('name');
        const texto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        
        setTimeout(() => {
                texto.forEach((letra, i) => {
                    setTimeout(() => (elemento.innerHTML += letra), 250 * i);
                });
            }, 500);
        }, []);

    const updateWindowSize = () => {
        setWindowSize(window.outerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
    }, []);

    return(
        <div id="home" className={style.home}>
            <div className={style.texto}>
                <div className={style.conteudo}>
                    <h2 className={style.ola}>Olá, eu sou</h2>
                    <h1 id='name' className={style.name}>Renato Alves,</h1>
                    <h2 className={style.dev}>Desenvolvedor front-end</h2>
                </div>
                <div className={style.botoes}>
                    <a href='https://linkedin.com/in/rena02to/' target='_blank' rel='noopener noreferrer'>
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
            {windowSize > 600 && <img alt='dev' src={dev} />}
        </div>
    );
}

export default Home;

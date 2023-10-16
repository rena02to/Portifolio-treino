import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import style from './Habilidades.module.css';
import ScrollReveal from 'scrollreveal';
import { useState, useRef, useEffect } from 'react';

function Habilidades(){
    const [verMais, setVerMais]  = useState(false);
    const [valor, setValor]  = useState('Ver mais');

    const ver = () => {
        setVerMais(!verMais);
        if(!verMais){
            setValor('Ver menos');
        }else{
            setValor('Ver mais');
        }
    }

    const sr = ScrollReveal({
        reset: true,
        duration: 2500,
        distance: '70px',
    }, []);

    const refDiv = useRef(null);

    useEffect(() => {
        sr.reveal(refDiv.current);
        return () => {
            sr.destroy();
        };
    });
    
    return(
        <div id="habilidades" className={verMais ? style.habilidadesMais : style.habilidades}>
            <h1 className={style.titulo}>Habilidades</h1>
            <div className={style.tecnologias} ref={refDiv}>
                
                <div className={style.react}>
                    <h2>React</h2>
                    <div className={style.conteudo}>
                        <p>O React é o pilar da minha abordagem de desenvolvimento front-end.  Ótimo para construir componentes interativos que não só oferecem desempenho excepcional, mas também elevam a interação homem-máquina a um nível superior. Componentes reutilizáveis e interfaces dinâmicas são os pilares de uma experiência fluida e agradável. Seu paradigma de programação baseado em componentes é um verdadeiro divisor de águas.</p>
                        <FaReact />
                    </div>
                </div>

                <div className={style.html}>
                    <h2>HTML</h2>
                    <div className={style.conteudo}>
                        <p>O HTML é onde a estrutura começa. Através da semântica cuidadosa, crio interfaces claras e acessíveis que facilitam a navegação e a compreensão, contribuindo diretamente para uma experiência amigável.</p>
                        <FaHtml5 />
                    </div>
                </div>

                <div className={style.css}>
                    <h2>CSS</h2>
                    <div className={style.conteudo}>
                        <p>O CSS é minha ferramenta de estilização, onde dou vida ao design. A harmonização de elementos visuais e a garantia de que tudo se ajusta perfeitamente são essenciais para criar interfaces atraentes e agradáveis.</p>
                        <FaCss3Alt />
                    </div>
                </div>

                <div className={style.js}>
                    <h2>JavaScript</h2>
                    <div className={style.conteudo}>
                        <p>O JavaScript é a linguagem que dá vida à web. Suas capacidades dinâmicas e flexíveis me permitem criar interatividade, manipular dados em tempo real e fornecer experiências altamente envolventes.</p>
                        <TbBrandJavascript />
                    </div>
                </div>

                <div className={style.git}>
                    <h2>Git</h2>
                    <div className={style.conteudo}>
                        <p>Git é o alicerce da colaboração e rastreamento de alterações. É a ferramenta que me permite trabalhar de forma eficaz em equipe, rastreando o progresso do projeto e revertendo alterações quando necessário, garantindo que a evolução da interface seja controlada e harmoniosa.</p>
                        <FaGitAlt />
                    </div>
                </div>

                <div className={style.github}>
                    <h2>GitHub</h2>
                    <div className={style.conteudo}>
                        <p>O GitHub é minha plataforma de escolha para compartilhar meu trabalho com a comunidade de desenvolvedores. É um espaço onde posso aprender, colaborar em projetos de código aberto e contribuir para o avanço da tecnologia.</p>
                        <FaGithub />
                    </div>
                </div>

                <div className={style.python}>
                    <h2>Python</h2>
                    <div className={style.conteudo}>
                        <p>Python é uma linguagem incrivelmente versátil que uso no desenvolvimento de projetos universitários que são executados interface em linha de comando. Sua legibilidade e riqueza de bibliotecas tornam-no uma escolha valiosa em meu conjunto de ferramentas.</p>
                        <FaPython />
                    </div>
                </div>
            </div>
            <button className={style.maisMenos} onClick={ver}>{valor}</button>
        </div>
    );
}

export default Habilidades;
import style from './Sobre.module.css';
import sobreMim from './../imagens/sobre-mim.png';
import ghostBlue from './../imagens/ghost-blue.png';
import ghostRed from './../imagens/ghost-red.png';

function Sobre(){
    return(
        <div className={style.sobre} id="sobre">
            <div className={style.titulo}>
                <img alt='ghost-blue' className={style.ghost} src={ghostBlue} />
                <h1>Sobre mim</h1>
                <img alt='ghost-red' className={style.ghost} src={ghostRed} />
            </div>
            <div className={style.conteudo}>
                <div className={style.texto}>
                    <p>Meu nome é Renato Alves, sou um desenvolvedor front-end entusista, com cerca de um ano de experiência, focado em criar interfaces web impressionantes e responsivas. Minha jornada é impulsionada pelo meu forte interesse pela tecnologia e um genuíno gosto pelo universo geek.</p>
                    <p>Minha jornada no desenvolvimento front-end começou há aproximadamente um ano, e desde então, tenho trabalhado em projetos pessoais para aprimorar minhas habilidades. Minha missão é combinar design criativo com códigos sólidos para proporcionar experiências excepcionais na web.</p>
                    <p>Além disso, meu profundo interesse pelo mundo geek influencia meu trabalho, adicionando um toque único a tudo o que faço. Se você compartilha desse interesse pela tecnologia e cultura geek, dê uma olhada no meu portfólio. Vamos explorar o futuro da web juntos!</p>
                </div>
                <img src={sobreMim} alt='Sobre Mim' className={style.questionBlock} />
            </div>
        </div>
    );
}

export default Sobre;
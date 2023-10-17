import style from './Sobre.module.css';
import sobreMim from './../imagens/questionBLock.png';
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
                    <p>Meu nome é Renato Alves, e atualmente estou cursando o sexto período de Ciência da Computação com ênfase em Sistemas da Informação. Com aproximadamente um ano de experiência, concentro minha carreira no desenvolvimento front-end, buscando criar interfaces web impressionantes e responsivas.</p>
                    <p>Minha trajetória no desenvolvimento front-end teve início há cerca de um ano, e, desde então, venho trabalhando em projetos pessoais para aprimorar minhas habilidades. Meu objetivo é unir um design criativo com códigos sólidos, proporcionando experiências excepcionais na web.</p>
                    <p>Além disso, vale destacar meu forte interesse pela área de segurança de sistemas computacionais, que agrega um diferencial significativo ao meu perfil. Esse interesse pela segurança é uma parte fundamental do meu percurso no universo da tecnologia.</p>
                    <p>Minha paixão pelo mundo geek também exerce uma influência notável no meu trabalho, acrescentando um toque distintivo a cada projeto que abordo. Se você compartilha desse mesmo entusiasmo pela tecnologia e pela cultura geek, convido você a explorar meu portfólio. Vamos juntos desbravar as possibilidades que o futuro da web nos reserva!</p>
                </div>
                <img src={sobreMim} alt='Sobre Mim' className={style.questionBlock} />
            </div>
        </div>
    );
}

export default Sobre;
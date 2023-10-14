import style from './Footer.module.css';

function  Footer(){
    return(
        <div className={style.divFooter}>
            <ul className={style.footer}>
                <li className={style.autoria}>&copy; 2023 | Renato Alves | Todos os direitos reservados</li>
                <li><a href='https://github.com/rena02to/Portifolio-new' target='_blank' rel='noopeer noreferrer'>Créditos aos criadores das imagens</a></li>
            </ul>
        </div>
    );
}

export default Footer;
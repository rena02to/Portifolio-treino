import style from './Footer.module.css';

function  Footer(){
    return(
        <div className={style.divFooter}>
            <ul className={style.footer}>
                <li className={style.autoria}>&copy; 2023 | Renato Alves | Todos os direitos reservados</li>
                <li>Crédito aos criadores
                    <ul>
                        <li><a href="https://br.freepik.com/icone/divisas_10420890#fromView=search&term=code+simbol&page=2&position=35&track=ais&track=ais" target="_blank" rel="noopener noreferrer">Ícone da página</a></li>
                        <li><a href="https://br.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_13315300.htm#query=not%20found&position=7&from_view=search&track=ais" target="_blank" rel="noopener noreferrer">Imagem da página de Not Found (404)</a></li>
                        <li><a href="https://br.freepik.com/vetores-gratis/ilustracao-de-conceito-de-dependencia-de-jogos-online_8239225.htm#page=3&query=desenvolvedor%20front-end&position=33&from_view=search&track=ais#position=33&page=3&query=desenvolvedor%20front-end" target="_blank" rel="noopener noreferrer">Imagem da Home (desenvlvedor)</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
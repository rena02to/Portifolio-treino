import React, { useState } from 'react';
import style from './Experiencias.module.css';

function Experiencias() {
    const items = [
        {key: 1, value: 'Buscando oportunidade', legend: 'Estou em busca da minha primeira oportunidade na área. Quem sabe na sua empresa?', text: 'Atualmente, estou em busca do meu primeiro emprego na área de front-end, pronto para contribuir com minhas habilidades e entusiasmo. Minha abordagem é baseada na criação de experiências de usuário envolventes, priorizando a usabilidade e o design responsivo. Estou sempre em busca de aprimorar minhas habilidades e acompanhar as últimas tendências no mundo do desenvolvimento web.'},
        {key: 2, value: 'Entusiasta em cibersegurança', legend: 'Academia Hacker (AcHa) - Ufal', date: 'Ago 2023 - Atual', text: 'Sou um apaixonado desenvolvedor front-end com uma paixão adicional: a cibersegurança. Além de criar interfaces atraentes e amigáveis para o usuário, também faço parte de uma academia de hackers, onde mergulho profundamente no mundo do hacking ético. Este é o meu espaço para explorar e desenvolver minhas habilidades na proteção de sistemas e redes, contribuindo para tornar a web um lugar mais seguro para todos. A combinação da minha expertise em desenvolvimento front-end e o meu entusiasmo pelo hacking ético me permite abordar desafios de forma única, garantindo que minhas soluções sejam não apenas visualmente agradáveis, mas também seguras e resilientes.'},
        {key: 3, value: 'Pesquisador científico', legend: 'Laboratório de Computação Científica e Análise Numérica (LaCCAN) - Ufal', date: 'Jan 2023 - Atual', text: 'Em paralelo ao desenvolvimento front-end, também atuo como pesquisador científico na área de edge computing aplicado aos transportes inteligentes. Meu trabalho envolve a exploração de soluções inovadoras para otimizar sistemas de transporte, tornando-os mais eficientes.'}];

    const [activeItem, setActiveItem] = useState(items[1]);  

    const handleItemClick = (item) => {
        setActiveItem(item);
        if(activeItem.key !== item.key){
            const legendaElement = document.getElementById('legenda');
            legendaElement.classList.add(style.showDescription);
            
            setTimeout(() => {
                legendaElement.classList.remove(style.showDescription);
            }, 1000);
        }
    };      

  return (
    <div className={style.experiencias} id='experiencias'>
      <h1>Experiências</h1>
      <div className={style.conteudo}>
        <ul className={style.lista}>
          {items.map((item) => (<li key={item.key} className={item.text === activeItem.text ? style.itemAtivo : style.item} onClick={() => handleItemClick(item)}>
            {item.value}
          </li>
          ))}
        </ul>
        <div className={style.legenda} id='legenda'>
          <div className={style.superior}>
            <h2>{activeItem.legend}</h2>
            <h2 className={style.date}>{activeItem.date}</h2>
          </div>
          <p>{activeItem.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Experiencias;
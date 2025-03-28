import React from "react";
import style from "./Lista.module.scss";
import Item from "./item";
import { iTarefa } from "../../types";

interface Props {
	tarefas: iTarefa[],
	selecionaTarefa: (tarefaSelecionada: iTarefa) => void 
}

function Lista ({tarefas, selecionaTarefa}: Props){
    

    return (
        <div className={style.listaTarefa}>
            <h2>Estudos do dia </h2>
            <ul>
            {tarefas.map(item => (
               <Item
                key={item.id}
                selecionaTarefa={selecionaTarefa}
                {...item}
               />
            ))}
            </ul>
        </div>
    )
}

export default Lista;
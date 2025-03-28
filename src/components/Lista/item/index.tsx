import { iTarefa } from '../../../types';
import style from '../Lista.module.scss';

interface Props extends iTarefa {
	selecionaTarefa: (tarefaSelecionada: iTarefa) => void 
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props){
    return (
        <li className={style.item} onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <span>{tarefa}</span>
            <span>{tempo}</span>
        </li>
    )
}  
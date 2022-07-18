import { Check, Trash } from 'phosphor-react'
import { TaskType } from '../../../withTasks';
import styles from './Task.module.css'

interface ITaskProps extends TaskType {
    handleDelete: (id: string) => void;
    handleCheckToggle: (id: string) => void;
}

export function Task({handleDelete,id, handleCheckToggle, checked,text}: ITaskProps) {

   
    return (
        <div className={`${styles.task} ${checked ? styles.check : styles.uncheck} `}>
            <h1>
                <span onClick={() => handleCheckToggle(id)}>
                    <Check visibility={checked ? "visible" : "hidden"} />
                </span>
                {text}
            </h1>
            <button onClick={() => handleDelete(id)}>
            <Trash size={20} />
            </button>
        </div>
    )
}
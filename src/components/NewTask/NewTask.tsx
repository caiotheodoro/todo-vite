import { PlusCircle } from 'phosphor-react'
import { ChangeEvent } from 'react';
import styles from './NewTask.module.css'


interface INewTaskProps {
    handleTaskChange: (e: ChangeEvent<HTMLInputElement>) => void;
    taskValue: string;
    handleCreateTask: () => void;
}

export function NewTask({taskValue,handleTaskChange,handleCreateTask}: INewTaskProps) {

    const fieldHasValue = taskValue === "" ? false: true

    return (
        <div className={styles.task}>
            <input type={"text"} name={"task"} placeholder={"Adicione uma nova tarefa"} value={taskValue} onChange={handleTaskChange} required  />
            <button onClick={handleCreateTask} disabled={!fieldHasValue}>
                Criar
                <PlusCircle size={18}  />
            </button>
        </div>

    )
}
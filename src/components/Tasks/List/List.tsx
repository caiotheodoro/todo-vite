import { IListProps } from '../../../App'
import styles from './List.module.css'
import { Task } from './Task/Task'

interface HandleProps extends IListProps{
    handleDelete: (id: string) => void;
    handleCheckToggle: (id: string) => void;
}

export function List({tasks, handleCheckToggle,handleDelete}: HandleProps) {



    return (
        <div className={styles.list}>
            {tasks.map(item => (
                <Task handleCheckToggle={handleCheckToggle} handleDelete={handleDelete} {...item} />
            ))}
        </div>
    )
}
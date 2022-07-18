import { InfoProps } from '../Tasks'
import styles from './Info.module.css'



export function Info({checked,total}: InfoProps) {
    return (
        <div className={styles.info}>
            <h1>Tarefas criadas <span>{total}</span></h1>
            <h1>Concluidas <span>{`${checked} de ${total}`}</span></h1>
        </div>

    )
}
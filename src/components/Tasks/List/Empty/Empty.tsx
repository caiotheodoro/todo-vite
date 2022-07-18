import { ClipboardText } from "phosphor-react";
import styles from './Empty.module.css'
export function Empty(){
    return (
        <div className={styles.empty}>
                <ClipboardText size={56} />
                <div>
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <span> Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div>
    )
}
import { useEffect, useState } from 'react'
import { IListProps } from '../../App'
import { Info } from './Info/Info'
import { Empty } from './List/Empty/Empty'
import { List } from './List/List'
import styles from './Tasks.module.css'


export interface InfoProps {
    total: number;
    checked: number;
}

export function Tasks({tasks, setTasks}: IListProps) {
    const [haveItems, setHaveItems] = useState(false)
    const [infoTasks, setInfoTasks] = useState<InfoProps>({total: 0, checked: 0})
    // const TaskList = withTasks(List,{tasks})

    useEffect(() => {
        
        tasks.length > 0 ? setHaveItems(true) :  setHaveItems(false)
        setInfoTasks({total: tasks.length, checked: tasks.filter(item => item.checked).length})
    },[tasks.length])
  
    const handleDelete = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
        setInfoTasks({...infoTasks, total: infoTasks.total - 1})
    }

    const handleCheckToggle = (id: string) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.checked = !task.checked
            }
            return task
        }))

        setInfoTasks({...infoTasks, checked: tasks.filter(task => task.checked).length})
    }
    

    return (
        <div className={styles.tasks}>
            <Info {...infoTasks} />
            {
                haveItems ?  <List handleDelete={handleDelete} handleCheckToggle={handleCheckToggle} setTasks={setTasks} tasks={tasks} /> : <Empty /> 
            }
        </div>
    )
}
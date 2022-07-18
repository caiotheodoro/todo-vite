import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Tasks } from './components/Tasks/Tasks'
import { TaskType } from './components/withTasks'
import {v4 as uuidv4} from 'uuid'
export interface IListProps {
  tasks:  TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>
}


function App() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)

  }

  const handleCreateTask = () => {
    setTasks([...tasks, { id: uuidv4(), text: newTask, checked: false }])
    setNewTask("")
  }
  return (
    <>
      <Header />
      <main>
        <NewTask handleTaskChange={handleTaskChange} taskValue={newTask} handleCreateTask={handleCreateTask} />
        <Tasks tasks={tasks}  setTasks={setTasks} />
      </main>
    </>
  )
}

export default App

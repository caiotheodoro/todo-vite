import { ComponentType, useEffect, useState } from "react";
import { Empty } from "./Tasks/List/Empty/Empty";

export type TaskType = {
    id: string;
    checked: boolean;
    text: string;
  };

interface InternalHocProps {
    tasks: TaskType[];

}

export function withTasks<T>(WrappedComponent: ComponentType<T>, {tasks}: InternalHocProps) {
    return function WrappedRender({...rest}: Omit<T, keyof InternalHocProps>) {
        const [haveItems, setHaveItems] = useState(false)

        useEffect(() => {
            console.log(tasks)
            tasks.length > 0 ? setHaveItems(true) :  setHaveItems(false)
        },[tasks])
      
        return haveItems ? <WrappedComponent {...rest as T} tasks={tasks}  /> : <Empty />
    }
}
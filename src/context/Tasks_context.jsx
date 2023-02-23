import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/taks';

//Nombre del contexto
export const TaskContext = createContext();

export function TaskContextProvider(props){
    const [tasks, setTask] = useState([]);

    function crearTask(task){
        setTask([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(taskId){
        setTask(tasks.filter((task) => task.id !== taskId))
    }

    useEffect(() =>{
        setTask(data)
    }, [])
    return (
        <TaskContext.Provider value={{
            tasks,
            crearTask,
            deleteTask
        }}>{props.children}</TaskContext.Provider>
    )
    
}
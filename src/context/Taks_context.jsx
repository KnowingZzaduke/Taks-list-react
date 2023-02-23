import { createContext, useState, useEffect } from "react";
import {taks as data} from '../data/taks';


//Nombre del contexto
export const TaksContext = createContext();

export function TaskContextProvider(){
    const [taks, setTaks] = useState([]);

    function crearTaks(taksTitle, taksDescription){
        setTaks([...taks, {
            title: taksTitle,
            id: taks.length,
            description: taksDescription
        }])
    }

    function deleteTaks(taksId){
        setTaks(taks.filter((taks) => taks.id !== taksId))
    }

    useEffect(() =>{
        setTaks(data)
    }, [])

    return (
            <TaksContext.Provider value={{
                taks,
                crearTaks,
                deleteTaks 
            }}>{props.children}</TaksContext.Provider>
    )
}
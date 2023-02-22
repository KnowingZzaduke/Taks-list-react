import {taks as data} from './taks.js';
import { useState, useEffect } from 'react';
export function Taks(){
    const [taks, setTaks] = useState([]);
    useEffect(() =>{
        setTaks(data)
    }, [])
    if(taks.length === 0){
        return <h1>No hay tareas</h1>
    }else{
        return (
            <div key={taks.id}>
                {taks.map((taks) => (
                    <div key={taks.id}>
                        <h1>{taks.title}</h1>
                        <p>{}taks.description</p>
                    </div>
                ))}
            </div>
        )
    }
    
}
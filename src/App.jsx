import {taks as data} from './data/taks.js';
import { useState, useEffect } from 'react';
import { Form } from './components/Form_taks';
import {Taks} from './components/Taks_list';
export function App(){
    const [taks, setTaks] = useState([]);
    useEffect(() =>{
        setTaks(data)
    }, [])

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

    return (
        <>
        <Form crearTaks={crearTaks}/>
        <Taks taks={taks} deleteTaks={deleteTaks}/>
        </>
    )
    
}
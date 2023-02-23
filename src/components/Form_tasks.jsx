import { useState, useContext} from 'react';
import { TaskContext } from '../context/Tasks_context';

export function FormTask(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {crearTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        crearTask(title, description);
        setTitle('');
        setDescription('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} autoFocus value={title}/>
            <textarea placeholder='Ingresa la descipción del mensaje' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            <button>Agregar Tarea</button>
        </form>
    )
}
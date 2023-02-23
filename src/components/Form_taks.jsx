import { useState } from 'react';
export function Form({crearTaks}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        crearTaks(title, description);
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
import { useState } from 'react';
export function Form(){
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)}/>
            <button>Agregar Tarea</button>
        </form>
    )
    
    
}
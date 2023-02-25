import { FormTask } from './components/Form_tasks';
import { Task } from './components/Tasks_list';
export function App(){
    return (
        <div className='content_all'>
            <FormTask/>
            <Task/>
        </div>
    )
    
}
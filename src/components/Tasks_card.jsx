import { useContext } from "react";
import { TaskContext } from "../context/Tasks_context";
export function TaskCard({ tasks }) {
  const {deleteTask} = useContext(TaskContext);
  return (
    <div>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <button onClick={() => deleteTask(tasks.id)}>Eliminar tarea</button>
    </div>
  );
}

// import Swal from "sweetalert2";
import { useContext } from "react";
import { TaskContext } from "../context/Tasks_context";
export function TaskCard({ tasks }) {
  const { deleteTask } = useContext(TaskContext);
  console.log(tasks);
  if (tasks.title === "" && tasks.description === "") {
    return null;
  }
  return (
    <div className="tarea" key={tasks.id}>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <button onClick={() => deleteTask(tasks.id)}>Eliminar tarea</button>
    </div>
  );
}

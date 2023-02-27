import { useState, useContext } from "react";
import { TaskContext } from "../context/Tasks_context";
import Swal from "sweetalert2";
export function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { crearTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      Swal.fire({
        title: "Por favor llena todos los campos",
        icon: "warning",
      });
    } else {
      crearTask(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="content_formulario">
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit} className="formulario_agregar-tareas">
        <input
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          value={title}
          placeholder="Ingresa el nombre de la tarea"
        />
        <textarea
          placeholder="Ingresa la descipción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Agregar Tarea</button>
      </form>
    </div>
  );
}

import { TaskCard } from "./Tasks_card";
import { useContext } from "react";
import { TaskContext } from "../context/Tasks_context";
export function Task() {
  const {tasks} = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div className="content_all-tasks">
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} tasks={tasks}/>
      ))}
    </div>
  );
}

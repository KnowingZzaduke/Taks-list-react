import { useContext } from "react";
import { TaksContext } from "../context/Taks_context";
export function TaksCard({ taks }) {
  const {deleteTaks} = useContext(TaksContext);
  return (
    <div>
      <h1>{taks.title}</h1>
      <p>{taks.description}</p>
      <button onClick={() => deleteTaks(taks.id)}>Eliminar tarea</button>
    </div>
  );
}

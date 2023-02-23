import { TaksCard } from "./Taks_card";
import { useContext } from "react";
import { TaksContext } from "../context/Taks_context";
export function Taks() {
  const {taks} = useContext(TaksContext);
  if (taks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div>
      {taks.map((taks) => (
        <TaksCard key={taks.id} taks={taks}/>
      ))}
    </div>
  );
}

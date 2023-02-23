import { TaksCard } from "./Taks_card";
export function Taks({ taks, deleteTaks }) {
  if (taks.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div>
      {taks.map((taks) => (
        <TaksCard key={taks.id} taks={taks} deleteTaks={deleteTaks}/>
      ))}
    </div>
  );
}

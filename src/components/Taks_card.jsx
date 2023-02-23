export function TaksCard({ taks, deleteTaks }) {
  return (
    <div>
      <h1>{taks.title}</h1>
      <p>{taks.description}</p>
      <button onClick={() => deleteTaks(taks.id)}>Eliminar tarea</button>
    </div>
  );
}

import Tarea from './tareas';

function ListaTareas({ tareas, onAlternar, onEliminar }) {
  return (
    <ul>
      {tareas.map(t => (
        <Tarea
          key={t.id}
          tarea={t}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}
<input 
  type="text" 
  placeholder="Nueva tarea" 
  style={{ color: 'black', backgroundColor: 'white' }} 
/>
export default ListaTareas;
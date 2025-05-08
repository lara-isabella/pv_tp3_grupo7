import Tarea from './t-tareas';

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

export default ListaTareas;
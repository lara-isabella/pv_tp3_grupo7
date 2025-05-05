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
  value={texto}
  onChange={(e) => setTexto(e.target.value)}
  placeholder="Nueva tarea"
  type="text"
  style={{ color: '#dfa0c0', backgroundColor: 'white' }}
/>

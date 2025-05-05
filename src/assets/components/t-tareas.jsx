function Tarea({ tarea, onAlternar, onEliminar }) {
    return (
      <li>
        <span className={tarea.completada ? 'completed' : ''}>{tarea.texto}</span>
        <button onClick={() => onAlternar(tarea.id)}>Realizada</button>
        <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
      </li>
    );
  }

  export default Tarea;
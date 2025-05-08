function Tarea({ tarea, onAlternar, onEliminar }) {
  return (
    <li className={`tarea-item ${tarea.completada ? 'completed' : ''}`}>
      <div className="tarea-info">
        <strong>{tarea.texto}</strong>
        <small>ID: {tarea.id} | Inicio: {new Date(tarea.fechaInicio).toLocaleDateString()}</small>
      </div>
      <div className="tarea-botones">
        <button onClick={() => onAlternar(tarea.id)} className="btn-check">
          ✅ Realizada
        </button>
        <button onClick={() => onEliminar(tarea.id)} className="btn-delete">
          ❌ Eliminar
        </button>
      </div>
    </li>
  );
}

export default Tarea;
import { useState } from 'react';

function EntradaTareas({ onAgregar, contadorId }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      const nuevaTarea = {
        id: contadorId,
        texto,
        fechaInicio: new Date(),
        completada: false,
      };
      onAgregar(nuevaTarea);
      setTexto('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
        type="text"
        style={{ color: 'black', backgroundColor: 'white' }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default EntradaTareas;
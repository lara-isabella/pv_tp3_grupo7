import { useState } from 'react';

function EntradaTareas({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      onAgregar(texto);
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
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
<input 
  type="text" 
  placeholder="Nueva tarea" 
  style={{ color: 'black', backgroundColor: 'white' }} 
/>
export default EntradaTareas;
import { useState } from 'react';
import EntradaTareas from './assets/components/entradatareas';
import ListaTareas from './assets/components/listatareas';
import Producto from './assets/components/producto'; // agregá esto
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const alternarTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <EntradaTareas onAgregar={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        onAlternar={alternarTarea}
        onEliminar={eliminarTarea}
      />

      <hr />

      <h1>Lista de Productos</h1>
      <Producto /> {/* acá se renderiza el componente Producto */}
    </div>
  );
}

export default App;

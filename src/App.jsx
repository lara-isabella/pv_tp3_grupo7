import { useState } from 'react';
import EntradaTareas from './assets/components/t-entradatareas';
import ListaTareas from './assets/components/t-listatareas';
import Producto from './assets/components/p-funcionesproducto';

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
    <div className="layout">
      <div className="container tareas">
        <h1>Lista de Tareas</h1>
        <EntradaTareas onAgregar={agregarTarea} />
        <ListaTareas
          tareas={tareas}
          onAlternar={alternarTarea}
          onEliminar={eliminarTarea}
        />
      </div>

      <div className="container productos">
        <h1>Lista de Productos</h1>
        <Producto />
      </div>
    </div>
  );
}

export default App;

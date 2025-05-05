import React, { useState } from 'react';
import productosBase from "./p-data";

const Producto = () => {
  const [productos, setProductos] = useState(productosBase);

  const filtrarProductos = () => {
    setProductos(productos.filter(producto => producto.precio > 20));
  };

  const agregarIVA = () => {
    setProductos(productos.map(producto => ({
      ...producto,
      precio: (producto.precio * 1.21).toFixed(2)
    })));
  };

  const ordenarProductos = () => {
    setProductos([...productos].sort((a, b) => a.precio - b.precio));
  };

  const eliminarMenorPrecio = () => {
    const menorPrecio = Math.min(...productos.map(p => p.precio));
    setProductos(productos.filter(p => p.precio !== menorPrecio));
  };

  return (
    <div>
      <h2>Productos Disponibles</h2>

      <button onClick={filtrarProductos}>Filtrar (mayor a $20)</button>
      <button onClick={agregarIVA}>Agregar IVA</button>
      <button onClick={ordenarProductos}>Ordenar Precio</button>
      <button onClick={eliminarMenorPrecio}>Eliminar Menor Precio</button>

      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto.descripcion} - ${producto.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default Producto;

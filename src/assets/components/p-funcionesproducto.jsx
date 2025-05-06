import React, { useState } from 'react';
import productosBase from './p-data';

const Producto = () => {
  const [productos, setProductos] = useState(productosBase);

  const recorrerProductos = () => {
    productos.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  };

  const filtrarProductos = () => {
    const productosFiltrados = productos.filter(producto => producto.precio > 20);
    setProductos(productosFiltrados);
    recorrerProductos();
  };


  const agregarIVA = () => {
    const productosConIVA = productos.map(producto => ({
      ...producto,
      precio: (producto.precio * 1.21).toFixed(2),
    }));
    setProductos(productosConIVA);
    recorrerProductos();
  };

  
  const ordenarProductos = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(productosOrdenados);
    recorrerProductos();
  };

  const eliminarMenorPrecio = () => {
    const menorPrecio = Math.min(...productos.map(p => p.precio));
    const productosRestantes = productos.filter(p => p.precio !== menorPrecio);
    setProductos(productosRestantes);
    recorrerProductos();
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
          <li key={index}>
            {producto.descripcion} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Producto;

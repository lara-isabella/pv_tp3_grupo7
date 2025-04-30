import React from 'react';

const Producto = () => {
    const productos = [
        { descripcion: "Auriculares", precio: 49000 },
        { descripcion: "Teclado", precio: 30000 },
        { descripcion: "Mouse", precio: 15000 },
        { descripcion: "Monitor", precio: 125000 },
        { descripcion: "Webcam", precio: 22000 }
    ];
    
    // uno
    console.log("📦 Productos disponibles:");
    productos.forEach(producto => {
        console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
    

    // dos
    const productosMayor20 = productos.filter(producto => producto.precio > 20);
    console.log("\n🔍 Productos con precio mayor a $20:");
    console.log(productosMayor20);

    // tres (iva)
    const productosConIVA = productos.map(producto => {
        return {
        descripcion: producto.descripcion,
        precio: (producto.precio * 1.21).toFixed(2) // para mostrar dos decimales
        };
    });
    console.log("\n🧾 Productos con precio + IVA:");
    console.log(productosConIVA);
    
    // cuatro (ordenar)
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    console.log("\n📊 Productos ordenados por precio (menor a mayor):");
    console.log(productosOrdenados);
    
    // cinco (agregar)
    productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
    console.log("\n➕ Nuevo producto agregado:");
    console.log(productos[productos.length - 1]);
    
    // seis (eliminar mas barato)
    let indiceMenor = 0;
    let precioMenor = productos[0].precio;
    productos.forEach((producto, index) => {
        if (producto.precio < precioMenor) {
        precioMenor = producto.precio;
        indiceMenor = index;
        }
    });
    productos.splice(indiceMenor, 1);
    console.log("Producto con precio más bajo eliminado:");
    console.log("Lista actualizada de productos:");
    console.log(productos);
    
    return (
        <div>
          <h2>Productos Disponibles</h2>
          <ul>
            {productos.map((producto, index) => (
              <li key={index}>{producto.descripcion} - ${producto.precio}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Producto;
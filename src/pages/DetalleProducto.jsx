import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const DetalleProducto = ({ agregarAlCarrito }) => {
  const { id } = useParams();

  // Simulación de búsqueda por ID
  const producto = {
    id: id,
    nombre: 'Tornamesa Estéreo Retro Hi-Fi',
    precio: 99990,
    descripcion: 'Reproductor estilo vintage con altavoces integrados, radio FM y velocidad ajustable para vinilos de 33/45/78 RPM. Salida RCA para parlantes externos.',
    sku: 'AUDIO-TN-2024',
    stock: 12,
    imagen: '/img/tocadiscos.jpg'
  };

  return (
    <main className="container py-5 text-white">
      <Link to="/catalogo" className="btn btn-outline-secondary mb-4">← Volver al catálogo</Link>
      <div className="row g-4 bg-dark p-4 rounded border border-secondary">
        <div className="col-md-6">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <span className="text-danger fw-bold">SKU: {producto.sku}</span>
          <h1 className="fw-bold my-2">{producto.nombre}</h1>
          <p className="text-white-50">{producto.descripcion}</p>
          <p className="fs-2 fw-bold text-danger my-3">$ {producto.precio.toLocaleString('es-CL')}</p>
          <p className="text-success small fw-bold">Stock disponible: {producto.stock} unidades</p>
          <button onClick={() => agregarAlCarrito(producto)} className="btn btn-danger btn-lg fw-bold mt-3">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </main>
  );
};
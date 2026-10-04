import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productosData = [
  { id: 1, nombre: 'Abbey Road - The Beatles', categoria: 'Vinilos', precio: 34990, imagen: '/img/abbey.jpg' },
  { id: 2, nombre: 'Dark Side of the Moon - Pink Floyd', categoria: 'Vinilos', precio: 38990, imagen: '/img/pinkfloyd.jpg' },
  { id: 3, nombre: 'Amplificador Marshall', categoria: 'Equipos', precio: 399990, imagen: '/img/amplificadorMarshall.jpg' },
  { id: 4, nombre: 'Tornamesa Audio-Technica', categoria: 'Equipos', precio: 199990, imagen: '/img/tocadiscos.jpg' },
  { id: 5, nombre: 'Limpiador de Vinilos Pro', categoria: 'Accesorios', precio: 15990, imagen: '/img/limpiador.jpg' }
];

export const Categorias = ({ agregarAlCarrito }) => {
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const categorias = ['Todas', 'Vinilos', 'Equipos', 'Accesorios'];

  const productosFiltrados = categoriaSel === 'Todas' 
    ? productosData 
    : productosData.filter(p => p.categoria === categoriaSel);

  return (
    <main className="container py-5 text-white">
      <h1 className="text-uppercase fw-bold text-center mb-4">Categorías</h1>
      
      {/* Botones de Filtro */}
      <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSel(cat)}
            className={`btn fw-bold px-4 ${categoriaSel === cat ? 'btn-danger' : 'btn-outline-light'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Productos Filtrados */}
      <div className="row g-4">
        {productosFiltrados.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <div className="card bg-dark text-white border-secondary h-100 shadow-sm">
              <img src={prod.imagen} alt={prod.nombre} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="fw-bold">{prod.nombre}</h5>
                <p className="text-danger fw-bold fs-5 mt-auto">$ {prod.precio.toLocaleString('es-CL')}</p>
                <div className="d-flex gap-2">
                  <Link to={`/producto/${prod.id}`} className="btn btn-outline-light btn-sm flex-grow-1">Ver Detalle</Link>
                  <button onClick={() => agregarAlCarrito(prod)} className="btn btn-danger btn-sm flex-grow-1">Añadir</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { albumes } from '../data/albumesData';
import { AlbumCard } from '../components/AlbumCard';

export const CatalogoAlbumes = ({ agregarAlCarrito }) => {
  const handleAgregar = (album) => {
    if (agregarAlCarrito) {
      agregarAlCarrito(album);
    } else {
      console.log('Agregado al carrito:', album);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-white">Catálogo de Álbumes</h1>

        {/* Grid de Productos */}
        <div className="row g-4 mb-5">
          {albumes.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              onAgregarAlCarrito={handleAgregar}
            />
          ))}
        </div>

        {/* Botón movido al final y centrado */}
        <div className="d-flex justify-content-center mt-4">
          <Link
            to="/resenas"
            className="btn btn-warning fw-bold px-4 py-3 shadow"
          >
            Ver Reseñas de Álbumes
          </Link>
        </div>
      </div>
    </div>
  );
};
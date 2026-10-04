import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { albumes } from '../data/albumesData';
import { AlbumCard } from '../components/AlbumCard';

export const CatalogoAlbumes = ({ agregarAlCarrito }) => {
  const [toast, setToast] = useState('');

  const handleAgregar = (album) => {
    if (agregarAlCarrito) {
      // Nos aseguramos de enviar la estructura completa del álbum con su id
      agregarAlCarrito({
        id: album.id,
        nombre: album.titulo || album.nombre,
        precio: album.precio,
        imagen: album.imagen,
        ...album
      });
    }

    setToast(`¡"${album.titulo || album.nombre}" se agregó al carrito!`);

    setTimeout(() => {
      setToast('');
    }, 3000);
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5 position-relative">
      
      {/* Toast Notificación Flotante */}
      {toast && (
        <div 
          className="position-fixed top-0 end-0 p-3" 
          style={{ zIndex: 1055, marginTop: '70px' }}
        >
          <div className="toast show align-items-center text-bg-success border-0 shadow-lg" role="alert">
            <div className="d-flex">
              <div className="toast-body fw-bold fs-6">
                <i className="bi bi-check-circle-fill me-2"></i>
                {toast}
              </div>
              <button 
                type="button" 
                className="btn-close btn-close-white me-2 m-auto" 
                onClick={() => setToast('')}
              ></button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-white text-uppercase">Catálogo de Álbumes</h1>

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

        {/* Botón para ver reseñas */}
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
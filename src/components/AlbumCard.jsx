import React from 'react';

export const AlbumCard = ({ album, onAgregarAlCarrito }) => {
  const { titulo, artista, anio, precio, imagen, spotifyUrl } = album;

  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precio);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm bg-dark text-white border-secondary">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-white">{titulo}</h5>
          <p className="card-text text-light opacity-75">
            {artista} - Año: {anio}
          </p>
          <p className="card-text small fw-bold text-warning">Precio: {precioFormateado}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={spotifyUrl}
            className="btn btn-primary mt-auto"
          >
            Escuchar Album
          </a>
          <button
            type="button"
            className="btn btn-outline-light mt-2 fw-bold"
            onClick={() => onAgregarAlCarrito(album)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { resenasData } from './Resena';

export const DetalleResena = () => {
  const { id } = useParams();

  // Buscar la reseña correspondiente según el ID
  const reseña = resenasData.find((item) => item.id === id);

  // Si no se encuentra la reseña
  if (!reseña) {
    return (
      <div className="container py-5 text-center text-light">
        <h2>Reseña no encontrada</h2>
        <p>El álbum que buscas no está en nuestra base de datos.</p>
        <Link to="/resena" className="btn btn-danger mt-3">Volver a Reseñas</Link>
      </div>
    );
  }

  return (
    <main className="py-5 bg-dark text-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Botón de retorno */}
        <Link to="/resena" className="btn btn-outline-light mb-4">
          <i className="bi bi-arrow-left me-2"></i> Volver a Reseñas
        </Link>

        {/* Tarjeta Principal de la Reseña */}
        <article className="bg-secondary bg-opacity-10 p-4 p-md-5 rounded shadow border border-secondary">
          
          <div className="row g-4 align-items-center mb-4 pb-4 border-bottom border-secondary">
            <div className="col-md-5 text-center">
              <img
                src={`/${reseña.image}`}
                alt={reseña.title}
                className="img-fluid rounded shadow-lg border border-secondary"
                style={{ maxHeight: '350px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="col-md-7">
              <span className="badge bg-danger text-uppercase mb-2">{reseña.genero}</span>
              <h1 className="display-6 fw-bold mb-1">{reseña.title}</h1>
              <h3 className="text-danger fw-bold mb-3">{reseña.artista}</h3>
              
              <div className="d-flex flex-wrap gap-3 mb-3 text-secondary small">
                <div><i className="bi bi-calendar-event me-1"></i> Año: <strong>{reseña.ano}</strong></div>
                <div><i className="bi bi-disc me-1"></i> Formato: <strong>Álbum de Estudio</strong></div>
              </div>

              {/* Puntuación/Calificación */}
              <div className="p-3 bg-dark rounded border border-danger d-inline-block mt-2">
                <span className="text-secondary small d-block">Calificación Crítica:</span>
                <span className="fs-3 fw-bold text-warning">★ {reseña.calificacion}</span>
              </div>
            </div>
          </div>

          {/* Crítica Corta / Veredicto */}
          <div className="p-4 bg-dark rounded text-light mb-4 border-start border-4 border-primary">
            <h5 className="fw-bold text-uppercase text-primary mb-2">Veredicto Profesional:</h5>
            <p className="mb-0 italic">{reseña.criticaCorta}</p>
          </div>

          {/* Párrafos de Análisis Extendido */}
          <h4 className="fw-bold text-uppercase mb-3 mt-4 border-bottom border-secondary pb-2">Análisis Crítico Detallado</h4>
          <div className="lh-lg text-light fs-5">
            {reseña.analisisExtendido.map((parrafo, index) => (
              <p key={index} className="mb-4">{parrafo}</p>
            ))}
          </div>

          {/* Pie de Reseña */}
          <div className="border-top border-secondary pt-4 mt-5 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <span className="text-secondary small">MusicMania Reviews © 2026 - Crítica Musical</span>
            <Link to="/resena" className="btn btn-danger">Explorar más reseñas</Link>
          </div>
        </article>
      </div>
    </main>
  );
};
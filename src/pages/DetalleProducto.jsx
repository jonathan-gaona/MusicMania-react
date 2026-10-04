import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { albumes } from '../data/albumesData'; // Importamos la lista de álbumes

const productosEquipos = [
  {
    id: 'eq-1',
    sku: 'AUDIO-MARSHALL-50W',
    nombre: 'Amplificador de Guitarra Marshall',
    descripcion: 'Amplificador de alta fidelidad, con tono cálido, distorsión clásica y potencia ideal para ensayos y estudio.',
    precio: 399990,
    stock: 8,
    imagen: '/img/amplificadorMarshall.jpg',
  },
  {
    id: 'eq-2',
    sku: 'AUDIO-MIC-COND',
    nombre: 'Micrófono de Condensador',
    descripcion: 'Micrófono de estudio profesional con patrón polar cardioide, excelente claridad para voces y podcasts.',
    precio: 149990,
    stock: 15,
    imagen: '/img/microfonopro.jpg',
  },
  {
    id: 'eq-3',
    sku: 'AUDIO-DJ-PRO',
    nombre: 'Controladora DJ Pro',
    descripcion: 'Sistema todo en uno de 2 canales, con pads retroiluminados, jog wheels de precisión y pantalla integrada.',
    precio: 399990,
    stock: 5,
    imagen: '/img/tornamesa.jpg',
  },
  {
    id: 'eq-4',
    sku: 'AUDIO-PA-JBL',
    nombre: 'Parlante de P.A. Profesional',
    descripcion: 'Monitor de sonido de alta potencia con respuesta limpia de bajos, ideal para eventos e instalaciones en vivo.',
    precio: 199990,
    stock: 10,
    imagen: '/img/parlantejbl.jpg',
  },
  {
    id: 'eq-5',
    sku: 'AUDIO-TN-2024',
    nombre: 'Tornamesa Estéreo Retro Hi-Fi',
    descripcion: 'Reproductor estilo vintage con altavoces integrados, radio FM y velocidad ajustable para vinilos de 33/45/78 RPM.',
    precio: 99990,
    stock: 12,
    imagen: '/img/tocadiscos.jpg',
  },
  {
    id: 'eq-6',
    sku: 'AUDIO-MONITOR-BRONZE',
    nombre: 'Parlantes Monitor Audio Bronze',
    descripcion: 'Diseño compacto de 2 vías con sonido cálido y de alta resolución para vinilos.',
    precio: 149990,
    stock: 6,
    imagen: '/img/parlante2.jpg',
  }
];

export const DetalleProducto = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mapeamos los álbumes al formato de producto general para unificar
  const albumesFormateados = albumes.map((alb) => ({
    id: alb.id,
    sku: `VINYL-${alb.id.toUpperCase()}`,
    nombre: alb.titulo,
    descripcion: `Álbum original de ${alb.artista} lanzado en el año ${alb.anio}. Formato vinilo de alta fidelidad.`,
    precio: alb.precio,
    stock: 10,
    imagen: alb.imagen,
    spotifyUrl: alb.spotifyUrl
  }));

  // Combinamos ambas listas para buscar por ID
  const todosLosProductos = [...productosEquipos, ...albumesFormateados];
  const producto = todosLosProductos.find((item) => String(item.id) === String(id));

  if (!producto) {
    return (
      <main className="container py-5 text-center text-white">
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate(-1)} className="btn btn-danger mt-3">
          Volver atrás
        </button>
      </main>
    );
  }

  return (
    <main className="container py-5 text-white">
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-outline-secondary text-light mb-4"
      >
        &larr; Volver
      </button>

      <div className="card bg-dark border-secondary p-4 shadow-lg">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="img-fluid rounded border border-secondary"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>

          <div className="col-md-6">
            <span className="badge bg-danger mb-2">SKU: {producto.sku}</span>
            <h1 className="fw-bold mb-3">{producto.nombre}</h1>
            <p className="text-white-50 fs-6 mb-4">{producto.descripcion}</p>

            <div className="mb-4">
              <span className="fs-2 fw-bold text-danger">
                $ {producto.precio.toLocaleString('es-CL')}
              </span>
              <p className="text-success small mt-1 mb-0">
                Stock disponible: {producto.stock} unidades
              </p>
            </div>

            <div className="d-flex gap-3">
              <button 
                className="btn btn-danger btn-lg flex-fill fw-bold"
                onClick={() => agregarAlCarrito(producto)}
              >
                Añadir al Carrito
              </button>

              {producto.spotifyUrl && (
                <a
                  href={producto.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-lg fw-bold d-flex align-items-center justify-content-center"
                >
                  <i className="bi bi-spotify me-2"></i> Escuchar
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
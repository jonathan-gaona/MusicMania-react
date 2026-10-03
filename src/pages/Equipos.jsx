import React, { useState } from 'react';

const productosEquipos = [
  {
    id: 1,
    nombre: 'Amplificador de Guitarra Marshall:',
    descripcion: 'Amplificador de alta fidelidad, con tono cálido, distorsión clásica y potencia ideal para ensayos y estudio.',
    precio: 399990,
    imagen: '/img/amplificadorMarshall.jpg',
  },
  {
    id: 2,
    nombre: 'Micrófono de Condensador:',
    descripcion: 'Micrófono de estudio profesional con patrón polar cardioide, excelente claridad para voces y podcasts.',
    precio: 149990,
    imagen: '/img/microfonopro.jpg',
  },
  {
    id: 3,
    nombre: 'Controladora DJ Pro:',
    descripcion: 'Sistema todo en uno de 2 canales, con pads retroiluminados, jog wheels de precisión y pantalla integrada.',
    precio: 399990,
    imagen: '/img/tornamesa.jpg',
  },
  {
    id: 4,
    nombre: 'Parlante de P.A. Profesional:',
    descripcion: 'Monitor de sonido de alta potencia con respuesta limpia de bajos, ideal para eventos e instalaciones en vivo.',
    precio: 199990,
    imagen: '/img/parlantejbl.jpg',
  },
  {
    id: 5,
    nombre: 'Tornamesa Estéreo Retro:',
    descripcion: 'Reproductor estilo vintage con altavoces integrados, radio FM y velocidad ajustable para vinilos de 33/45 RPM.',
    precio: 99990,
    imagen: '/img/tocadiscos.jpg',
  },
  {
    id: 6,
    nombre: 'Parlantes Monitor Audio Bronze',
    descripcion: 'Diseño compacto de 2 vías con sonido cálido y de alta resolución para vinilos.',
    precio: 149990,
    imagen: '/img/parlante2.jpg',
  },
];

export const Equipos = ({ agregarAlCarrito }) => {
  const [toast, setToast] = useState('');

  const handleAgregar = (producto) => {
    if (agregarAlCarrito) {
      agregarAlCarrito({
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
      });
    }

    setToast(`¡"${producto.nombre}" se agregó al carrito!`);

    setTimeout(() => {
      setToast('');
    }, 3000);
  };

  return (
    <main className="container py-5 text-white position-relative">
      
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

      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-uppercase">Tornamesas & Equipos de Audio</h1>
        <p className="lead text-white-50">Lleva la alta fidelidad del sonido análogo a tu hogar.</p>
      </header>

      {/* Grid de Productos */}
      <div className="row g-4">
        {productosEquipos.map((producto) => (
          <article key={producto.id} className="col-md-6 col-lg-4">
            {/* Tarjeta con fondo oscuro y borde sutil */}
            <div className="card h-100 bg-dark text-white border-secondary shadow-sm">
              <img
                src={producto.imagen}
                className="card-img-top img-efecto"
                alt={producto.nombre}
                style={{ height: '220px', objectFit: 'cover' }} // <-- Tamaño uniforme sin deformar
              />
              <div className="card-body d-flex flex-column">
                <h2 className="card-title h5 fw-bold">{producto.nombre}</h2>
                <p className="card-text text-white-50 small flex-grow-1">
                  {producto.descripcion}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary">
                  <span className="fs-4 fw-bold text-danger">
                    $ {producto.precio.toLocaleString('es-CL')}
                  </span>
                  <button
                    className="btn btn-outline-danger btn-sm fw-bold"
                    onClick={() => handleAgregar(producto)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
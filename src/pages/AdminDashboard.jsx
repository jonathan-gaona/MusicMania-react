import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [usuarioSesion, setUsuarioSesion] = useState(null);
  const [cargando, setCargando] = useState(true);

  // VALIDACIÓN DE SESIÓN Y ROL
  useEffect(() => {
    const sesionGuardada = localStorage.getItem('usuarioSesion');
    
    if (!sesionGuardada) {
      // Redirigir si no hay sesión activa
      navigate('/iniciar-sesion', { replace: true });
      return;
    }

    try {
      const sesion = JSON.parse(sesionGuardada);
      
      // Validar que el rol sea estrictamente Administrador
      if (sesion && sesion.rol === 'Administrador') {
        setUsuarioSesion(sesion);
        setCargando(false);
      } else {
        // Redirigir si no tiene permisos de Administrador
        navigate('/iniciar-sesion', { replace: true });
      }
    } catch (error) {
      // Si el JSON es inválido, limpiar y redirigir
      localStorage.removeItem('usuarioSesion');
      navigate('/iniciar-sesion', { replace: true });
    }
  }, [navigate]);

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuarioSesion');
    navigate('/iniciar-sesion', { replace: true });
  };

  // PANTALLA DE CARGA / VERIFICACIÓN
  if (cargando) {
    return (
      <div className="bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-border text-danger mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Verificando accesos...</span>
        </div>
        <p className="text-secondary fw-bold text-uppercase fs-6">Verificando permisos de administrador...</p>
      </div>
    );
  }

  return (
    <div className="d-flex bg-dark text-light min-vh-100">
      {/* BARRA LATERAL (SIDEBAR) */}
      <aside
        className="bg-black bg-opacity-75 border-end border-secondary p-3 d-flex flex-column justify-content-between"
        style={{ width: '280px', minHeight: '100vh' }}
      >
        <div>
          {/* BRANDING MUSICMANIA */}
          <div className="d-flex align-items-center gap-2 mb-4 px-2 pb-3 border-bottom border-secondary">
            <span className="fs-3 text-danger fw-bold">▶</span>
            <span className="fs-4 fw-bold text-uppercase tracking-wider">
              Music<span className="text-danger">Mania</span>
            </span>
          </div>

          {/* PERFIL ADMIN */}
          <div className="bg-secondary bg-opacity-10 p-3 rounded mb-4 border border-secondary">
            <small className="text-secondary d-block text-uppercase fw-bold fs-7">Acceso Permitido</small>
            <div className="fw-bold text-truncate">{usuarioSesion.nombre}</div>
            <small className="text-muted d-block text-truncate">{usuarioSesion.correo}</small>
            <span className="badge bg-danger text-uppercase mt-2" style={{ fontSize: '0.65rem' }}>
              {usuarioSesion.rol}
            </span>
          </div>

          {/* MENÚ DE NAVEGACIÓN LATERAL */}
          <nav className="nav nav-pills flex-column gap-2">
            <button className="nav-link bg-danger text-white text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded shadow-sm">
              <i className="bi bi-speedometer2 fs-5"></i> Dashboard
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-receipt fs-5"></i> Órdenes
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-disc fs-5"></i> Productos
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-tags fs-5"></i> Categorías
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-people fs-5"></i> Usuarios
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-bar-chart-line fs-5"></i> Reportes
            </button>
            <button className="nav-link text-light opacity-75 text-start d-flex align-items-center gap-3 py-2.5 px-3 fw-semibold rounded hover-bg-secondary">
              <i className="bi bi-person-circle fs-5"></i> Perfil
            </button>
          </nav>
        </div>

        {/* BOTONES ACCIÓN INFERIOR */}
        <div className="pt-3 border-top border-secondary d-flex flex-column gap-2">
          <Link
            to="/"
            className="btn btn-outline-light w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2"
          >
            <i className="bi bi-shop"></i> Tienda
          </Link>
          <button
            onClick={handleCerrarSesion}
            className="btn btn-danger w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2"
          >
            <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* ÁREA DE CONTENIDO (HOME / DASHBOARD) */}
      <main className="flex-grow-1 p-4 p-md-5 overflow-auto">
        <header className="mb-4 pb-3 border-bottom border-secondary">
          <h2 className="display-6 fw-bold text-uppercase mb-1">Dashboard</h2>
          <p className="text-secondary mb-0">Resumen de las actividades diarias del sistema.</p>
        </header>

        {/* MÉTRICAS / KPIS */}
        <section className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="bg-primary bg-opacity-20 border border-primary p-4 rounded-3 shadow-lg d-flex align-items-center justify-content-between">
              <div>
                <span className="text-uppercase fs-7 fw-bold text-info">Compras</span>
                <h3 className="display-6 fw-bold my-1">$1,234,990</h3>
                <small className="text-light opacity-75">Probabilidad de aumento: <strong>20%</strong></small>
              </div>
              <div className="bg-primary bg-opacity-20 p-3 rounded-circle text-primary">
                <i className="bi bi-cart-check fs-1"></i>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-success bg-opacity-20 border border-success p-4 rounded-3 shadow-lg d-flex align-items-center justify-content-between">
              <div>
                <span className="text-uppercase fs-7 fw-bold text-success">Productos</span>
                <h3 className="display-6 fw-bold my-1">400</h3>
                <small className="text-light opacity-75">Inventario actual: <strong>500</strong></small>
              </div>
              <div className="bg-success bg-opacity-20 p-3 rounded-circle text-success">
                <i className="bi bi-box-seam fs-1"></i>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-warning bg-opacity-20 border border-warning p-4 rounded-3 shadow-lg d-flex align-items-center justify-content-between">
              <div>
                <span className="text-uppercase fs-7 fw-bold text-warning">Usuarios</span>
                <h3 className="display-6 fw-bold my-1">890</h3>
                <small className="text-light opacity-75">Nuevos usuarios este mes: <strong>120</strong></small>
              </div>
              <div className="bg-warning bg-opacity-20 p-3 rounded-circle text-warning">
                <i className="bi bi-people fs-1"></i>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULOS DEL SISTEMA */}
        <section>
          <h4 className="fw-bold text-uppercase mb-4 text-light">Módulos del Sistema</h4>
          
          <div className="row g-4">
            {[
              { title: 'Dashboard', desc: 'Visión general de todas las métricas y estadísticas clave del sistema.', icon: 'bi-speedometer2', color: 'text-danger' },
              { title: 'Órdenes', desc: 'Gestión y seguimiento de todas las órdenes de compra realizadas.', icon: 'bi-receipt', color: 'text-info' },
              { title: 'Productos', desc: 'Administrar inventario y detalles de los productos disponibles.', icon: 'bi-disc', color: 'text-success' },
              { title: 'Categorías', desc: 'Organizar productos en categorías para facilitar su navegación.', icon: 'bi-tags', color: 'text-warning' },
              { title: 'Usuarios', desc: 'Gestión de cuentas de usuario y sus roles dentro del sistema.', icon: 'bi-people', color: 'text-primary' },
              { title: 'Reportes', desc: 'Generación de informes detallados sobre las operaciones del sistema.', icon: 'bi-bar-chart-line', color: 'text-danger' },
              { title: 'Perfil', desc: 'Administración de la información personal y configuraciones de cuenta.', icon: 'bi-person-circle', color: 'text-light' },
              { title: 'Tienda', desc: 'Visualiza tu tienda en tiempo real, visualiza los reportes de los usuarios.', icon: 'bi-shop', color: 'text-warning' }
            ].map((mod, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="bg-secondary bg-opacity-10 p-4 rounded-3 border border-secondary shadow-sm text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  <i className={`bi ${mod.icon} fs-1 ${mod.color} mb-3`}></i>
                  <h5 className="fw-bold mb-2">{mod.title}</h5>
                  <p className="text-secondary small mb-0">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
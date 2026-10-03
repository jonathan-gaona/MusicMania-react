import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ totalItemsCarrito = 0 }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-danger fs-3" to="/">
            MusicMania
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                    Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/catalogo">
                  Catálogo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/equipos">
                  Equipos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/resenas">
                  Reseñas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/sobre-nosotros">
                  Sobre Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3 ms-lg-auto">
              <Link className="nav-link text-light" to="/iniciar-sesion">
                Iniciar sesión
              </Link>
              <Link className="nav-link text-light" to="/registro">
                Registrarse
              </Link>
              <Link className="btn btn-outline-light btn-sm fw-bold" to="/carrito" id="btn-carrito">
                Carrito ({totalItemsCarrito})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
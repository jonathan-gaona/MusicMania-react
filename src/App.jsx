import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CatalogoAlbumes } from './pages/CatalogoAlbumes';
import { Home } from './pages/Home';
import { SobreNosotros } from './pages/SobreNosotros';

function App() {
  // Estado global para controlar los elementos agregados al carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-between">
      <div>
        {/* 1. El Navbar se muestra siempre arriba en todas las páginas */}
        <Navbar totalItemsCarrito={carrito.length} />

        {/* 2. El contenido central cambia según la ruta/página actual */}
        <Routes>
          {/* Ruta de inicio que carga la vista Home */}
          <Route path="/" element={<Home />} />

          {/* Ruta del Catálogo con funcionalidad de agregar al carrito */}
          <Route path="/catalogo" element={<CatalogoAlbumes agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} /> 
          
          {/* Aquí tú y tus compañeros irán agregando las demás rutas del proyecto */}
        </Routes>
      </div>

      {/* 3. El Footer se muestra siempre abajo en todas las páginas */}
      <Footer />
    </div>
  );
}

export default App;

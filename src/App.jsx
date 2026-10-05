import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importación de componentes globales
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Vistas que ya tenías en tu proyecto
import { Home } from './pages/Home';
import { CatalogoAlbumes } from './pages/CatalogoAlbumes';
import { Equipos } from './pages/Equipos';
import { SobreNosotros } from './pages/SobreNosotros';
import { Registro } from './pages/Registro';
import { Contacto } from './pages/Contacto';
import { Carrito } from './pages/Carrito';
import { Resenas } from './pages/Resena';
import { Blog } from './pages/blog';
import { DetalleBlog } from './pages/DetalleBlog';


// Nuevas Vistas Públicas según requerimientos del documento
import { Categorias } from './pages/Categorias';
import { Ofertas } from './pages/Ofertas';
import { DetalleProducto } from './pages/DetalleProducto';
import { Checkout } from './pages/Checkout';
import { PagoExitoso } from './pages/PagoExitoso';
import { PagoError } from './pages/PagoError';

function App() {
  // Estado global para controlar los elementos agregados al carrito
  const [carrito, setCarrito] = useState([]);

  // Estado global para la orden de compra procesada en Checkout
  const [ordenActual, setOrdenActual] = useState(null);

  // Función para agregar productos al carrito (gestiona cantidades si ya existe)
  // En App.jsx
const agregarAlCarrito = (producto) => {
  setCarrito((prev) => {
    // Si no tiene id, usamos el nombre como identificador único
    const idProducto = producto.id || producto.nombre;

    const existe = prev.find((item) => (item.id || item.nombre) === idProducto);
    
    if (existe) {
      return prev.map((item) =>
        (item.id || item.nombre) === idProducto
          ? { ...item, cantidad: (item.cantidad || 1) + 1 }
          : item
      );
    }
    
    return [...prev, { ...producto, id: idProducto, cantidad: 1 }];
  });
};

  // Total de items individuales en el carrito para la insignia (badge) del Navbar
  const totalItems = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-between">
      <div>
        {/* 1. El Navbar se muestra en la parte superior con el contador de productos */}
        <Navbar totalItemsCarrito={totalItems} />

        {/* 2. Ruteo central de la aplicación */}
        <Routes>
          {/* Rutas Principales */}
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoAlbumes agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/equipos" element={<Equipos agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/resenas" element={<Resenas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<DetalleBlog />} />

          {/* Nuevas vistas requeridas por la pauta */}
          <Route path="/categorias" element={<Categorias agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/ofertas" element={<Ofertas agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />

          {/* Flujo de Carrito y Pago (Checkout) */}
          <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
          <Route 
            path="/checkout" 
            element={<Checkout carrito={carrito} setCarrito={setCarrito} setOrdenActual={setOrdenActual} />} 
          />
          <Route path="/pago-exitoso" element={<PagoExitoso orden={ordenActual} />} />
          <Route path="/pago-error" element={<PagoError orden={ordenActual} />} />
        </Routes>
      </div>

      {/* 3. El Footer al final de la página */}
      <Footer />
    </div>
  );
}

export default App;

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { DetalleResena } from './DetalleResena';

describe('Prueba Unitaria - Vista DetalleResena', () => {
  it('debe permitir escribir un nuevo comentario y publicar una reseña comunitaria', () => {
    // Simulamos la entrada a la reseña del álbum 'alb-1'
    render(
      <MemoryRouter initialEntries={['/resena/alb-1']}>
        <Routes>
          <Route path="/resena/:id" element={<DetalleResena />} />
        </Routes>
      </MemoryRouter>
    );

    // Seleccionamos el campo de texto de la reseña
    const textarea = screen.getByPlaceholderText(/¿Qué opinas de este disco\?.../i);
    fireEvent.change(textarea, { target: { value: 'Excelente álbum de culto' } });

    // Hacemos clic en el botón Publicar Reseña
    const botonPublicar = screen.getByRole('button', { name: /Publicar Reseña/i });
    fireEvent.click(botonPublicar);

    // Verificamos que el comentario se despliegue en pantalla
    expect(screen.getByText(/"Excelente álbum de culto"/i)).toBeInTheDocument();
  });
});
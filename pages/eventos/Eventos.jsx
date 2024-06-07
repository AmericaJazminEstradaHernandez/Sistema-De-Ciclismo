// PaginaEventos.jsx

import React from 'react';
import EventosFormulario from './EventosFormulario';
import './eventos.css'; // Asegúrate de importar el archivo de estilos

const PaginaEventos = () => {
  return (
    <div className="pagina-eventos">
      <h1 className="titulo">Carreras Creadas</h1>
      <EventosFormulario />
    </div>
  );
};

export default PaginaEventos;

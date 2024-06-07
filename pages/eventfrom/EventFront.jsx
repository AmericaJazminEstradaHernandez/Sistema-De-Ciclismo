import React, { useState } from 'react';
import './eventFront.css';

let eventCounter = 1;

const EventForm = () => {
  const [eventNumber, setEventNumber] = useState(eventCounter);
  const [formData, setFormData] = useState({
    raceType: '',
    country: '',
    municipality: '',
    date: '',
    stages: '',
    distance: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event ${eventNumber} created!`);
    eventCounter++;
    setEventNumber(eventCounter);
    resetForm();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert(`Event ${eventNumber} updated!`);
  };

  const handleDelete = () => {
    alert(`Event ${eventNumber} deleted!`);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      raceType: '',
      country: '',
      municipality: '',
      date: '',
      stages: '',
      distance: '',
    });
  };

  return (
    <div className="event-form-container">
      <h2>{isEditing ? 'Edit Event' : 'Crear EventoNuevo'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de carrera:</label>
          <select
            name="raceType"
            value={formData.raceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Seleccionar tipo de Carrera</option>
            <option value="Road Race">Carrera de Ruta</option>
            <option value="Time Trial">Carrera contra Reloj</option>
            <option value="Mountain Bike">Ruta de montaña</option>
            <option value="Cyclocross">Ciclismo de Pista</option>
          </select>
        </div>
        <div className="form-group">
          <label>Estado:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Municipio:</label>
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Numero de Etapas:</label>
          <input
            type="number"
            name="stages"
            value={formData.stages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Distancia (km):</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            required
          />
        </div>
        {isEditing ? (
          <div className="button-group">
            <button type="button" className="half-width save-button" onClick={handleSave}>Save</button>
            <button type="button" className="half-width delete-button" onClick={handleDelete}>Delete</button>
          </div>
        ) : (
          <div className="button-group">
            <button type="submit" className="half-width save-button">Crear Evento</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EventForm;

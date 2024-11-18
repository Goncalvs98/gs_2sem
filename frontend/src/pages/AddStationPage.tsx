// src/pages/AddStationPage.tsx
import React, { useState } from 'react';
import { addStation } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddStationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    location: '',
    status: 'active',
    capacity: 0,
    available: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStation(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Adicionar Estação</h1>
      <input name="location" placeholder="Localização" onChange={handleChange} required />
      <input name="capacity" type="number" placeholder="Capacidade" onChange={handleChange} required />
      <input name="available" type="number" placeholder="Disponível" onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddStationPage;

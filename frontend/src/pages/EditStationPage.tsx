// src/pages/EditStationPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStations, updateStation } from '../services/api';
import { Station } from '../types/Station';

const EditStationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [station, setStation] = useState<Station | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStation = async () => {
      const stations = await fetchStations();
      const currentStation = stations.find((s) => s.id === id);
      if (currentStation) setStation(currentStation);
      setLoading(false);
    };

    loadStation();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (station) {
      setStation({ ...station, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (station) {
      await updateStation(station.id, station);
      navigate('/');
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (!station) return <p>Estação não encontrada.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Estação</h1>
      <label>
        Localização:
        <input
          name="location"
          value={station.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Status:
        <input
          name="status"
          value={station.status}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Capacidade:
        <input
          name="capacity"
          type="number"
          value={station.capacity}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Disponível:
        <input
          name="available"
          type="number"
          value={station.available}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditStationPage;

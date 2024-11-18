// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import { fetchStations, deleteStation } from '../services/api';
import { Station } from '../types/Station';
import StationCard from '../components/StationCard';

const HomePage: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStations = async () => {
      const data = await fetchStations();
      setStations(data);
      setLoading(false);
    };
    loadStations();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteStation(id);
    setStations(stations.filter((station) => station.id !== id));
  };

  if (loading) {
    return <p>Carregando estações...</p>;
  }

  return (
    <div>
      <h1>Estações de Recarga</h1>
      {stations.map((station) => (
        <StationCard key={station.id} station={station} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default HomePage;

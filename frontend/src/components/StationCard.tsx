// src/components/StationCard.tsx
import React from 'react';
import { Station } from '../types/Station';

interface Props {
  station: Station;
  onDelete: (id: string) => void;
}

const StationCard: React.FC<Props> = ({ station, onDelete }) => {
  return (
    <div className="station-card">
      <h3>{station.location}</h3>
      <p>Status: {station.status}</p>
      <p>Capacidade: {station.capacity}</p>
      <p>Disponível: {station.available}</p>
      <button onClick={() => onDelete(station.id)}>Deletar</button>
    </div>
  );
};

export default StationCard;

// src/components/StationCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Station } from '../types/Station';

interface Props {
  station: Station;
  onDelete: (id: string) => void;
}

const StationCard: React.FC<Props> = ({ station, onDelete }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5">{station.location}</Typography>
        <Typography>Status: {station.status}</Typography>
        <Typography>Capacidade: {station.capacity}</Typography>
        <Typography>Disponível: {station.available}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(station.id)}
        >
          Deletar
        </Button>
      </CardContent>
    </Card>
  );
};

export default StationCard;
